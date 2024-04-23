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

interface valueList {
    id: number,
    title: string,
    description: string,
    status: string,

}

const Step3 = (props: any) => {
    const navigate = useNavigation<any>();
    const handleSignIn = () => {
       props.setStep(4)

    }

    const defaultValue: valueList[] = [
        {
            id: 1,
            title: "Create your account",
            description: '',
            status: "Completed",
        },
        {
            id: 2,
            title: "Secure your account",
            description: '2-step verification',
            status: "1 Min",
        },
        {
            id: 3,
            title: "Verify your identity",
            description: 'Required by financial regulations',
            status: "5 Min",
        },

    ]




    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                <Image source={require("../../img/SecureAccount.png")} />
            </View>
            <Text style={[styles.text, { fontSize: 22, }]}>Let’s secure your account</Text>
            <View style={styles.list}>
                {defaultValue.map((item: any, index: number) => (
                    <View key={index} style={styles.listItem}>
                        <View style={styles.boxNumber}>
                            <Text style={[styles.text, { color: '#fff' }]}>{item.id}</Text>
                        </View>
                        <View style={{width:"60%"}}>
                            <Text style={[styles.text]}>{item.title}</Text>
                            <Text style={[styles.text, { color: "#707070", fontSize: 12 }]}>{item.description}</Text>
                        </View>
                        <View style={{width:"30%"}}>
                            <Text style={[styles.text]}>{item.status}</Text>
                        </View>
                    </View>
                ))}

            </View>

            <TouchableOpacity
                style={[styles.btn, { marginTop: 50 }]}
                onPress={() => handleSignIn()}
            >
                <Text style={[styles.text, { color: '#fff', fontSize: 19 }]}>Start</Text>
            </TouchableOpacity>

        </>

    )
}
export default Step3