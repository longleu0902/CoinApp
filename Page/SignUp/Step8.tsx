import { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import styles from './styles';


const Step8 = (props: any) => {
    const { hasPermission, requestPermission } = useCameraPermission();
    const camera = useRef<any>(null);
    const [photo, setPhoto] = useState({})
    const device = useCameraDevice('back', {
        physicalDevices: [
            'telephoto-camera',]
    });
    const [saveImg, setSaveImg] = useState(false)
    const [activeCamera, setActiveCamera] = useState(true);
    const [notify, setNotify] = useState(true)

    const handleActiveCamera = () => {
        setActiveCamera(true)
        setNotify(false)
    }

    const handleTake = async () => {
        const file = await camera.current.takePhoto({
            flash: 'on'
        })
        const result = await fetch(`file://${file.path}`)
        const data = await result.blob();
        setActiveCamera(false);
        setSaveImg(true)
        console.log("check takephoto", data)

    }

    const handleSave = () => {
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

                </View>

            }



        </View>
    )
}



export default Step8