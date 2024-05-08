import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
interface renderData {
    id: string,
    title: string,
    price: string,
    percent: string,
    img: any

}
const TopMovers = () => {
    const data: renderData[] = [
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
    const handleClickTopMovers = (id: string) => {
        console.log("check id", id)
    }

    const renderItem = ({ item }: { item: renderData }) => (
        <TouchableOpacity
            onPress={() => handleClickTopMovers(item.id)}
            style={[styles.btnItem, { width: 138, height: 145 }]}>
            <View style={{ gap: 10 }}>
                <Image source={item.img} />
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 10 }}>
                    <Text style={[styles.title, { fontSize: 16 }]}>{item.title}</Text>
                    <Text style={[styles.text, { color: "#707070" }]}>{item.price}</Text>
                </View>
                <Text style={[styles.title, { color: '#3F845F' }]}>{item.percent}%</Text>
            </View>
        </TouchableOpacity>
    );
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
export default TopMovers