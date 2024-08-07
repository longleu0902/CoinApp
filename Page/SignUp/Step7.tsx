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
import { useDispatch, useSelector } from 'react-redux';
import { setSignUp } from '../../Redux/signUpReducer';


interface listNumber {
    id: number,
    number: string,
    country: string,
}

const Step7 = (props: any) => {
    const navigate = useNavigation<any>();
    const [active, setActiveEmail] = useState(false);
    const [address, setAddress] = useState('');
    const [notifyAddress, setNotifyAddress] = useState(false)
    const dataSignUp: any = useSelector<any>(state => state.sigup.data);
    const handleActive = () => {
        setActiveEmail(prev => !prev)
    }
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (address == '') {
            setNotifyAddress(true)
            return;
        }

        dispatch(setSignUp({...dataSignUp , address : address}))
        props.setStep(8)

    }





    return (

        <>
            <View style={styles.form}>
                <Text style={[styles.text, { fontSize: 22 }]}>Enter your address</Text>
                <Text style={[styles.text, { fontSize: 16, color: "#707070" }]}>Enter the street address of your primary residence. Please do not use a PO box or business address</Text>
                <Text style={[styles.text, { color: active ? 'blue' : '#000' }]}>Search for Address</Text>
                <View style={[styles.textInput, { borderColor: active ? '#2752E7' : "#CFCFCF", width: '100%' }]}>
                    <TextInput
                        value={address}
                        onFocus={handleActive}
                        placeholder='Your Address'
                        onChangeText={(text) => { setAddress(text), setNotifyAddress(false) }}
                    />
                </View>
                {notifyAddress &&
                    <Text style={[styles.text, { color: 'red' }]}>Enter your address</Text>
                }

                <View style={{ flexDirection: 'row', gap: 10, borderBottomWidth: 1, borderBottomColor: "#000", paddingVertical: 20, justifyContent: 'space-between' }}>
                    <Text style={[styles.text, { fontWeight: "400" }]}>Enter your address</Text>
                    <Image source={require("../../img/Right.png")} />
                </View>

            </View>
            <TouchableOpacity onPress={handleSubmit} style={[styles.btn, { marginTop: 50 }]}>
                <Text style={[styles.text, { color: '#fff', fontSize: 19 }]}>Countinue</Text>
            </TouchableOpacity>
        </>

    )
}
export default Step7