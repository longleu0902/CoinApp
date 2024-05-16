import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        // margin: 20
    },
    header : {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        gap : 20
    },
    content : {
        padding : 20,
        gap : 20
    },
    text : {
        fontSize : 16 ,
        fontWeight : "600"

    },
    chooseCoin : {
        height : 30 ,
    }
})

export default styles;