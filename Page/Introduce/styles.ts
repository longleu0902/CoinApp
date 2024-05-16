import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2752E7',

    },
    Item: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        gap : 10
    },
    text: {
        color: '#fff',
        fontWeight: "700",
        fontFamily: 'Graphik'
    },
    btn: {
        width: "100%",
        height: 58,
        borderRadius: 8,
        padding: 10,
        alignItems:'center',
        justifyContent:'center'
    }

})
export default styles;