import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useState } from "react";


const SelectCoin = (props: any) => {
    const { listCoin, handleClickCoin } = props;
    const handleClose = () => {
        props.setSelectCoin(false)
    }
    const [keyWord, setKeyWord] = useState('');

    const listCoinfilter = listCoin.filter((item: any) =>
        item.name.toLowerCase().includes(keyWord.toLowerCase()) ||
        item.symbol.toLowerCase().includes(keyWord.toLowerCase())
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleClose} >
                    <Image source={require("../../img/Arrow_left.png")} />
                </TouchableOpacity>
                <TextInput
                    onChangeText={(Text) => setKeyWord(Text)}
                    value={keyWord}
                    style={{ width: "90%" }}
                    placeholder="Search" />
            </View>
            <ScrollView contentContainerStyle={styles.content} showsHorizontalScrollIndicator={false}>
                {listCoin.length > 0 && listCoinfilter.map((item: any, index: number) => (
                    <TouchableOpacity onPress={() => { handleClickCoin(item.id, item.symbol), handleClose() }} key={index} style={styles.chooseCoin}>
                        <Text style={styles.text}>{item.symbol} - {item.name}</Text>
                    </TouchableOpacity>
                ))}

            </ScrollView>

        </SafeAreaView>
    )
}

export default SelectCoin