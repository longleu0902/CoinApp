import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 30,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        position : 'relative'
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 40,
        height: 40,
        // backgroundColor: "#2752E7",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: "700",
        color: '#707070'

    },
    spend: {
        width: "100%",
        height: 400,
        position: "absolute",
        backgroundColor:"#fff",
        top : -400,
        borderTopLeftRadius : 20,
        borderTopRightRadius: 20
        
    
    }
})
export default styles