import { ReactNode } from "react";
import { Platform, Pressable, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
type Props = {
  children: ReactNode;
  isBack?: boolean;
  navigation?: any
};
const Layout: React.FC<Props> = ({ children, isBack,navigation }): JSX.Element => {
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#2D3250" }}>
        {isBack ? (
          <Pressable style={{ flexDirection: "row", alignItems: "center" }} onPress={()=> navigation?.goBack()} >
            <Appbar.Action icon={"arrow-left"} />
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
              Back
            </Text>
          </Pressable>
        ) : (
          <Appbar.Content
            titleStyle={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 16,
            }}
            title="Kumpulan Doa Lengkap"
          />
        )}
      </Appbar.Header>

      {children}
    </View>
  );
};

export default Layout;
