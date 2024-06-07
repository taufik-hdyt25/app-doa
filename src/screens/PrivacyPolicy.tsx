import {
  Dimensions,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListSection from "../components/ListSection";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";
import { adsConfig } from "../utils/adsGlobal";

interface IData {
  title: string;
  link: string;
}
const PrivacyPolicy = () => {
  const { bannerAds, interstialAds } = adsConfig("prod");
  return (
    <SafeAreaView>
      <View
        style={{
          top: 0,
          width: Dimensions.get("window").width,
          alignItems: "center",
        }}
      >
        <BannerAd unitId={bannerAds} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={style.privacyTitle}>Privacy Policy</Text>
          <Text style={style.privacyDes}>
            Taufik Hidayat built the Kumpulan Doa Lengkap app as a Free app.
            This SERVICE is provided by Taufik Hidayat at no cost and is
            intended for use as is. This page is used to inform visitors
            regarding my policies with the collection, use, and disclosure of
            Personal Information if anyone decided to use my Service. If you
            choose to use my Service, then you agree to the collection and use
            of information in relation to this policy. The Personal Information
            that I collect is used for providing and improving the Service. I
            will not use or share your information with anyone except as
            described in this Privacy Policy. The terms used in this Privacy
            Policy have the same meanings as in our Terms and Conditions, which
            are accessible at Kumpulan Doa Lengkap unless otherwise defined in
            this Privacy Policy.
          </Text>

          <Text
            style={{
              marginTop: 10,
              fontFamily: "Poppins-Regular",
              color: "#31304D",
              fontWeight: "800",
              fontSize: 16,
            }}
          >
            Information Collection and Use
          </Text>
          <Text style={style.privacyDes}>
            For a better experience, while using our Service, I may require you
            to provide us with certain personally identifiable information,
            including but not limited to Taufik. The information that I request
            will be retained on your device and is not collected by me in any
            way. The app does use third-party services that may collect
            information used to identify you.
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 14,
              fontFamily: "Poppins-Regular",
              color: "#31304D",
            }}
          >
            Link to the privacy policy of third-party service providers used by
            the app
          </Text>

          <ListSection
            link="https://policies.google.com/privacy"
            title="Google Play Services"
          />
          <ListSection
            link="https://support.google.com/admob/answer/6128543?hl=en"
            title="AdMob"
          />
          <ListSection
            link="https://firebase.google.com/support/privacy?hl=id"
            title="Google Analytics for Firebase"
          />
          <ListSection
            link="https://firebase.google.com/support/privacy?hl=id"
            title="Firebase Crashlytic"
          />
          <ListSection
            link="https://www.facebook.com/about/privacy/update/printable"
            title="Facebook"
          />
          <ListSection
            link="https://www.applovin.com/privacy/"
            title="AppLovin"
          />

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "#31304D",
                fontWeight: "800",
              }}
            >
              Log Data
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: "grey",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              I want to inform you that whenever you use my Service, in a case
              of an error in the app I collect data and information (through
              third-party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing my Service, the time and
              date of your use of the Service, and other statistics.
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "#31304D",
                fontWeight: "800",
              }}
            >
              Cookies
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: "grey",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device's internal memory. This Service does not use these
              “cookies” explicitly. However, the app may use third-party code
              and libraries that use “cookies” to collect information and
              improve their services. You have the option to either accept or
              refuse these cookies and know when a cookie is being sent to your
              device. If you choose to refuse our cookies, you may not be able
              to use some portions of this Service.
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "#31304D",
                fontWeight: "800",
              }}
            >
              Service Providers
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: "grey",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              I may employ third-party companies and individuals due to the
              following reasons :
            </Text>

            <View>
              <ListSection title="To facilitate our Service" />
              <ListSection title="To provide the Service on our behalf" />
              <ListSection title="To perform Service-related services; or" />
              <ListSection title="To assist us in analyzing how our Service is used." />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: "grey",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              I want to inform users of this Service that these third parties
              have access to their Personal Information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "#31304D",
                fontWeight: "800",
              }}
            >
              Security
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: "grey",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              I value your trust in providing us your Personal Information, thus
              we are striving to use commercially acceptable means of protecting
              it. But remember that no method of transmission over the internet,
              or method of electronic storage is 100% secure and reliable, and I
              cannot guarantee its absolute security.
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "#31304D",
                fontWeight: "800",
              }}
            >
              Links to Other Sites
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: "grey",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by me. Therefore, I strongly
              advise you to review the Privacy Policy of these websites. I have
              no control over and assume no responsibility for the content,
              privacy policies, or practices of any third-party sites or
              services.
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "#31304D",
                fontWeight: "800",
              }}
            >
              Children’s Privacy
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: "grey",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              These Services do not address anyone under the age of 13. I do not
              knowingly collect personally identifiable information from
              children under 13 years of age. In the case I discover that a
              child under 13 has provided me with personal information, I
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact me so that I will be able to
              do the necessary actions.
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "#31304D",
                fontWeight: "800",
              }}
            >
              Changes to This Privacy Policy
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: "grey",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              I may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. I will
              notify you of any changes by posting the new Privacy Policy on
              this page. This policy is effective as of 2024-01-16
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "#31304D",
                fontWeight: "800",
              }}
            >
              Contact Us
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: "grey",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              If you have any questions or suggestions about my Privacy Policy,
              do not hesitate to contact me at taufikhdyt2599@gmail.com. This
              privacy policy page was created at{" "}
              <Text
                onPress={() =>
                  Linking.openURL("https://www.privacypolicytemplate.net/")
                }
                style={{ color: "blue" }}
              >
                privacypolicytemplate.net
              </Text>{" "}
              and modified/generated by{" "}
              <Text
                onPress={() =>
                  Linking.openURL(
                    "https://app-privacy-policy-generator.nisrulz.com/"
                  )
                }
                style={{ color: "blue" }}
              >
                App Privacy Policy Generator
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const style = StyleSheet.create({
  privacyTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#31304D",
    fontWeight: "800",
  },
  privacyDes: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "grey",
    textAlign: "justify",
    marginTop: 10,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  itemTitle: {
    color: "#6379EA",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
});
