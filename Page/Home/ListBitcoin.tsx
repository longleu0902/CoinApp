import { SafeAreaView, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import styles from "./styles";
import { BarChart, LineChart, LineChartBicolor, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { LinearGradient, Stop } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const ListBitcoin = ({ route }: any) => {
    const { dataAPI } = route.params;
    const [data, setData] = useState<any>()
    // console.log("data api", dataAPI)
    const navigate = useNavigation<any>();
    const data1H = [
        { value: 0 }, { value: 0 }, { value: 40 }, { value: -50 }, { value: -20 },
        { value: 50 }, { value: 30 }, { value: 30 }, { value: 40 }, { value: -30 },
        { value: 50 }, { value: -10 }, { value: 40 }, { value: -30 }, { value: 200 },
        { value: 20 }, { value: -10 }, { value: 20 }, { value: -30 }, { value: -30 },
    ]
    const data1D = [
        { value: 0 }, { value: 0 }, { value: 40 }, { value: -50 }, { value: -20 },
        { value: 50 }, { value: 30 }, { value: 30 }, { value: 40 }, { value: -30 },
        { value: 50 }, { value: -10 }, { value: 40 }, { value: -30 }, { value: 200 },
        { value: 20 }, { value: -10 }, { value: 20 }, { value: -30 }, { value:30 },
    ]
    const data1W = [
        { value: 0 }, { value: 0 }, { value: 40 }, { value: -20 }, { value: -20 },
        { value: 50 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: -30 },
        { value: 20 }, { value: -10 }, { value: 20 }, { value: -30 }, { value: -30 },
        { value: 50 }, { value: -10 }, { value: 40 }, { value: -30 }, { value: 50 },
    ]
    const data1M = [
        { value: 0 }, { value: 0 }, { value: 40 }, { value: -100 }, { value: -20 },
        { value: 50 }, { value: 30 }, { value: 30 }, { value: 30 }, { value: -30 },
        { value: 20 }, { value: -10 }, { value: 20 }, { value: -30 }, { value: -30 },
        { value: 50 }, { value: -10 }, { value: 40 }, { value: -30 }, { value: 100 },
    ]
    const data1Y = [
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
        switch (id) {
            case 1:
                setData([...data1H]);
                break;
            case 2:
                setData([...data1D]);
                break;
            case 3:
                setData([...data1W]);
                break;
            case 4:
                setData([...data1M]);
                break;
            case 5:
                setData([...data1Y]);
                break;
        }
    }
    useEffect(() => {
        handleClickTime(1)
    }, []);

    const formatNumberWithCommas = (number: number) => {
        let roundedNumber = number.toFixed(2);
        return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                       <TouchableOpacity
                       onPress={() => navigate.navigate("Home")}
                       style={{ width: 50, height: 50, marginHorizontal: 20 }}
                   >
                       <Image source={require("../../img/Arrow_left.png")} />
                   </TouchableOpacity>
                   <View style={styles.header}>
                       <View style={{ gap: 3 }}>
                           <Text style={[styles.text, { color: '#707070' }]}>{dataAPI.name} price</Text>
                           <Text style={[styles.title, { fontSize: 30 }]}>${formatNumberWithCommas(Number(dataAPI["quote"]["USD"]["price"]))}</Text>
                           <Text
                               style={[styles.text, { color: Number(dataAPI["quote"]["USD"]["percent_change_24h"]) >= 0 ? '#3F845F' : 'red' }]}>
                               {formatNumberWithCommas(Number(dataAPI["quote"]["USD"]["percent_change_24h"]))}% ({formatNumberWithCommas(Number(dataAPI["quote"]["USD"]["percent_change_60d"]))}%)</Text>
                       </View>
                       <TouchableOpacity style={{ borderWidth: 1, borderColor: "#707070", borderRadius: 50, padding: 10 }}>
                           <Image source={require("../../img/Star.png")} />
                       </TouchableOpacity>
                   </View>
                   <LineChart
                       data={data}
                       spacing={18}
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
       
            
            
            </ScrollView>
 
        </SafeAreaView>
    )
}

export default ListBitcoin