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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useDispatch, useSelector } from 'react-redux';
import { setSignUp } from '../../Redux/signUpReducer';


const Step1 = (props: any) => {
    const navigate = useNavigation<any>();
    const dispatch = useDispatch();


    //Status box
    const [activeFirstName, setActiveFirsName] = useState(false);
    const [activeLastName, setActiveLastName] = useState(false);
    const [activeEmail, setActiveEmail] = useState(false);
    const [activePassword, setActivePassWord] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);


    //Value Input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //notify input
    const [notifyFirstName, setNotifyFirstName] = useState(false);
    const [notifyLastName, setNotifyLastName] = useState(false);
    const [notifyEmail, setNotifyEmail] = useState(false);
    const [notifyPassword, setNotifyPassword] = useState(false);
    const [notifyCheckBox, setNotifyCheckBox] = useState(false);

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

    const handleActiveEmail = () => {
        setActiveEmail(true);
        setActivePassWord(false);
        setActiveFirsName(false);
        setActiveLastName(false);

    }
    const handleActivePassword = () => {
        setActiveEmail(false);
        setActivePassWord(true);
        setActiveFirsName(false);
        setActiveLastName(false);
    }

    const validateForm = (firstName: string, lastName: string, email: string, password: string) => {
        if (firstName == '' && lastName == '' && email == '' && password == '') {
            setNotifyFirstName(true);
            setNotifyLastName(true);
            setNotifyEmail(true);
            setNotifyPassword(true);
            return false;
        }
        if (firstName == '' && lastName !== '' && email == '' && password == '') {
            setNotifyFirstName(true);
            setNotifyEmail(true)
            setNotifyPassword(true)
            return false;
        }
        if (firstName == '' && lastName !== '' && email !== '' && password !== '') {
            setNotifyFirstName(true);
            return false;
        }
        if (firstName == '' && lastName == '' && email !== '' && password !== '') {
            setNotifyFirstName(true);
            setNotifyLastName(true);
            return false;
        }
        if (firstName !== '' && lastName !== '' && email !== '' && password == '') {
            setNotifyPassword(true);
            return false;
        }
        if (firstName !== '' && lastName == '' && email == '' && password == '') {
            setNotifyLastName(true);
            setNotifyEmail(true)
            setNotifyPassword(true);
            return false;
        }
        if (firstName !== '' && lastName !== '' && email == '' && password == '') {
            setNotifyEmail(true)
            setNotifyPassword(true);
            return false;
        }
        if (firstName == '' && lastName == '' && email == '' && password !== '') {
            setNotifyLastName(true);
            setNotifyEmail(true);
            setNotifyFirstName(true);
            return false;
        }
        if (firstName == '' && lastName !== '' && email == '' && password !== '') {
            setNotifyEmail(true);
            setNotifyFirstName(true);
            return false;
        }
        if (firstName !== '' && lastName == '' && email !== '' && password == '') {
            setNotifyLastName(true);
            setNotifyPassword(true);//
            return false;
        }
        if (firstName !== '' && lastName == '' && email !== '' && password !== '') {
            setNotifyLastName(true);
            return false;
        }
        if (firstName !== '' && lastName !== '' && email == '' && password !== '') {
            setNotifyEmail(true);
            return false;
        }
        if (firstName !== '' && lastName == '' && email == '' && password !== '') {
            setNotifyLastName(true);
            setNotifyEmail(true)
            return false;
        }
        if (firstName == '' && lastName !== '' && email !== '' && password == '') {
            setNotifyFirstName(true);
            setNotifyPassword(true)
            return false;
        }
        if (firstName == '' && lastName == '' && email !== '' && password == '') {
            setNotifyLastName(true);
            setNotifyPassword(true)
            setNotifyFirstName(true)
            return false;
        }
        if (password.length < 6) {
            setNotifyPassword(true)
            return;
        }
        return true
    }

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    const handleSignIn = async () => {
        const check = validateForm(firstName, lastName, email, password);
        const checkEmail = validateEmail(email)
        if (!check) return;
        if (!checkEmail) {
            setNotifyEmail(true);
            return;
        }
        if (!toggleCheckBox) {
            setNotifyCheckBox(true);
            return;
        }
        try {
            // await auth().createUserWithEmailAndPassword(email, password)
            const putData = {
                firstName: firstName,
                lastName: lastName,
                phone: '',
                email: email,
                password:password,
                address : '',
                date: '',
                img: '',
            }
            dispatch(setSignUp(putData))
            props.setStep(2)

            // setConfirm(confirmation);


        } catch (err) {
            console.log(err)
        }

    }

// test 

