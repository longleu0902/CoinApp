import { SafeAreaView, Text, ScrollView, View, Image, TouchableOpacity } from "react-native"
import styles from "./styles"
import { useEffect, useState } from "react"
import AllAssets from "./allAssets"


const Prices = () => {
    const defaultList = [
        {
            id: 1,
            title: 'All assets',
            status: false,
        },
        {
            id: 2,
            title: 'Tradable',
            status: false,
        },
        {
            id: 3,
            title: 'Gainers',
            status: false,
        },
        {
            id: 4,
            title: 'Losers',
            status: false,
        },
    ]
    const [List, setList] = useState(defaultList)

    const handleChoose = (id: number) => {
        const _List = [...defaultList];
        const Idx = _List.findIndex(item => item.id == id);
        _List[Idx]["status"] = true;
        setList(_List)
    }

    useEffect(() => {
        handleChoose(1)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={[styles.textContent, { color: "#707070" }]}>In the past 24 hours</Text>
                    <Text style={{ fontSize: 24, fontWeight: '800' }}>Market it up <Text style={{ color: "green" }}>+4.18%</Text></Text>
                </View>
                <TouchableOpacity style={styles.search}>
                    <Image source={require("../../img/Search.png")} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                {List.map((item, index) => (
                    <TouchableOpacity onPress={() => handleChoose(item.id)} key={index}>
                        <Text style={[styles.textTitle, { color: item.status ? "#2752E7" : '#000', fontWeight: "500" }]}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 40, gap: 30 }}>
                <AllAssets/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Prices