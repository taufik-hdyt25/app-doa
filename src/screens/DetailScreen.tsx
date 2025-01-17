import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BannerAd,
  BannerAdSize
} from "react-native-google-mobile-ads";
import { adsConfig } from "../utils/adsGlobal";

const DetailScreen = ({ route }: any) => {
  const { allDatas, index } = route?.params;
  const [data, setData] = useState(allDatas);
  const [activeIndex, setActiveIndex] = useState(index);
  const [count, setCount] = useState(3);
  const { interstialAds, bannerAds } = adsConfig("prod");
  // // ADS
  // // menggunakan hooks
  // const { isLoaded, isClosed, load, show } = useInterstitialAd(
  //   TestIds.INTERSTITIAL,
  //   {
  //     requestNonPersonalizedAdsOnly: true,
  //   }
  // );
  // // untuk load iklan
  // useEffect(() => {
  //   if (count % 5 === 0) {
  //     if(isLoaded){
  //       show()
  //     }
  //   }
  //   load();
  // }, [load, count]);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={style.title}>{data?.[activeIndex]?.doa}</Text>
          <Text style={style.ayat}>{data?.[activeIndex]?.ayat}</Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 14,
              fontFamily: "Poppins-MediumItalic",
              color: "black",
            }}
          >
            Latin :
          </Text>
          <Text style={style.latin}>{data?.[activeIndex]?.latin}</Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 14,
              fontFamily: "Poppins-Regular",
              color: "#31304D",
            }}
          >
            Artinya :
          </Text>
          <Text style={style.artinya}>{data?.[activeIndex]?.artinya}</Text>
        </View>
      </ScrollView>

      <View
        style={{
          alignItems: "center",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#31304D",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 8,
            }}
            onPress={() => {
              if (activeIndex === 0) {
                return;
              } else {
                setActiveIndex(activeIndex - 1);
                setCount(count + 1);
              }
            }}
          >
            <Text style={{ fontFamily: "Poppins-SemiBold", color: "white" }}>
              Prev
            </Text>
          </TouchableOpacity>
          <View style={{ width: 10 }} />
          <TouchableOpacity
            style={{
              backgroundColor: "#31304D",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 8,
            }}
            onPress={() => {
              setActiveIndex((activeIndex + 1) % data?.length);
              setCount(count + 1);
            }}
          >
            <Text style={{ fontFamily: "Poppins-SemiBold", color: "white" }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
        <BannerAd unitId={bannerAds} size={BannerAdSize.LARGE_BANNER} />
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const style = StyleSheet.create({
  title: {
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    fontSize: 18,
    color: "black",
  },
  ayat: {
    marginTop: 20,
    fontSize: 24,
    color: "black",
  },
  latin: {
    fontSize: 14,
    fontFamily: "Poppins-MediumItalic",
    color: "black",
  },
  artinya: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#31304D",
  },
});
