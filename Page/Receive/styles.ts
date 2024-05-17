import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        margin: 20,
        gap: 30
    },
    body: {
        borderWidth: 1,
        borderColor: "#ccc",
        height: 400,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    qrcode: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: "75%"

    },
    code: {
        borderTopWidth: 1,
        borderColor: "#ccc",
        height: "25%",
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20

    },
    wallet: {
        gap: 4
    },
    btnCoppy: {
        borderWidth: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: "#ccc",
        borderRadius: 7

    },
    btnShareAdrees: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#2752E7",
        padding: 20,
        borderRadius: 7

    }, 
})



export default styles;