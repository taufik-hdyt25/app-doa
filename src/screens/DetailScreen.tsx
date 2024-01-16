import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { IDoa } from "../interfaces/doa.interface";
import {
  GAMBannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const DetailScreen = ({ route }: any) => {
  const id = route.params.id;
  const { data, isLoading } = useQuery<IDoa[]>({
    queryKey: ["detailDoa"],
    queryFn: async () => {
      const response = await axios.get(
        `https://doa-doa-api-ahmadramadhan.fly.dev/api/${id}`
      );
      return response.data;
    },
  });

  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9903584691242938/8201278827';

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={style.title}>{data?.[0].doa}</Text>
          <Text style={style.ayat}>{data?.[0].ayat}</Text>
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
          <Text style={style.latin}>{data?.[0].latin}</Text>
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
          <Text style={style.artinya}>{data?.[0].artinya}</Text>
        </View>
      </ScrollView>

      <View style={{display:"flex",flexDirection:"row", justifyContent:"center"}}>
        <GAMBannerAd
          unitId={adUnitId}
          sizes={[BannerAdSize.LARGE_BANNER]}
          requestOptions={{ 
            requestNonPersonalizedAdsOnly: true,
          }}
        />
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
