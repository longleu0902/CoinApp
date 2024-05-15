import { Image, Text, View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { fethDataCoin, fethDataCoinIcon } from "../../Service/API";
import { useCallback, useEffect, useState } from "react";
import CoinList from "../CoinList";


interface URL {
    id: number,
    url: string
}


const PriceList = (props: any) => {
    const { keyWord, setPercentTotal, option } = props;
    const [list, setList] = useState<any>([]);
    const [defaultList, setDefaultList] = useState<any>([])
    const [urlIcon, setUrlIcon] = useState<any>([]);
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        const res: any = await fethDataCoin(10);
        const _list = [...res.data];

        // Loop and request Logo 
        const iconRequests = _list.map(coin => fethDataCoinIcon(coin.id));
        const icons = await Promise.all(iconRequests);

        // Percent Total
        const totalPercent = _list.reduce((a, b) => {
            return (Number(a) + Number(b["quote"]["USD"]["percent_change_24h"])) / Number(_list.length)
        }, 0)


        setPercentTotal(totalPercent)
        setUrlIcon(_list.map((coin, index) => ({ id: coin.id, url: icons[index] })));
        setList(_list)
        setDefaultList(_list)
        setLoading(true)


    }

    
    const handleChangeList = () => {
        const _defaultList = [...defaultList]
        switch (option) {
            case 1:
                setList(_defaultList)
                break;
            case 2:
                break;
            case 3:
                const gainers = _defaultList.filter(((item) => Number(item["quote"]["USD"]["percent_change_24h"]) > 0))
                setList(gainers)
                break;
            case 4:
                const losers = _defaultList.filter(((item) => Number(item["quote"]["USD"]["percent_change_24h"]) < 0))
                setList(losers)
                break;
            default:
                setList(_defaultList)
                break;

        }
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (list.length > 0) {
            handleChangeList();
        }
    }, [option])


    return (
        <>
            {!loading ? (
                <View style={styles.active}>
                    <ActivityIndicator size="large" />
                </View>
            ) : (
                <CoinList list={list} urlIcon={urlIcon} keyWord={keyWord} />
            )}
        </>

    )
}
export default PriceList;