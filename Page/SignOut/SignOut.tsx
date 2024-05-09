import { Image, SafeAreaView, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../Redux/loginReducer";
import { useFocusEffect } from "@react-navigation/native";

const SignOut = () => {
    const dispath = useDispatch()

    const listAccount = [
        {
            id: 1,
            title: "Limits and features"
        },
        {
            id: 2,
            title: "Native currency"
        },
        {
            id: 3,
            title: "Country"
        },
        {
            id: 4,
            title: "Privacy"
        },
        {
            id: 5,
            title: "Phone numbers"
        },
        {
            id: 6,
            title: "Notification settings"
        },
    ]
    const handleChooseAccount = (id: number) => {
        console.log(id)
    }

    const [swichActivePin, setSwichActivePin] = useState(false);
    const [swichActivePrivate, setSwichActivePrivate] = useState(false);
    const user: any = useSelector<any>(state => state.login.payload)
    console.log("check user", user)
    const handleSignOut = () => {
        const payload = {
            username: '',
            token: '',
            isAuthentication: false,
            phone: '',
            address: '',
            firstname: '',
            lastname: ''
        }
        dispath(setLogin(payload))
    }

    //srollOnTop after render
    const scrollViewRef = useRef<ScrollView>(null);
    const resetScrollView = useSelector<any>(state => state.scrollView.render)


    const scrollToTop = () => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true }) ?? null;
    };


    useFocusEffect(
        useCallback(() => {
            scrollToTop()
        }, [resetScrollView])
    )

    return (
        <SafeAreaView>
            <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>

                {/*  username and email  */}
                <Text style={styles.text}>{user.username}</Text>
                <Text style={styles.title}>{user.lastname}, {user.firstname}</Text>
                <TouchableOpacity style={[styles.box, { height: 100 }]}>
                    <View style={{ flexDirection: "row", gap: 20, justifyContent: 'space-around' }}>
                        <Text style={[styles.text, { width: "60%", fontSize: 16 }]}>Share your love of crypto and get $10 of free Bitcoin</Text>
                        <Image source={require("../../img/BTC.png")} />
                    </View>
                </TouchableOpacity>

                {/* add payment  */}
                <Text style={styles.title}>Payment Methods</Text>
                <TouchableOpacity style={[styles.box]}>
                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                        <Text style={[styles.title, { fontSize: 16 }]}>Add a payment method</Text>
                    </View>
                </TouchableOpacity>

                {/* account  */}
                <Text style={styles.title}>Account</Text>
                <View style={{ gap: 10 }}>
                    {listAccount.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => handleChooseAccount(item.id)}
                                key={index}
                                style={styles.listAccount}>
                                <Text>{item.title}</Text>
                                <Image source={require("../../img/Right.png")} />
                            </TouchableOpacity>
                        )
                    })}
                </View>

                {/* security  */}
                <Text style={styles.title}>Security</Text>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>Require PIN / Face ID</Text>
                    <TouchableOpacity
                        onPress={() => setSwichActivePin(prev => !prev)}
                        style={[styles.swich,
                        {
                            justifyContent: swichActivePin ? "flex-end" : 'flex-start',
                            backgroundColor: swichActivePin ? "#2752E7" : '#ccc'
                        }]}>
                        <View style={styles.swichActive}></View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.listAccount}>
                    <Text>PIN/ Face ID settings</Text>
                    <Image source={require("../../img/Right.png")} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ width: "70%", gap: 4 }}>
                        <Text>Privacy mode</Text>
                        <Text style={{ fontSize: 13, color: "#707070" }}>Long press on your portfolio balance to hide your balances everywhere in the app</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setSwichActivePrivate(prev => !prev)}
                        style={[styles.swich,
                        {
                            justifyContent: swichActivePrivate ? "flex-end" : 'flex-start',
                            backgroundColor: swichActivePrivate ? "#2752E7" : '#ccc'
                        }]}>
                        <View style={styles.swichActive}></View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.listAccount}>
                    <Text>Support</Text>
                    <Image source={require("../../img/Right.png")} />
                </TouchableOpacity>

                {/* Sign out  */}
                <TouchableOpacity onPress={handleSignOut} style={[styles.box]}>
                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                        <Text style={[styles.title, { fontSize: 16, color: "#E25C5C" }]}>Sign Out</Text>
                    </View>
                </TouchableOpacity>

                <Text style={[styles.text, { fontSize: 12 }]}>App Version: 9.26.4 (92604), production</Text>

            </ScrollView>
        </SafeAreaView>
    )
}
export default SignOut;