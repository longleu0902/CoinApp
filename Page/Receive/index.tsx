import { Image, SafeAreaView, Text, TouchableOpacity, View, Clipboard, } from "react-native";
import styles from "./styles";
import Header from "../Header";
import { useState } from "react";
import Toast from "../ModelToast";


const Receive = () => {

    const [copiedText, setCopiedText] = useState('0z890085...2e2a80E567');
    const [show, setShow] = useState<boolean>(false)

    const copyToClipboard = () => {
        Clipboard.setString(copiedText);
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
    };





    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Receive Bitcoin"} navigateScreen={"Home"} Icon={require("../../img/Close.png")} />
            <View style={styles.body}>
                <View style={styles.qrcode}>
                    <Image source={require("../../img/QR.png")} />
                </View>
                <View style={styles.code}>
                    <View style={styles.wallet}>
                        <Text>Wallet Adress</Text>
                        <Text>{copiedText}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { copyToClipboard(), setShow(true) }} style={styles.btnCoppy}>
                        <Text style={{ fontWeight: "600", fontSize: 18 }}>Coppy</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={[styles.btnShareAdrees]}>
                <Text style={{ fontWeight: "600", fontSize: 18, color: "#fff" }}>Share address</Text>
            </TouchableOpacity>
            <Toast show={show} setShow={setShow} title="Coppy" />
        </SafeAreaView>
    )
}

export default Receive;