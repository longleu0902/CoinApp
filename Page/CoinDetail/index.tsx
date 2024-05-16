import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinDetail = ({ route }: any) => {
    const { data , Screen } = route.params;
    console.log(Screen)
    const navigate = useNavigation<any>()
    const formatNumberWithCommas = (number: number) => {
        let roundedNumber = number.toFixed(2);
        return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigate.navigate(`${Screen}`)} style={{ width: "5%" }}>
                    <Image source={require("../../img/Arrow_left.png")} />
                </TouchableOpacity>
                <View style={{ width: "95%", alignItems: "center" }}>
                    <Text style={styles.text}>Order Preview</Text>
                </View>
            </View>
            <View style={styles.title}>
                <Text style={[styles.text, { color: "#2752E7", fontSize: 30 }]}>
                    {formatNumberWithCommas(data.amount)} {data.symbol}
                </Text>
            </View>
            <View style={styles.bill}>
                <View style={[styles.itemBill]}>
                    <Text style={[styles.text , {fontSize:14}]}><Text style={{fontSize:17 , color:"pink"}}>{data.symbol} </Text> price</Text>
                    <Text style={[styles.text , {fontSize:14}]}>Name</Text>
                    <Text style={[styles.text , {fontSize:14}]}>Percent_change_1h</Text>
                    <Text style={[styles.text , {fontSize:14}]}>Percent_change_24h</Text>
                    <Text style={[styles.text , {fontSize:14}]}>Percent_change_7d</Text>
                    <Text style={[styles.text , {fontSize:14}]}>Percent_change_30d</Text>
                    <Text style={[styles.text , {fontSize:14}]}>Percent_change_60d</Text>
                    <Text style={[styles.text , {fontSize:14}]}>Percent_change_90d</Text>

                </View>
                <View style={[styles.itemBill, { justifyContent: "flex-end", alignItems: "flex-end" }]}>
                    <Text style={[styles.text , {fontSize : 13 , color : "#707070"}]}>$ {formatNumberWithCommas(data.price)}</Text>
                    <Text style={[styles.text , {fontSize : 13 , color : "#707070"}]}>{data.name}</Text>
                    <Text style={[styles.text , {fontSize : 13 , color : data.percent1h >= 0 ? "green" : "red"}]}>{data.percent1h >=0 ? "+ " : ''}{data.percent1h.toFixed(2)}%</Text>
                    <Text style={[styles.text , {fontSize : 13 , color : data.percent24h >= 0 ? "green" : "red"}]}>{data.percent24h >=0 ? "+ " : ''}{data.percent24h.toFixed(2)}%</Text>
                    <Text style={[styles.text , {fontSize : 13 , color : data.percent7d >= 0 ? "green" : "red"}]}>{data.percent7d >=0 ? "+ " : ''}{data.percent7d.toFixed(2)}%</Text>
                    <Text style={[styles.text , {fontSize : 13 , color : data.percent30d >= 0 ? "green" : "red"}]}>{data.percent30d >=0 ? "+ " : ''}{data.percent30d.toFixed(2)}%</Text>
                    <Text style={[styles.text , {fontSize : 13 , color : data.percent60d >= 0 ? "green" : "red"}]}>{data.percent60d >=0 ? "+ " : ''}{data.percent60d.toFixed(2)}%</Text>
                    <Text style={[styles.text , {fontSize : 13 , color : data.percent90d >= 0 ? "green" : "red"}]}>{data.percent90d >=0 ? "+ " : ''}{data.percent90d.toFixed(2)}%</Text>
                </View>

            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.text , {color :"#fff"}]}>Buy now</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default CoinDetail;