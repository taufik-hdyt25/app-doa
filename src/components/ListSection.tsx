import { Linking, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface IProps {
  title?: string;
  link?: string;
}

const ListSection = ({ link, title }: IProps) => {
  return (
    <View style={style.item}>
      <MaterialIcons name="circle" color="black" size={10} />
      <Text
        onPress={link ? () => Linking.openURL(link) : () => {}}
        style={{
          fontSize: 14,
          fontFamily: "Poppins-Regular",
          color: link ?  "#6379EA" : "grey",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default ListSection;

const style = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
