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


const Step9 = (props : any) => {
    const navigate = useNavigation<any>();
    const handleCheck = () => {
    //    props.setStep(3)

    }

    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center' , gap : 20 }}>
                <Image source={require("../../img/Done.png")} />
                <Text style={[styles.text, {fontSize:22 , }]}>All done</Text>
                <Text style={[styles.text, {color:"#707070"}]}>Congrulations! Your account has been successfully added</Text>
            </View>
            <TouchableOpacity
                style={[styles.btn, { marginTop: 50 }]}
                onPress={() => handleCheck()}
            >
                <Text style={[styles.text, { color: '#fff', fontSize: 19 }]}>Done</Text>
            </TouchableOpacity>
        </>

    )
}
export default Step9