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
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, useAnimatedGestureHandler, withTiming, Easing } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import React from 'react';
import styles from './styles';


const Login = () => {
    const navigate = useNavigation<any>()
    const [activeEmail, setActiveEmail] = useState(false);
    const [activePassword, setActivePassWord] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    const handleActiveEmail = () => {
        setActiveEmail(true)
        setActivePassWord(false)
    }
    const handleActivePassword = () => {
        setActiveEmail(false)
        setActivePassWord(true)

    }

    const handleSignIn = () => {
        navigate.navigate("otp")

    }

    return (
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
                            onFocus={handleActiveEmail}
                            placeholder='Email or phone number'
                        />
                    </View>
                    <Text style={[styles.text, { fontSize: 16, color: activePassword ? "#2752E7" : "#000" }]}>Password</Text>
                    <View style={[styles.textInput, { flexDirection: 'row', borderColor: activePassword ? '#2752E7' : "#CFCFCF" }]}>
                        <TextInput
                            onFocus={handleActivePassword}
                            placeholder='Password'
                            secureTextEntry={showPassword ? true : false}
                            style={{ width: '90%' }}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                            <Image style={{ width: 25, height: 25 }} source={require("../../img/hide.png")} />
                        </TouchableOpacity>
                    </View>
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
    )
}
export default Login