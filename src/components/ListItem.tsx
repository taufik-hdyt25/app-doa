import { Pressable, Text, View } from "react-native";
import { IDoa } from "../interfaces/doa.interface";

type ListItem = {
  data?: IDoa;
  navigation: any;
  handleTouch: () => void;
  index?:number
  allDatas: IDoa[]
};
const ListItem = ({ data, navigation, handleTouch,allDatas,index }: ListItem) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("DetailScreen", {allDatas,index});
          handleTouch();
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
          <Text
            style={{
              color: "black",
              fontWeight: "500",
              fontFamily: "Poppins-Regular",
            }}
          >
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
