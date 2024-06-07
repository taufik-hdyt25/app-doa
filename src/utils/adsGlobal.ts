import {
    TestIds
} from "react-native-google-mobile-ads";
export  const adsConfig = (type: any) => {
  const interstialAds = type === "prod" ? "ca-app-pub-9903584691242938/5635050579" : TestIds.INTERSTITIAL;
  const bannerAds = type === "prod" ? "ca-app-pub-9903584691242938/8201278827"  :TestIds.BANNER

  return {
    interstialAds,
    bannerAds,
  };
};
