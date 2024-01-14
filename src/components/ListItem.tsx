import { Pressable, Text, View } from "react-native";
import { IDoa } from "../interfaces/doa.interface";

type ListItem = {
  data?: IDoa;
  navigation: any;
handleTouch: ()=> void
};
const ListItem = ({ data, navigation ,handleTouch}: ListItem) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("DetailScreen", {id:data?.id});
          handleTouch()
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderColor: "grey",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "black", fontWeight: "500" }}>
            {data?.id}.{" "}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 14,
              fontFamily: "Poppins-Regular",
            }}
          >
            {data?.doa}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ListItem;
