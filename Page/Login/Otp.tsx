import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    useWindowDimensions,
    TextInput,
    ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, useAnimatedGestureHandler, withTiming, Easing } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import React from 'react';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setLogin } from "../../Redux/loginReducer"


const Otp = ({ route }: any) => {
    const dispath = useDispatch()
    const { resAuth, data } = route.params;
    console.log("check test", resAuth['user'].photoURL)
    const navigate = useNavigation<any>()
    const [active, setActiveEmail] = useState(false);
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false)

    const signInWithPhoneNumber = async (phoneNumber: string) => {
        const confirmation: any = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }


    const handleActive = () => {
        setActiveEmail(prev => !prev)
    }

    const handleSubmit = async () => {
        if (code.length < 0) return
        setLoading(true)
        const payload = {
            username: data[0].username,
            token: '',
            isAuthentication: true,
            phone: data[0].phone

        }

        dispath(setLogin(payload))


    }

    useEffect(() => {
        // signInWithPhoneNumber(data[0].phone)
    }, [])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={[styles.body, { flex: 2 }]}>
                    <TouchableOpacity onPress={() => navigate.navigate("Login")} style={{ width: 50, height: 50 }}>
                        <Image source={require("../../img/Arrow_left.png")} />
                    </TouchableOpacity>
                    <View style={styles.form}>
                        <Text style={[styles.text, { fontSize: 22 }]}>Enter the 7-digit code we texted to +xx xxxx xx{data[0].phone.slice(7, 10)}</Text>
                        <Text style={[styles.text, { fontSize: 16, color: "#707070" }]}>This extra step shows it’s really you trying to sign in</Text>
                        <View style={[styles.textInput, { borderColor: active ? '#2752E7' : "#CFCFCF" }]}>
                            <TextInput
                                value={code}
                                onFocus={handleActive}
                                placeholder='Enter code'
                                onChangeText={(Text) => setCode(Text)}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.body]}>
                    <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                        <Text style={[styles.text, { color: '#fff', fontSize: 19 }]}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={[styles.btn, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#CFCFCF' }]}
                    >
                        <Text style={[styles.text, { fontSize: 19 }]}>I need help</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
            {loading && <ActivityIndicator style={styles.activity} />}

        </>

    )
}
export default Otp