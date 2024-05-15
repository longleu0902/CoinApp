import { SafeAreaView, Text, ScrollView, View, Image, TouchableOpacity } from "react-native"
import styles from "./styles"
import { useEffect, useState } from "react"
import Search from "../Search/Search"
import PriceList from "./PriceList"


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
    const [List, setList] = useState(defaultList);
    const [showSearch, setShowSearch] = useState(false);
    const [keyWord, setKeyWord] = useState("");
    const [percentTotal , setPercentTotal] = useState(0);
    const [option , setOption] = useState(0)

    const handleChoose = (id: number) => {
        const _List = [...defaultList];
        const Idx = _List.findIndex(item => item.id == id);
        _List[Idx]["status"] = true;
        setList(_List)
        setOption(id)
    }
    useEffect(() => {
        handleChoose(1)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {!showSearch &&
                <>
                    <View style={styles.header}>
                        <View style={styles.title}>
                            <Text style={[styles.textContent, { color: "#707070" }]}>In the past 24 hours</Text>
                            <Text style={{ fontSize: 24, fontWeight: '800' }}>Market it up <Text style={{ color: percentTotal >= 0 ? "green" : "red" }}>{percentTotal >= 0 ? "+" : ""}{percentTotal.toFixed(2)}%</Text></Text>
                        </View>
                        <TouchableOpacity onPress={() => setShowSearch(true)} style={styles.search}>
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
                </>
            }

            {showSearch && <Search setShowSearch={setShowSearch} keyWord={keyWord} setKeyWord={setKeyWord} />}

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 40, gap: 30 }}>
                <PriceList keyWord={keyWord} setPercentTotal={setPercentTotal} option={option}/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Prices