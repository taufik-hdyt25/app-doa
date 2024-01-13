import { StatusBar, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IDoa } from "../interfaces/doa.interface";
import { ScrollView } from "react-native-gesture-handler";
import { InterstitialAd, TestIds } from "react-native-google-mobile-ads";
import { useEffect } from "react";

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
  const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
  });


  return (
    <View>
      <StatusBar backgroundColor="#6379EA" />
      <ScrollView>
        <View style={{ padding: 10, gap: 5 }}>
          {isLoading && <Text>Loading...</Text>}
          {data?.map((data: IDoa) => (
            <ListItem key={data.id} navigation={navigation} data={data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
