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


const Otp = () => {
    const navigate = useNavigation<any>()
    const [active, setActiveEmail] = useState(false);

    const handleActive = () => {
        setActiveEmail(prev => !prev)
    }

    const handleSubmit = () => {


    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.body, { flex: 2 }]}>
                <TouchableOpacity onPress={() => navigate.navigate("Login")} style={{ width: 50, height: 50 }}>
                    <Image source={require("../../img/Arrow_left.png")} />
                </TouchableOpacity>
                <View style={styles.form}>
                    <Text style={[styles.text, { fontSize: 22 }]}>Enter the 7-digit code we texted to +xx xxxx xx88</Text>
                    <Text style={[styles.text, { fontSize: 16, color: "#707070" }]}>This extra step shows it’s really you trying to sign in</Text>
                    <View style={[styles.textInput, { borderColor: active ? '#2752E7' : "#CFCFCF" }]}>
                        <TextInput
                            onFocus={handleActive}
                            placeholder='Enter code'
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
    )
}
export default Otp