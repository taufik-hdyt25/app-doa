import { Button, Image, StyleSheet, Text, View } from "react-native"


const SplashScreen = ({navigation}:any) => {
    return (
        <View style={style.container}>
            <Image style={style.logo} source={require('../assets/logo.png')} />
            <Text style={style.title}>Doa Doa Lengkap</Text>
            <Button onPress={()=> navigation.replace("HomeScreen")}  title="next" />
        </View>
    )
}

export default SplashScreen


const style = StyleSheet.create({
    logo : {
        width: 100,
        height: 100,
        alignSelf: "center",
        
    },
    container:{
        backgroundColor: "#3468C0",
        flex: 1,
        justifyContent: "center"
    },
    title: {
        color: "white",
        textAlign: "center",
        marginTop: 20,
        fontSize: 18,
        fontFamily: "Poppins-SemiBold"
    }
})