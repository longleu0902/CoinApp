import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        // marginTop: 60,
        gap: 30,
    },
    addPayment: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    title: {
        fontSize: 20,
        fontWeight: "700"
    },
    text: {
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#2752E7',
        width: '100%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',

    },
    item: {
        gap: 20
    },
    btnItem: {
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    header : {
        flexDirection : 'row' ,
        justifyContent : 'space-between',
        padding : 20,
        alignItems:'center'
    },
    loadding : {
        flex : 1
    }
})
export default styles;