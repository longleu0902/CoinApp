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

const Step4 = (props: any) => {
    const navigate = useNavigation<any>();
    const [active, setActiveEmail] = useState(false);
    const [defaultNumber, setDefaultNumber] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [notifyNumber, setNotifyNumber] = useState(false)
    const dataSignUp: any = useSelector<any>(state => state.sigup.data);
    const dispatch = useDispatch();

    const handleActive = () => {
        setActiveEmail(prev => !prev)
    }

    const [showList, setShowList] = useState(false)


    const listNumber: listNumber[] = [
        { id: 1, number: "+84", country: "Viet Nam" },
        { id: 2, number: "+1", country: "United States" },
        { id: 3, number: "+44", country: "United Kingdom" },
        { id: 4, number: "+86", country: "China" },
        { id: 5, number: "+91", country: "India" },
        { id: 6, number: "+81", country: "Japan" },
        { id: 7, number: "+82", country: "South Korea" },
        { id: 8, number: "+61", country: "Australia" },
        { id: 9, number: "+49", country: "Germany" },
        { id: 10, number: "+33", country: "France" },
        { id: 11, number: "+7", country: "Russia" },
        { id: 12, number: "+34", country: "Spain" },
        { id: 13, number: "+39", country: "Italy" },
        { id: 14, number: "+52", country: "Mexico" },
        { id: 15, number: "+1", country: "Canada" },
        { id: 16, number: "+65", country: "Singapore" },
        { id: 17, number: "+84", country: "Vietnam" },
        { id: 18, number: "+62", country: "Indonesia" },
        { id: 19, number: "+880", country: "Bangladesh" },
        { id: 20, number: "+92", country: "Pakistan" }
    ];
    const handleSubmit = () => {
        if (props.step == 4) {
            if (numberPhone == '') {
                setNotifyNumber(true)
                return;
            }
            dispatch(setSignUp({ ...dataSignUp, phone: defaultNumber + numberPhone }))
            props.setStep(5)
        }
        if (props.step == 5) {
            props.setStep(6)
        }

    }

    useEffect(() => {
        setDefaultNumber(listNumber[0].number)
    }, [])

    const handleChooseNumber = (item: listNumber) => {
        setShowList(prev => !prev)
        console.log("cehck item ", item)
        setDefaultNumber(item.number)
    }


    return (

        <>
            <View style={styles.form}>
                <Text style={[styles.text, { fontSize: 22 }]}> {props.step == 4 ? " Set up 2-step verification" : "Enter authentication code"} </Text>
                <Text style={[styles.text, { fontSize: 16, color: "#707070" }]}>{props.step == 4 ? "Enter your phone number so we can text you an authentication code." : "Enter the 7-digit code we just texted to your phone number, "}</Text>
                {props.step == 4 &&
                    <View style={{ flexDirection: 'row', gap: 30 }}>
                        <Text style={[styles.text]}>Country</Text>
                        <Text style={[styles.text, { color: active ? 'blue' : '#000' }]}>Number</Text>
                    </View>
                }

                {props.step == 5 &&
                    <Text style={[styles.text, { color: active ? 'blue' : '#000' }]}>Code</Text>
                }

                <View style={{ flexDirection: 'row', gap: 10 }}>

                    {props.step == 4 &&
                        <View style={[styles.textInput, { width: '20%' }]}>
                            <View style={styles.chooseNumber}>
                                <Text>{defaultNumber}</Text>
                                <TouchableOpacity
                                    onPress={() => setShowList(prev => !prev)}
                                >
                                    <Text>▲</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }


                    <View style={[styles.textInput, { borderColor: active ? '#2752E7' : "#CFCFCF", width: props.step == 4 ? '75%' : '100%' }]}>
                        <TextInput
                            onFocus={handleActive}
                            keyboardType = "numeric"
                            onChangeText={(text) => { setNumberPhone(text), setNotifyNumber(false) }}
                            placeholder='Your Number Phone'
                            value={numberPhone}
                        />
                    </View>
                </View>
                {notifyNumber &&
                    <Text style={[styles.text, { color: 'red' }]}>Please enter your phone number !!</Text>
                }
                {showList &&
                    <View style={styles.listNumber}>
                        <ScrollView contentContainerStyle={styles.scroll}>
                            {listNumber.map((item: listNumber, index: number) => {
                                return (
                                    <View key={index} >
                                        <TouchableOpacity onPress={() => handleChooseNumber(item)}>
                                            <Text>{item.number}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                }

            </View>
            <TouchableOpacity onPress={handleSubmit} style={[styles.btn, { marginTop: 50 }]}>
                <Text style={[styles.text, { color: '#fff', fontSize: 19 }]}>Countinue</Text>
            </TouchableOpacity>

            {props.step == 5 &&
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#ccc" }]}>
                    <Text style={[styles.text, { fontSize: 19 }]}>Resend code</Text>
                </TouchableOpacity>
            }
        </>

    )
}
export default Step4