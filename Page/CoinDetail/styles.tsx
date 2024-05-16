import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        height: 70,
    },
    text: {
        fontSize: 18,
        fontWeight: "700"
    },
    title: {
        width: "95%",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
        paddingVertical: 30,
        
    },
    bill: {
        paddingVertical: 30,
        paddingHorizontal: 10,
        gap: 30,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    itemBill :{
        gap : 30
    },
    btn : {
        backgroundColor: "#2752E7",
        alignItems:"center",
        justifyContent:"center",
        height : 50,
        borderRadius : 10,
        marginTop : 20
    }
})

export default styles;