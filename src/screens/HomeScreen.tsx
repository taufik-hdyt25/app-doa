import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
} from "react-native";
import {
  AdEventType,
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";
import ListItem from "../components/ListItem";
import { adsConfig } from "../utils/adsGlobal";

const HomeScreen = ({ navigation }: any) => {
  const { data: datas, isLoading } = useQuery({
    queryKey: ["doa"],
    queryFn: async () => {
      const response = await axios.get(
        "https://doa-doa-api-ahmadramadhan.fly.dev/api"
      );
      return response.data;
    },
  });

  const [activeAds, setActiveAds] = useState(false);
  const { bannerAds, interstialAds } = adsConfig("prod");

  // buat iklan muncul full

  const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
  });

  const [countTouch, setCountTouch] = useState(0);
  const handleTouch = () => {
    setCountTouch(countTouch + 1);
  };

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        if (countTouch % 3 === 0) {
          setActiveAds(true);
          interstitial.show();
        }
      }
    );
    const closed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setActiveAds(false);
    });

    interstitial.load();

    return () => {
      unsubscribe();
      closed();
    };
  }, [countTouch]);

  return (
    <View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        {!activeAds && (
          <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
        )}
      </View>
      <View style={{ padding: 10, gap: 5 }}>
        {isLoading ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: Dimensions.get("window").height - 200,
            }}
          >
            <ActivityIndicator color={"#1B1A55"} size={"large"} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "black",
                fontWeight: "800",
                marginLeft: 10,
              }}
            >
              Loading...
            </Text>
          </View>
        ) : (
          <FlatList
            data={datas}
            keyExtractor={(item, index) => `key_doa${index}`}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    marginTop: index !== 0 ? 10 : 0,
                  }}
                >
                  <ListItem
                    handleTouch={handleTouch}
                    navigation={navigation}
                    data={item}
                    index={index}
                    allDatas={datas}
                  />
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
