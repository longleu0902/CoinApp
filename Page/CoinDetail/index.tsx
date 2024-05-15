import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

const CoinDetail = ({ route }: any) => {
    const { data } = route.params;
    console.log("check data" , data)
    return (
        <SafeAreaView>
            <Text>{data.name}</Text>
            <Text>{data.symbol}</Text>
            <Text>{data.price}</Text>
            <Text>{data.percent}</Text>
        </SafeAreaView>
    )
}

export default CoinDetail;