import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./styles";
import { BarChart, LineChart, LineChartBicolor, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { LinearGradient, Stop } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const ListBitcoin = () => {
    const navigate = useNavigation<any>();
    const data = [
        { value: 0 }, { value: 0 }, { value: 40 }, { value: -100 }, { value: -20 },
        { value: 50 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: -30 },
        { value: 20 }, { value: -10 }, { value: 20 }, { value: -30 }, { value: -30 },
        { value: 50 }, { value: -10 }, { value: 40 }, { value: -30 }, { value: 200 },
    ]
    const defaultTime = [
        {
            id: 1,
            time: '1H',
            active: false,
        },
        {
            id: 2,
            time: '1D',
            active: false,

        },
        {
            id: 3,
            time: '1W',
            active: false,

        },
        {
            id: 4,
            time: '1M',
            active: false,

        },
        {
            id: 5,
            time: '1Y',
            active: false,

        },
        {
            id: 6,
            time: 'All',
            active: false,

        },
    ]
    const [time, setTime] = useState(defaultTime);
    const handleClickTime = (id: number) => {
        const _time = [...defaultTime];
        const Idx = _time.findIndex(item => item.id == id);
        _time[Idx]["active"] = true
        setTime(_time)
    }
    useEffect(()=>{
        handleClickTime(1)
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigate.navigate("Home")}
                style={{ width: 50, height: 50, marginHorizontal: 20 }}
            >
                <Image source={require("../../img/Arrow_left.png")} />
            </TouchableOpacity>
            <View style={styles.header}>
                <View style={{ gap: 3 }}>
                    <Text style={[styles.text, { color: '#707070' }]}>Bitcoin price</Text>
                    <Text style={[styles.title, { fontSize: 30 }]}>$1.60</Text>
                    <Text style={[styles.text, { color: '#3F845F' }]}>-$0.23 (12.58%)</Text>
                </View>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: "#707070", borderRadius: 50, padding: 10 }}>
                    <Image source={require("../../img/Star.png")} />
                </TouchableOpacity>
            </View>
            <LineChart
                data={data}
                spacing={16}
                hideDataPoints
                hideYAxisText
                hideRules
                hideAxesAndRules
                lineGradient
                lineGradientId="ggrd" // same as the id passed in <LinearGradient> below
                lineGradientComponent={() => {
                    return (
                        <LinearGradient id="ggrd" x1="0" y1="0" x2="0" y2="1" >
                            < Stop offset="0" stopColor={'blue'} />
                            < Stop offset="0.5" stopColor={'orange'} />
                            < Stop offset="1" stopColor={'green'} />
                        </LinearGradient>
                    );
                }}
            />
            <View style={{ padding: 20, flexDirection: 'row', justifyContent: "space-around" }}>
                {time.map((item, index) => (
                    <TouchableOpacity onPress={() => handleClickTime(item.id)} key={index}>
                        <Text style={[styles.title, { color: item.active ? "#582CB2" : "#707070", fontSize: 18 }]}>{item.time}</Text>
                    </TouchableOpacity>
                ))}

            </View>
            <View style={{ padding: 20 }}>
                <TouchableOpacity
                    onPress={() => navigate.navigate("ListBitcoin")}
                    style={styles.btnItem}>
                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                        <Image source={require("../../img/MATIC.png")} />
                        <Text style={styles.text}>MATIC WALLET</Text>
                    </View>
                    <View style={{ gap: 2, alignItems: 'flex-end' }}>
                        <Text style={styles.text}>$00.00</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#3F845F' }]}>0 MATIC</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default ListBitcoin