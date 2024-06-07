import { Pressable, Text, View } from "react-native";
import { IDoa } from "../interfaces/doa.interface";

type ListItem = {
  data?: IDoa;
  navigation: any;
  handleTouch: () => void;
  index:number
  allDatas?: IDoa[]
};
const ListItem = ({ data, navigation, handleTouch,allDatas,index }: ListItem) => {
  const singkatKalimat = (kalimat:any) => {
    const kata = kalimat.split(' '); // Memecah kalimat menjadi array kata
    if (kata.length > 5) { // Jika jumlah kata lebih dari 4
      return kata.slice(0, 4).join(' ') + '...'; // Menggabungkan kata pertama sampai ke-4 dan menambahkan "..."
    } else {
      return kalimat; // Jika kata 4 atau kurang, kembalikan kalimat asli
    }
  };
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
            {`${index + 1}. `}
          </Text>
          <Text
          
            style={{
              color: "black",
              fontSize: 14,
              fontFamily: "Poppins-Regular",
        
            }}
          >
            {singkatKalimat(data?.doa)}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ListItem;
