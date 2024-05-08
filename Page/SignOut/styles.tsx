import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        gap: 20,
        // backgroundColor:"#fff"
    },
    text: {
        color: "#707070",
        fontSize: 14
    },
    title: {
        color: "#000",
        fontSize: 27,
        fontWeight: "500"
    },
    box: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        width: "100%",
        padding: 20
    },
    listAccount: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        height : 40
    },
    swich : {
        width : 50 ,
        height : 32,
        borderRadius : 60,
        flexDirection:'row'
    },
    swichActive : {
        width : 30 ,
        height : 31,
        borderWidth : 1,
        borderColor:"#ccc",
        borderRadius : 50,
        backgroundColor:"#fff",
    }
})
export default styles;