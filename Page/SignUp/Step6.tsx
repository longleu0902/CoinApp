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
import DateTimePicker from 'react-native-ui-datepicker';


const Step6 = (props: any) => {
    const navigate = useNavigation<any>();

    //Status box
    const [activeFirstName, setActiveFirsName] = useState(false);
    const [activeLastName, setActiveLastName] = useState(false);
    const [activeEmail, setActiveEmail] = useState(false);
    const [activePassword, setActivePassWord] = useState(false);
    const [showDate, setShowDate] = useState(false);


    const day = new Date()
    const [date, setDate] = useState(day);



    //Value Input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [valueDate, setValueDate] = useState('');

    const handleActiveFirstName = () => {
        setActiveEmail(false);
        setActivePassWord(false);
        setActiveFirsName(true);
        setActiveLastName(false);

    }

    const handleActiveLastName = () => {
        setActiveEmail(false);
        setActivePassWord(false);
        setActiveFirsName(false);
        setActiveLastName(true);

    }


    const handleSignIn = () => {
        props.setStep(7)

    }

    const handleChooseDate = () => {
        setShowDate(prev => !prev)
       const _date = JSON.stringify(date)
       setValueDate(_date.slice(1 , 11))

    }


    return (
        <View style={{ position: 'relative' }}>
            <View style={styles.form}>
                <Text style={[styles.text, { fontSize: 22 }]}>Enter your personal information</Text>
                <Text style={[styles.text, { fontSize: 16, color: activeFirstName ? "#2752E7" : "#000" }]}>Legal first name</Text>
                <View style={[styles.textInput, { borderColor: activeFirstName ? '#2752E7' : "#CFCFCF" }]}>
                    <TextInput
                        value={firstName}
                        onFocus={handleActiveFirstName}
                        placeholder='First Name'
                        onChangeText={(text) => setFirstName(text)}
                    />
                </View>
                <Text style={[styles.text, { fontSize: 16, color: activeLastName ? "#2752E7" : "#000" }]}>Legal last name</Text>
                <View style={[styles.textInput, { borderColor: activeLastName ? '#2752E7' : "#CFCFCF" }]}>
                    <TextInput
                        value={lastName}
                        onFocus={handleActiveLastName}
                        placeholder='Last Name'
                        onChangeText={(text) => setLastName(text)}

                    />
                </View>
                <Text style={[styles.text, { fontSize: 16, color: activeEmail ? "#2752E7" : "#000" }]}>Date of birth</Text>
                <TouchableOpacity
                    style={[styles.textInput, { borderColor: activeEmail ? '#2752E7' : "#CFCFCF" }]}
                    onPress={() => setShowDate(prev => !prev)}
                >
                    <TextInput
                        value={valueDate}
                        placeholder='Date'
                        editable={false} 
                    />
                </TouchableOpacity>
                <Text style={[styles.text, { fontSize: 16, color: '#707070' }]}>
                    We use 128-bit encryption for added security, and this information is only used for identity verification purposes
                </Text>
            </View>
            <TouchableOpacity
                style={[styles.btn, { marginTop: 50 }]}
                onPress={() => handleSignIn()}
            >
                <Text style={[styles.text, { color: '#fff', fontSize: 19 }]}>Continue</Text>
            </TouchableOpacity>
            {showDate &&
                <View style={styles.date}>
                    <View style={{flex : 12}}>
                        <DateTimePicker
                            mode="single"
                            date={date}
                            onChange={(params: any) => setDate(params.date)}
                            selectedItemColor='#000'
                        />
                    </View>

                    <TouchableOpacity style={[styles.btn, { flex: 1 , marginBottom : 30, backgroundColor:"#000" }]} onPress={handleChooseDate}>
                        <Text style={[styles.text, {color:'#fff'}]}>OK</Text>
                    </TouchableOpacity>

                </View>
            }
        </View>

    )
}
export default Step6