import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20

    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 30
    },
    title: {

    },
    search: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 50,
        borderColor: "#ccc",

    },

    textTitle: {
        fontSize: 16
    },
    textContent: {
        fontSize: 14
    },
    listCoin: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    active: {
        marginTop: 100,
    }
})
export default styles;