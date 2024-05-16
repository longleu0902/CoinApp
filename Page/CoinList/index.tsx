import { Image, Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./styles";
import { fethDataCoin, fethDataCoinIcon } from "../../Service/API";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


interface URL {
    id: number,
    url: string
}


const CoinList = (props: any) => {
    const { list, urlIcon, keyWord, Screen } = props;
    const navigate = useNavigation<any>()

    const formatNumberWithCommas = (number: number) => {
        let roundedNumber = number.toFixed(2);
        return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    const url = (id: number) => {
        const filterIcon = urlIcon.filter((iconId: URL) => iconId.id == id)
        return filterIcon[0]?.url
    }

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

    return (
        <>
            {list !== null && list.filter((item: any) => item.name.toLowerCase().includes(keyWord?.toLowerCase())).map((item: any, index: number) => {
                return (
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
                        key={index}
                        style={styles.listCoin}>

                        <View style={styles.itemleft}>
                            <Image style={{ width: 50, height: 50 }} source={{ uri: url(item?.id) }} />


                            <View style={styles.itemLeftInfo}>
                                <Text style={styles.textTitle}>{item.name}</Text>
                                <Text style={[styles.textContent, { color: "#707070" }]}>{item?.symbol}</Text>
                            </View>
                        </View>
                        <View style={styles.itemRight}>
                            <Text style={styles.textTitle}>${formatNumberWithCommas(Number(item["quote"]["USD"]["price"]))}</Text>
                            <Text
                                style={[styles.textContent, { color: formatNumberWithCommas(Number(item["quote"]["USD"]["percent_change_24h"])) < "0" ? "red" : "green" }]}
                            >{formatNumberWithCommas(Number(item["quote"]["USD"]["percent_change_24h"]))}%
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            })}

            {/* fix ui  */}
            <View style={{ height: 100 }}></View>
        </>

    )
}
export default CoinList;