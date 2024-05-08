import { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { setSignUp } from '../../Redux/signUpReducer';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { uid } from 'uid';


const Step8 = (props: any) => {
    //data redux
    const dispatch = useDispatch();
    const dataSignUp: any = useSelector<any>(state => state.sigup.data);
    console.log(dataSignUp);



    //camerea
    const { hasPermission, requestPermission } = useCameraPermission();
    const camera = useRef<any>(null);
    const [photo, setPhoto] = useState({})
    const device = useCameraDevice('back', {
        physicalDevices: [
            'telephoto-camera',]
    });
    const [saveImg, setSaveImg] = useState(false);
    const [activeCamera, setActiveCamera] = useState(true);
    const [notify, setNotify] = useState(true);
    const [filePhoto, setFilePhoto] = useState({})


    const handleActiveCamera = () => {
        setActiveCamera(true)
        setNotify(false)
    }

    const handleTake = async () => {
        const file = await camera.current.takePhoto({
            flash: 'on'
        })
        setActiveCamera(false);
        setSaveImg(true);
        setFilePhoto(file);

    }

    const handleSave = async () => {
        try {
            const file: any = { ...filePhoto }
            const reference = storage().ref(`/images/${uid()}`);
            const result = await fetch(`file://${file.path}`)
            const data = await result.blob();
            const putImg = await reference.put(data);
            const url = await reference.getDownloadURL();
            await auth().createUserWithEmailAndPassword(dataSignUp.email, dataSignUp.password);
            await firestore().collection('users').add({
                firstName: dataSignUp.firstName,
                lastName: dataSignUp.lastName,
                phone: dataSignUp.phone,
                email: dataSignUp.email,
                address: dataSignUp.address,
                date: dataSignUp.date,
                img: url,
            })

        } catch (err) {
            console.error(err)
        }
        props.setStep(9)

    }
    useEffect(() => {
        if (!hasPermission) {
            requestPermission();
        }
    }, [hasPermission])

    useEffect(() => {
        setTimeout(() => {
            setActiveCamera(false)
        }, 200)
    }, [])
    if (!hasPermission) return <Text>Test</Text>
    if (device == null) return <View><Text>No camera</Text></View>

    return (
        <View style={styles.cameraBody}>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={activeCamera}
                ref={camera}
                photo={true}
            />
            {notify &&
                <View style={styles.cameraNotify}>
                    <Text style={[styles.text, { fontSize: 20 }]}>Is the ID easy to read?</Text>
                    <Text style={[styles.text, { color: "#707070", fontWeight: "400" }]}>Please make sure the text is clear and your entire card is visible.</Text>

                    <TouchableOpacity onPress={() => handleActiveCamera()} style={styles.btn}>
                        <Text style={[styles.text, { color: "#fff" }]} >Yes, looks good</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#ccc" }]}>
                        <Text style={styles.text}>Retake</Text>
                    </TouchableOpacity>

                </View>
            }

            {!notify &&
                <View style={styles.cameraItem}>
                    <View style={{ width: "30%", height: 10 }}></View>
                    <View style={[styles.btn, { backgroundColor: '#fff', borderColor: "#000", width: 90, height: 90, borderRadius: 50, }]}>
                        {saveImg ? (
                            <TouchableOpacity
                                onPress={() => handleSave()}
                                style={[styles.btn, { backgroundColor: '#fff', borderWidth: 3, borderColor: "#000", width: 80, height: 80, borderRadius: 50, }]}>
                                <Text style={styles.text}>Save</Text>
                            </TouchableOpacity>


                        ) : (
                            <TouchableOpacity
                                onPress={() => handleTake()}
                                style={[styles.btn, { backgroundColor: '#fff', borderWidth: 3, borderColor: "#000", width: 80, height: 80, borderRadius: 50, }]}>
                            </TouchableOpacity>
                        )}
                    </View>

                    <TouchableOpacity style={{ width: "30%", justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        {!saveImg &&
                            <Image source={require("../../img/Camera.png")} />
                        }
                    </TouchableOpacity>
                    <View style={styles.borderCamera}></View>

                </View>

            }



        </View>
    )
}



export default Step8