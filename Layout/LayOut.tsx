// import { useSelector } from "react-redux";

import AppRouter from "../Routes/AppRouter"
import LoginRouter from "../Routes/LoginRoutes"
import Nav from "../Page/Nav/Nav";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";

const LayOut = () => {
    const auth: any = useSelector<any>(state => state.login.payload)
    console.log(auth)
    if (auth.isAuthentication == true) {
        return (
            <View style={{flex : 1}}>
                <View style={styles.container}>
                    <AppRouter />
                </View>
                <View style={styles.nav}>
                    <Nav />
                </View>
            </View>
        )
    } else {
        return (
            <>
                <LoginRouter />
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:"88%"
    },
    nav: {
        height :"12%"
    }
})

export default LayOut;