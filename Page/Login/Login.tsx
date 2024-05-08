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
    ActivityIndicator,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, useAnimatedGestureHandler, withTiming, Easing } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import React from 'react';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Login = () => {
    const navigate = useNavigation<any>()
    const [activeEmail, setActiveEmail] = useState(false);
    const [activePassword, setActivePassWord] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toast, setToast] = useState(false);
    const [toastPhone, setToastPhone] = useState(false);
    const [loading , setLoading] = useState(false);

    const handleActiveEmail = () => {
        setActiveEmail(true)
        setActivePassWord(false)
    }
    const handleActivePassword = () => {
        setActiveEmail(false)
        setActivePassWord(true)

    }

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSignIn = async () => {
        Keyboard.dismiss()
        if (email == '' && password == '') {
            setToast(true)
            setToastPhone(true)
            return
        }

        if (validateEmail(email) == false) {
            setToast(true)
            return
        }
        try {
            setLoading(true)
            const resAuth = await auth().signInWithEmailAndPassword(email, password)
            const usersCollection = firestore().collection('users');
            const querySnapshot = await usersCollection.where("email".toLocaleLowerCase(), "==", email).get();
            const data: any[] = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            console.log("data", data)
            if (data.length > 0) {
                navigate.navigate("otp", { resAuth : resAuth, data: data })
                setLoading(false)
            }
        } catch (err) {
            setLoading(false)
            console.log(err)
            setToastPhone(true)
        }


    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <TouchableOpacity onPress={() => navigate.navigate("Introduce")} style={{ width: 50, height: 50 }}>
                        <Image source={require("../../img/Close.png")} />
                    </TouchableOpacity>
                    <View style={styles.form}>
                        <Text style={[styles.text, { fontSize: 22 }]}>Sign in to Coinbase</Text>
                        <Text style={[styles.text, { fontSize: 16, color: activeEmail ? "#2752E7" : "#000" }]}>Email</Text>
                        <View style={[styles.textInput, { borderColor: activeEmail ? '#2752E7' : "#CFCFCF" }]}>
                            <TextInput
                                value={email}
                                onFocus={handleActiveEmail}
                                placeholder='Email or phone number'
                                onChangeText={(text) => {setEmail(text) , setToast(false)}}
                            />
                        </View>
                        {((email.length > 5 && validateEmail(email) == false) || toast) &&
                            <Text style={[styles.text, { fontSize: 12, color: "red", paddingHorizontal: 5 }]}>Email is not malformer !</Text>
                        }

                        <Text style={[styles.text, { fontSize: 16, color: activePassword ? "#2752E7" : "#000" }]}>Password</Text>
                        <View style={[styles.textInput, { flexDirection: 'row', borderColor: activePassword ? '#2752E7' : "#CFCFCF" }]}>
                            <TextInput
                                value={password}
                                onFocus={handleActivePassword}
                                placeholder='Password'
                                secureTextEntry={showPassword ? true : false}
                                style={{ width: '90%' }}
                                onChangeText={(text) => {setPassword(text), setToastPhone(false)}}

                            />
                            <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                                <Image style={{ width: 25, height: 25 }} source={require("../../img/hide.png")} />
                            </TouchableOpacity>
                        </View>
                        {toastPhone &&
                            <Text style={[styles.text, { fontSize: 12, color: "red", paddingHorizontal: 5 }]}>Your password is not acceptable !</Text>

                        }

                        <View style={styles.forgot}>
                            <Text style={[styles.text, { fontSize: 16, color: '#2752E7' }]}>Forgot password</Text>
                            <Text style={[styles.text, { fontSize: 16, color: '#2752E7' }]}>Privacy policy</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[styles.btn, { marginTop: 50 }]}
                        onPress={() => handleSignIn()}
                    >
                        <Text style={[styles.text, { color: '#fff', fontSize: 19 }]}>Sign In</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
            {loading &&  <ActivityIndicator size={'large'} style={styles.activity} />}
        </>

    )
}
export default Login