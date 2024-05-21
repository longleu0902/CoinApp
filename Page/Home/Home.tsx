import { Button, FlatList, Image, SafeAreaView, ScrollView, Text, ActivityIndicator, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { BarChart, LineChart, LineChartBicolor, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { LinearGradient, Stop } from "react-native-svg";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import TopMovers from "./TopMovers";
import BlockChanis from "./BlockChanis";
import CryPto from "./CrypPto";
import News from "./New";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { fethDataCoin, fethDataCoinIcon, getDataCoin } from "../../Service/API";

interface URL {
    id: number,
    url: string
}

const Home = () => {
    const resetScrollView = useSelector<any>(state => state.scrollView.render)
    const navigate = useNavigation<any>();
    const scrollViewRef = useRef<ScrollView>(null);
    const scrollToTop = () => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true }) ?? null;
    };

    useFocusEffect(
        useCallback(() => {
            scrollToTop();
        }, [resetScrollView])
    )

    useEffect(() => {
        getData();
    }, [])

    // getData
    const [list, setList] = useState<any>([]);
    const [urlIcon, setUrlIcon] = useState<any>([]);
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        const res: any = await fethDataCoin(5);
        const _list = [...res.data];

        // Loop and request Logo 
        const iconRequests = _list.map(coin => fethDataCoinIcon(coin.id));
        const icons = await Promise.all(iconRequests);

        setUrlIcon(_list.map((coin, index) => ({ id: coin.id, url: icons[index] })));
        setList(_list)
        setLoading(true)

    }

    const url = (id: number) => {
        const filterIcon = urlIcon.filter((iconId: URL) => iconId.id == id)
        return filterIcon[0]?.url
    }

    const formatNumberWithCommas = (number: number) => {
        let roundedNumber = number.toFixed(2);
        return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
                    {/* item */}
                    <View style={styles.addPayment}>
                        <Image source={require('../../img/wallet.png')} />
                        <View style={{ gap: 10 }}>
                            <Text style={styles.title}>Welcome to Coinbase!</Text>
                            <Text style={styles.text}>Make your first investment today</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigate.navigate("Payment")} style={styles.btn}>
                            <Text style={[styles.text, { color: '#fff', fontWeight: '600' }]}>Add payment method</Text>
                        </TouchableOpacity>
                    </View>

                    {/* item */}
                    <View style={styles.item}>
                        <Text style={styles.title}>WatchList</Text>
                        <TouchableOpacity
                            onPress={() => navigate.navigate("ListBitcoin", { dataAPI: list[0] })}
                            style={styles.btnItem}>
                            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                                <Image style={{ width: 30, height: 30 }} source={{ uri: url(list[0].id) }} />
                                <View style={{ gap: 2 }}>
                                    <Text style={styles.text}>{list[0].name}</Text>
                                    <Text style={[styles.text, { fontSize: 14, color: '#707070' }]}>{list[0].symbol}</Text>
                                </View>
                            </View>
                            <View style={{ gap: 2, alignItems: 'flex-end' }}>
                                <Text style={styles.text}>${formatNumberWithCommas(Number(list[0]["quote"]["USD"]["price"]))}</Text>
                                <Text style={[styles.text, { fontSize: 14, color: Number(list[0]["quote"]["USD"]["percent_change_24h"]) < 0 ? "red" : '#3F845F' }]}>{formatNumberWithCommas(Number(list[0]["quote"]["USD"]["percent_change_24h"]))}%</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* item  */}
                    <View style={styles.item}>
                        <Text style={styles.title}>Top movers</Text>
                        <TopMovers list={list} url={url} formatNumberWithCommas={formatNumberWithCommas} />
                    </View>

                    {/* item  */}
                    <View style={styles.item}>
                        <Text style={styles.title}>Learn about Polygon</Text>
                        <TouchableOpacity
                            onPress={() => navigate.navigate("WatchVideo")}
                            style={[styles.btnItem, { borderWidth: 0 }]}>
                            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                                <Image source={require("../../img/MATIC.png")} />
                                <View style={{ gap: 2 }}>
                                    <Text style={styles.text}>Polygon</Text>
                                    <Text style={[styles.text, { fontSize: 14, color: '#707070' }]}>Earn $3 MATIC</Text>
                                </View>
                            </View>
                            <Text style={[styles.title, { color: '#2752E7', fontSize: 17 }]}>Watch video</Text>
                        </TouchableOpacity>
                    </View>

                    {/* item  */}
                    <View style={styles.item}>
                        <Text style={[styles.title, { color: '#707070' }]}>Building an internet of blockchains</Text>
                        <BlockChanis />
                    </View>

                    {/* item  */}
                    <View style={styles.item}>
                        <Text style={styles.title}>Rewards</Text>
                        <TouchableOpacity>
                            <Image style={{ width: '100%', borderRadius: 10 }} source={require("../../img/Rewards.png")} />
                        </TouchableOpacity>
                    </View>

                    {/* item  */}
                    <View style={styles.item}>
                        <Text style={styles.title}>Do more with crypto</Text>
                        <CryPto />
                    </View>

                    {/* item  */}
                    <View style={styles.item}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>News</Text>
                            <TouchableOpacity>
                                <Text style={[styles.title, { fontSize: 16, color: '#2752E7' }]}>View More</Text>
                            </TouchableOpacity>
                        </View>
                        <News />
                    </View>



                </ScrollView>
            ) : (
                <ActivityIndicator style={styles.loadding} size="large" />
            )}



        </SafeAreaView>
    )
}
export default Home