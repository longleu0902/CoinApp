import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content : {
        position: 'relative',
        flex: 1,

    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
    },
    text: {
        fontSize: 18,
        fontWeight: "700"
    },
    number: {
        alignItems: "center",
        justifyContent: 'center',
        height: 200
    },
    boxChange: {
        borderWidth: 1,
        borderColor: "#ccc",
        height: 70,
        borderRadius: 7,
        flexDirection: "row",
        alignItems: 'center',
        padding: 20,
        justifyContent: "space-between"
    },
    btnChange: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        alignItems: 'center',
        justifyContent: 'center'
    },
    keyboad: {
        flexDirection: 'row',
        marginTop: 30,
        flexWrap: 'wrap',
    },
    textNumber: {
        marginBottom: 10,
        padding: 10,
        width: "33%",
        alignItems: 'center',
        // borderWidth : 1

    },
    btn: {
        height: 50,
        backgroundColor: "#2752E7",
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chooseCoin: {
        position: 'absolute',
        width : "100%",
        height: "100%",
        right : 0,
        backgroundColor:"#fff",

    }

})

export default styles