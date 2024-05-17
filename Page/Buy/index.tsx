import { Image, SafeAreaView, Text, TouchableOpacity, View, ActivityIndicator, ScrollView } from "react-native";
import styles from "./styles";
import CoinList from "../CoinList";
import { useEffect, useState } from "react";
import { fethDataCoin, fethDataCoinIcon } from "../../Service/API";
import { useNavigation } from "@react-navigation/native";
import Header from "../Header";



const Buy = () => {
    const Screen = "Buy"
    const navigate = useNavigation<any>()
    const [keyWord, setKeyWord] = useState('')
    const [list, setList] = useState<any>([]);
    const [urlIcon, setUrlIcon] = useState<any>([]);
    const [loading, setLoading] = useState(false);


    const getData = async () => {
        const res: any = await fethDataCoin(10);
        const _list = [...res.data];

        // Loop and request Logo 
        const iconRequests = _list.map(coin => fethDataCoinIcon(coin.id));
        const icons = await Promise.all(iconRequests);

        setUrlIcon(_list.map((coin, index) => ({ id: coin.id, url: icons[index] })));
        setList(_list)
        setLoading(true)

    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Select assets to Buy"} navigateScreen={"Home"} Icon={require("../../img/Close.png")} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 30 }}>
                {!loading ? (
                    <ActivityIndicator style={{ marginTop: 100 }} />
                ) : (
                    <CoinList list={list} urlIcon={urlIcon} keyWord={keyWord} Screen={Screen} />
                )}
            </ScrollView>


        </SafeAreaView>
    )
}
export default Buy;