// const reference = storage().ref()
// console.log("check refrecence", reference)



    return (
        <View style={styles.form}>
            <ScrollView contentContainerStyle={{ gap: 10, marginBottom: 100 }} showsVerticalScrollIndicator={false}>
                <Text style={[styles.text, { fontSize: 22 }]}>Create your account</Text>
                <Text style={[styles.text, { fontSize: 16, color: activeFirstName ? "#2752E7" : "#000" }]}>First Name</Text>
                <View style={[styles.textInput, { borderColor: activeFirstName ? '#2752E7' : "#CFCFCF" }]}>
                    <TextInput
                        value={firstName}
                        onFocus={handleActiveFirstName}
                        placeholder='First Name'
                        onChangeText={(text) => { setFirstName(text), setNotifyFirstName(false) }}
                    />
                </View>
                {notifyFirstName && <Text style={[styles.text, { fontSize: 12, color: "red" }]}>Please enter first name !</Text>}
                <Text style={[styles.text, { fontSize: 16, color: activeLastName ? "#2752E7" : "#000" }]}>Last Name</Text>
                <View style={[styles.textInput, { borderColor: activeLastName ? '#2752E7' : "#CFCFCF" }]}>
                    <TextInput
                        value={lastName}
                        onFocus={handleActiveLastName}
                        placeholder='Last Name'
                        onChangeText={(text) => { setLastName(text), setNotifyLastName(false) }}

                    />
                </View>
                {notifyLastName && <Text style={[styles.text, { fontSize: 12, color: "red" }]}>Please enter last name !</Text>}
                <Text style={[styles.text, { fontSize: 16, color: activeEmail ? "#2752E7" : "#000" }]}>Email</Text>
                <View style={[styles.textInput, { borderColor: activeEmail ? '#2752E7' : "#CFCFCF" }]}>
                    <TextInput
                        value={email}
                        onFocus={handleActiveEmail}
                        placeholder='Email'
                        onChangeText={(text) => { setEmail(text), setNotifyEmail(false) }}
                    />
                </View>
                {notifyEmail && <Text style={[styles.text, { fontSize: 12, color: "red" }]}>Email is not malformer !</Text>}
                <Text style={[styles.text, { fontSize: 16, color: activePassword ? "#2752E7" : "#000" }]}>Password</Text>
                <View style={[styles.textInput, { flexDirection: 'row', borderColor: activePassword ? '#2752E7' : "#CFCFCF" }]}>
                    <TextInput
                        value={password}
                        onFocus={handleActivePassword}
                        placeholder='Password'
                        secureTextEntry={showPassword ? true : false}
                        style={{ width: '90%' }}
                        onChangeText={(text) => { setPassword(text), setNotifyPassword(false) }}

                    />
                    <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                        <Image style={{ width: 25, height: 25 }} source={require("../../img/hide.png")} />
                    </TouchableOpacity>
                </View>
                {notifyPassword && <Text style={[styles.text, { fontSize: 12, color: "red" }]}>Please enter password!</Text>}
                {password.length > 5 && <Text style={{ color: 'green' }}>Look good</Text>}
                {password.length < 6 && password.length > 1 && <Text style={{ color: 'red' }}>Password is not 6 characters long</Text>}
                <View style={styles.valid}>
                    <TouchableOpacity
                        onPress={() => { setToggleCheckBox(prev => !prev), setNotifyCheckBox(false) }}
                        style={[styles.checkbox, { borderColor: notifyCheckBox ? 'red' : '#000' }]}>
                        {toggleCheckBox && <Image style={{ width: 15, height: 15 }} source={require("../../img/Close.png")} />}
                    </TouchableOpacity>
                    <Text style={[styles.text, { fontSize: 16, color: '#000' }]}>
                        I certify that I am 18 years of age or older, and I agree to the
                        {/* <TouchableOpacity> */}
                        <Text style={[styles.text, { fontSize: 16, color: 'blue' }]}> User Agreement</Text>
                        {/* </TouchableOpacity> */} and
                        {/* <TouchableOpacity> */}
                        <Text style={[styles.text, { fontSize: 16, color: 'blue' }]}> Privacy Policy</Text>
                        {/* </TouchableOpacity> */}
                    </Text>
                </View>
                <TouchableOpacity
                    style={[styles.btn, { marginTop: 50 }]}
                    onPress={() => handleSignIn()}
                >
                    <Text style={[styles.text, { color: '#fff', fontSize: 19 }]}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff' }]}></TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff' }]}></TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff' }]}></TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff' }]}></TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff' }]}></TouchableOpacity>


            </ScrollView>

        </View>

    )
}
export default Step1