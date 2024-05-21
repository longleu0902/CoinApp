
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import styles from "./styles"
import storage from '@react-native-firebase/storage';
import { useEffect, useRef, useState } from "react";
import Video, { VideoRef } from 'react-native-video';
import Header from "../Header";

const WatchVideo = () => {
    const [urlVideo, setUrlVideo] = useState("")

    const getVideo = async () => {
        const url = await storage().ref('videos/MATICVIDEO.mp4').getDownloadURL();
        // console.log("check url video", url)
        setUrlVideo(url)
    }

    const videoRef = useRef<VideoRef>(null);


    useEffect(() => {
        getVideo();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Header navigateScreen={"Home"} title="WatchVideo" Icon={require("../../img/Arrow_left.png")} />
            <View style={styles.video}>
                {urlVideo !== '' ? (
                    <Video
                        source={{ uri: urlVideo }}
                        ref={videoRef}
                        style={styles.backgroundVideo}
                        controls={true}
                        repeat={true}
                        resizeMode="stretch"
                    />
                ) : (
                    <ActivityIndicator  style={styles.backgroundVideo}/>
                )

                }
            </View>
            <View style={styles.title}>
                <Text style={styles.text}>MATIC coin</Text>
            </View>


        </SafeAreaView>
    )
}

export default WatchVideo