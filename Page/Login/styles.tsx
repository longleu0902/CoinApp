import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position:'relative'

    },
    body: {
        margin: 25,
        gap :20
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
        backgroundColor:'#2752E7',
    },
    form: {
        gap: 20
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        justifyContent: 'center'
    },
    forgot:{
        flexDirection: 'row' , 
        justifyContent:'space-between' ,
        marginTop: 30
    },
    activity : {
        position :'absolute',
        backgroundColor:"#000",
        height:'100%',
        width:'100%',
        opacity:0.7,
    }

})
export default styles;