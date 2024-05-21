import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const TopMovers = (props: any) => {

    const { list, url, formatNumberWithCommas } = props
    const navigate = useNavigation<any>();
    const Screen = "Home"



    const moveDetail = (amount: number, name: string, symbol: string, price: number, percent1h: number, percent24h: number, percent7d: number, percent30d: number, percent60d: number, percent90d: number) => {
        navigate.navigate("CoinDetail", {
            data: {
                amount: amount,
                name: name,
                symbol: symbol,
                price: price,
                percent1h: percent1h,
                percent24h: percent24h,
                percent7d: percent7d,
                percent30d: percent30d,
                percent60d: percent60d,
                percent90d: percent90d
            },
            Screen: Screen
        }
        )
    }


    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            onPress={() => moveDetail(
                item.circulating_supply,
                item.name,
                item.symbol,
                item["quote"]["USD"]["price"],
                item["quote"]["USD"]["percent_change_1h"],
                item["quote"]["USD"]["percent_change_24h"],
                item["quote"]["USD"]["percent_change_7d"],
                item["quote"]["USD"]["percent_change_30d"],
                item["quote"]["USD"]["percent_change_60d"],
                item["quote"]["USD"]["percent_change_90d"],
            )
            }
            style={[styles.btnItem, { width: 138, height: 145 }]}>
            <View style={{ gap: 10 }}>
                <Image style={{ width: 40, height: 40 }} source={{ uri: url(item?.id) }} />
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 10 }}>
                    <Text style={[styles.title, { fontSize: 16 }]}>{item.symbol}</Text>
                    <Text style={[styles.text, { color: "#707070" }]}>{formatNumberWithCommas(Number(item["quote"]["USD"]["price"]))}</Text>
                </View>
                <Text style={[styles.title, { color: Number(item["quote"]["USD"]["percent_change_1h"]) > 0 ? '#3F845F' : "red" }]}>
                    {Number(item["quote"]["USD"]["percent_change_1h"]) >= 0 ? "+" : ''}
                    {formatNumberWithCommas(Number(item["quote"]["USD"]["percent_change_1h"]))}%
                </Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <FlatList
            data={list}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{ gap: 10 }}
        />
    )
}
export default TopMovers