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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, useAnimatedGestureHandler, withTiming, Easing } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import React from 'react';
import styles from './styles';


const Step2 = (props : any) => {
    const navigate = useNavigation<any>();
    const handleCheck = () => {
       props.setStep(3)

    }

    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center' , gap : 20 }}>
                <Image source={require("../../img/VerifyEmail.png")} />
                <Text style={[styles.text, {fontSize:22 , }]}>Verify your email</Text>
                <Text style={[styles.text, {color:"#707070"}]}>We sent a verification email to. Please tap the link inside that email to continiue</Text>
            </View>
            <TouchableOpacity
                style={[styles.btn, { marginTop: 50 }]}
                onPress={() => handleCheck()}
            >
                <Text style={[styles.text, { color: '#fff', fontSize: 19 }]}>Check my inbox</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, { backgroundColor: "#fff", borderWidth: 1, borderColor: '#ccc' }]}
                onPress={() => handleCheck()}
            >
                <Text style={[styles.text, { fontSize: 19 }]}>Resend email</Text>
            </TouchableOpacity>

        </>

    )
}
export default Step2