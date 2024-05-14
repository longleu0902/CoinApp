import { Image, Text, View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { fethDataCoin, fethDataCoinIcon } from "../../Service/API";
import { useCallback, useEffect, useState } from "react";


interface URL {
    id: number,
    url: string
}


const PriceList = (props: any) => {
    const { keyWord, setPercentTotal, option } = props;
    console.log(option)
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
        // if (option == 1) {
        //     setList(_defaultList)
        //     return;
        // }
        // if (option == 2) {
        //     return;
        // }
        // if (option == 3) {
        //     const gainers = _defaultList.filter(((item) => Number(item["quote"]["USD"]["percent_change_24h"]) > 0))
        //     setList(gainers)
        //     return;
        // }
        // if (option == 4) {
        //     const losers = _defaultList.filter(((item) => Number(item["quote"]["USD"]["percent_change_24h"]) < 0))
        //     setList(losers)
        //     return;
        // }
    }


    const formatNumberWithCommas = (number: number) => {
        let roundedNumber = number.toFixed(2);
        return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (list.length > 0) {
            handleChangeList();
        }
    }, [option])



    const url = (id: number) => {
        const filterIcon = urlIcon.filter((iconId: URL) => iconId.id == id)
        // console.log("check filterIcon", filterIcon)
        return filterIcon[0]?.url
    }

    return (
        <>
            {!loading ? (
                <View style={styles.active}>
                    <ActivityIndicator size="large" />
                </View>) : (
                <>
                    {list !== null && list.filter((item: any) => item.name.toLowerCase().includes(keyWord.toLowerCase())).map((item: any, index: number) => {
                        return (
                            <View key={index} style={styles.listCoin}>

                                <View style={styles.itemleft}>
                                    <Image style={{ width: 50, height: 50 }} source={{ uri: url(item.id) }} />


                                    <View style={styles.itemLeftInfo}>
                                        <Text style={styles.textTitle}>{item.name}</Text>
                                        <Text style={[styles.textContent, { color: "#707070" }]}>{item.symbol}</Text>
                                    </View>
                                </View>

                                <View style={styles.itemRight}>
                                    <Text style={styles.textTitle}>${formatNumberWithCommas(Number(item["quote"]["USD"]["price"]))}</Text>
                                    <Text
                                        style={[styles.textContent, { color: formatNumberWithCommas(Number(item["quote"]["USD"]["percent_change_24h"])) < "0" ? "red" : "green" }]}
                                    >{formatNumberWithCommas(Number(item["quote"]["USD"]["percent_change_24h"]))}%
                                    </Text>
                                </View>
                            </View>
                        )
                    })}

                    {/* fix ui  */}
                    <View style={{ height: 100 }}></View>


                </>

            )}





        </>

    )
}
export default PriceList;