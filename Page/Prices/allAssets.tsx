import { Image, Text, View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { fethDataCoin, fethDataCoinIcon } from "../../Service/API";
import { useCallback, useEffect, useState } from "react";


interface URL {
    id: number,
    url: string
}


const AllAssets = () => {
    const [list, setList] = useState<any>([]);
    const [urlIcon, setUrlIcon] = useState<any>([]);
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        const res: any = await fethDataCoin(10);
        const _list = [...res.data];
        const _urlIcon = [...urlIcon]
        for (let i = 0; i < _list.length; i++) {
            const iconID = _list[i]["id"]
            const icon = await fethDataCoinIcon(iconID);
            _urlIcon.push({ id: iconID, url: icon })
        }
        setUrlIcon(_urlIcon)
        setList(res.data)
        setLoading(true)

    }


    const formatNumberWithCommas = (number: number) => {
        let roundedNumber = number.toFixed(2);
        return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    useEffect(() => {
        getData();
    }, [])

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
                    {list !== null && list.map((item: any, index: number) => {
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
                                    <Text style={[styles.textContent, { color: "green" }]}>{formatNumberWithCommas(Number(item["quote"]["USD"]["percent_change_24h"]))}%</Text>
                                </View>
                            </View>
                        )
                    })}

                    {/* fix ui  */}
                    <View style={{height : 100}}></View>


                </>

            )}





        </>

    )
}
export default AllAssets;