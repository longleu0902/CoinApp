import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CryPto = () => {
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
            style={[styles.btnItem, { flexDirection: 'column', gap: 10, width: 300 }]}>
            <Text style={[styles.title, { fontSize: 16, color: '#2752E7' }]}>Earn rewards</Text>
            <Text style={[styles.title, { fontWeight: '600' }]}>Invite a friend to Coinbase and you’ll both get $10</Text>
            <View style={{alignItems:'flex-end' , marginTop : 5}}>
                <Image style={{ width: 100, height: 100 }} source={require("../../img/crypto.png")} />
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
export default CryPto