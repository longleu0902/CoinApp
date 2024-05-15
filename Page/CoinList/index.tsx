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
    const { list, urlIcon, keyWord } = props;
    const navigate = useNavigation<any>()

    const formatNumberWithCommas = (number: number) => {
        let roundedNumber = number.toFixed(2);
        return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    const url = (id: number) => {
        const filterIcon = urlIcon.filter((iconId: URL) => iconId.id == id)
        return filterIcon[0]?.url
    }

    const moveDetail = (name: string, symbol: string, price: number, percent: number) => {
        navigate.navigate("CoinDetail", { data : {
            name : name ,
            symbol : symbol,
            price : price,
            percent : percent
        } })
    }

    return (
        <>
            {list !== null && list.filter((item: any) => item.name.toLowerCase().includes(keyWord?.toLowerCase())).map((item: any, index: number) => {
                return (
                    <TouchableOpacity
                        onPress={() => moveDetail(
                            item.name,
                            item.symbol,
                            item["quote"]["USD"]["price"],
                            item["quote"]["USD"]["percent_change_1h"],
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