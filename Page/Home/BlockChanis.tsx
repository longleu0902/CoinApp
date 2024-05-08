import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const BlockChanis = () => {
    const navigate = useNavigation<any>();

    const data: any = [
        {
            id: "1",
            title: "KNC",
            price: "$2,66",
            percent: "+22,37",
            img: require('../../img/KNCL.png')

        },
        {
            id: "2",
            title: "ATOM",
            price: "$16,39",
            percent: "+16,07",
            img: require('../../img/ATOM.png')

        },
        {
            id: "3",
            title: "CRV",
            price: "$10,39",
            percent: "+12,07",
            img: require('../../img/aCRV.png')

        },
    ];
    const renderItem = ({ item }: any) => (
        <TouchableOpacity
            onPress={() => navigate.navigate("ListBitcoin")}
            style={[styles.btnItem, { flexDirection: 'column', gap: 30, width: 300 }]}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 100, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
                <Image source={require("../../img/MATIC.png")} />
            </View>
            <View style={{ gap: 2 }}>
                <Text style={styles.text}>What is Polygon?</Text>
                <Text style={[styles.text, { fontSize: 14, color: '#3F845F' }]}>Earn $3 MATIC</Text>
            </View>
        </TouchableOpacity>
    )
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{ gap: 10 }}
        />
    )
}
export default BlockChanis