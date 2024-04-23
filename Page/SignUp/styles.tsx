import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    body: {
        margin: 25,
        gap: 20
    },
    text: {
        color: '#000',
        fontWeight: "700",
        fontFamily: 'Graphik'
    },
    btn: {
        width: "100%",
        height: 58,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2752E7',
    },
    form: {
        gap: 20,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        justifyContent: 'center',
    },
    valid: {
        flexDirection: 'row',
        gap: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    step: {
        height: 5,
        width: 70,
        backgroundColor: '#CFCFCF',
        borderRadius: 30
    },
    list: {
        gap: 10,
        marginTop: 20
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20
    },
    boxNumber: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#2752E7",
        alignItems: "center",
        justifyContent: "center"

    },
    chooseNumber: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position:'relative'

    },
    listNumber: {
        justifyContent: 'center',
        position: 'absolute',
        width: "20%",
        borderWidth: 1,
        borderColor: '#ccc',
        gap : 20,
        backgroundColor :"#fff",
        borderRadius : 5,
        height : 150,
        top : 5,
    },
    scroll : {
        padding : 10,
        gap : 15
    },
    date : {
        position :'absolute',
        backgroundColor: '#FFF',
        borderRadius: 10,
        width:'100%',
        height:'100%',
        padding:20,
        borderWidth: 1
    }

})
export default styles;