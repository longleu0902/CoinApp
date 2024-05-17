import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    containerModel:{
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        position: "absolute",
    },
    model : {
        width : 100 , 
        height : 40 ,
        backgroundColor :"#fff",
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        flexDirection : 'row',
        gap : 10
    },
    textModel : {
        fontWeight : "700"
    }
})

export default styles