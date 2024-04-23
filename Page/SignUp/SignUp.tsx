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
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step6 from './Step6';
import Step7 from './Step7';

const Signup = () => {
    const navigate = useNavigation<any>();
    const [step, setStep] = useState<number>(1)

    const status : any = () => {
        if (step == 1) {
            const statusColor = {
                statusFirst : "30%",
                statusSecond : 0,
                statusThird : 0
            }
            return statusColor
        }
        if (step == 2) {
            const statusColor = {
                statusFirst : "60%",
                statusSecond : 0,
                statusThird : 0

            }
            return statusColor
        }
        if (step == 3) {
            const statusColor = {
                statusFirst : "100%",
                statusSecond : 0,
                statusThird : 0

            }
            return statusColor
        }
        if (step == 4) { 
            const statusColor = {
                statusFirst : "100%",
                statusSecond : "50%",
                statusThird : 0

            }
            return statusColor
        }
        if (step == 5) { 
            const statusColor = {
                statusFirst : "100%",
                statusSecond : "100%",
                statusThird : 0

            }
            return statusColor
        }
        if (step == 6) { 
            const statusColor = {
                statusFirst : "100%",
                statusSecond : "100%",
                statusThird : "30%"
            }
            return statusColor
        }
        if (step == 7) { 
            const statusColor = {
                statusFirst : "100%",
                statusSecond : "100%",
                statusThird : "50%"
            }
            return statusColor
        }
        if (step == 8) { 
            const statusColor = {
                statusFirst : "100%",
                statusSecond : "100%",
                statusThird : "75%"
            }
            return statusColor
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigate.navigate("Introduce")} style={{ width: 50, height: 50 }}>
                        <Image source={require("../../img/Close.png")} />
                    </TouchableOpacity>
                    <View style={{ gap: 10 , flexDirection: 'row' }}>
                        <View style={[styles.step, { marginTop: 7 }]}>
                        <View style={[styles.step, { width: status()?.statusFirst, backgroundColor: '#2752E7' }]}></View>
                        </View>
                        <View style={[styles.step, { marginTop: 7 }]}>
                            <View style={[styles.step, { width: status()?.statusSecond, backgroundColor: '#2752E7', }]}></View>
                        </View>
                        <View style={[styles.step, { marginTop: 7 }]}>
                            <View style={[styles.step, { width: status()?.statusThird, backgroundColor: '#2752E7', }]}></View>
                        </View>
                    </View>

                </View>
                {step == 1 && <Step1 setStep={setStep} />}
                {step == 2 && <Step2 setStep={setStep} />}
                {step == 3 && <Step3 setStep={setStep} />}
                {step == 4 && <Step4 step={step} setStep={setStep} />}
                {step == 5 && <Step4 step={step} setStep={setStep} />}
                {step == 6 && <Step6 step={step} setStep={setStep} />}
                {step == 7 && <Step7 step={step} setStep={setStep} />}
                






            </View>

        </SafeAreaView>
    )
}
export default Signup