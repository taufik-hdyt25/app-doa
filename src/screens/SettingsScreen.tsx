import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modal, Portal, TextInput } from "react-native-paper";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import IconsFont from "react-native-vector-icons/FontAwesome";
import IconsMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import Mailer from "react-native-mail";
import { adsConfig } from "../utils/adsGlobal";

const SettingScreen = ({ navigation }: any) => {
  const [visible, setVisible] = useState(false);
  const { bannerAds, interstialAds } = adsConfig("pro");
  const [message, setMessage] = useState("");
  const sendRequest = () => {
    if (message === "") {
      Alert.alert("Error", "Email dan pesan harus diisi.");
      return;
    }

    const mailtoURL = `mailto:${"taufikhdyt2599@gmail.com"}?subject=${encodeURIComponent(
      "Request Doa"
    )}&body=${encodeURIComponent(message)}`;
    Linking.openURL(mailtoURL).catch((err) =>
      Alert.alert("Error", "Gagal membuka aplikasi email.")
    );
  };

  return (
    <View style={style.container}>
      <Text style={style.version}>Version 1.1.0</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Privacy")}
        style={{ backgroundColor: "#2D3250", padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: "white", fontFamily: "Poppins-Medium" }}>
          Privacy Policy
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Trems")}
        style={{
          backgroundColor: "#2D3250",
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontFamily: "Poppins-Medium" }}>
          Terms & Conditions
        </Text>
      </TouchableOpacity>
      <View style={{ height: 20 }} />

      <View
        style={{
          borderColor: "#2D3250",
          borderWidth: 1,
          paddingVertical: 10,
          borderRadius: 4,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            color: "#2D3250",
            fontFamily: "Poppins-Medium",
            textAlign: "center",
          }}
        >
          Contact Us
        </Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://t.me/+w9VsAWU7yiUzMGFl");
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <IconsFont name="telegram" color={"#2D3250"} size={34} />
          <Text
            style={{
              color: "#2D3250",
              fontFamily: "Poppins-SemiBold",
              marginLeft: 10,
            }}
          >
            Join Telegram
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
          onPress={() => setVisible(true)}
        >
          <IconsMaterial name="email" size={34} color={"#2D3250"} />
          <Text
            style={{
              color: "#2D3250",
              fontFamily: "Poppins-SemiBold",
              marginLeft: 10,
            }}
          >
            Request Doa
          </Text>
        </TouchableOpacity>
      </View>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={style.containerStyle}
        >
          <Text
            style={{
              color: "#2D3250",
              fontFamily: "Poppins-SemiBold",
              marginBottom: 7,
              fontSize: 16,
            }}
          >
            Request Doa
          </Text>
          <TextInput
            placeholder="Silahkan isi untuk request"
            value={message}
            onChangeText={(val) => setMessage(val)}
          />
          <TouchableOpacity
            onPress={sendRequest}
            style={{
              backgroundColor: "#2D3250",
              marginTop: 20,
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins-SemiBold",
              }}
            >
              Kirim
            </Text>
          </TouchableOpacity>
        </Modal>
      </Portal>
      <View style={{
        position:"absolute",
        bottom:0
      }}>
        <BannerAd unitId={bannerAds} size={BannerAdSize.FULL_BANNER} />
      </View>
    </View>
  );
};

export default SettingScreen;

const style = StyleSheet.create({
  container: {
    gap: 5,
    position: "relative",
    height: "100%",
    padding: 10,
  },
  version: {
    textAlign: "right",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#31304D",
  },
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
  },
});
