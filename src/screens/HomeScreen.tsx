import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { StatusBar, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AdEventType, InterstitialAd } from "react-native-google-mobile-ads";
import ListItem from "../components/ListItem";
import { IDoa } from "../interfaces/doa.interface";

const HomeScreen = ({ navigation }: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ["doa"],
    queryFn: async () => {
      const response = await axios.get(
        "https://doa-doa-api-ahmadramadhan.fly.dev/api"
      );
      return response.data;
    },
  });

  // buat iklan muncul full
  const idAds = "ca-app-pub-9903584691242938/5635050579";
  const interstitial = InterstitialAd.createForAdRequest(idAds, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
  });

  const [countTouch, setCountTouch] = useState(1);
  const handleTouch = () => {
    if (countTouch < 5) {
      setCountTouch((prevCount) => prevCount + 1);
    } else {
      setCountTouch(1);
    }
  };

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        if (countTouch === 3) {
          interstitial.show();
        }
      }
    );

    interstitial.load();

    return unsubscribe;
  }, [countTouch]);

  return (
    <View>
      <StatusBar backgroundColor="#6379EA" />
      <ScrollView>
        <View style={{ padding: 10, gap: 5 }}>
          {isLoading && (
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "black",
                fontWeight: "800",
              }}
            >
              Loading...
            </Text>
          )}
          {data?.map((data: IDoa) => (
            <ListItem
              handleTouch={handleTouch}
              key={data.id}
              navigation={navigation}
              data={data}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
