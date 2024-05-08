import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
interface renderData {
    id: string,
    title: string,
    titleActive: string,
    description: string,
    img: any
}
const News = () => {
    const data: renderData[] = [
        {
            id: "1",
            title: "Decrypt • 18 hours ago",
            titleActive: " • USD Coin",
            description: "Miami Crypto Aspirations Boosted by Borderless Capitals $25 Milion Fund",
            img: require("../../img/imgNews1.png")

        },
        {
            id: "2",
            title: "Decrypt • 19 hours ago",
            titleActive: " • Bitcoin",
            description: "Bitcoin Mini Showdown Puts New York on Front Lines of a Green Fight",
            img: require("../../img/imgNews2.png")

        },
        {
            id: "3",
            title: "Decrypt • 20 hours ago",
            titleActive: " • Bitcoin",
            description: "Bitcoin Price Volatility Reached Its Highest In A Year During May",
            img: require("../../img/imgNews3.png")

        },
        {
            id: "4",
            title: "Decrypt • 21 hours ago",
            titleActive: " • USD Coin",
            description: "Guggenheim’s New Fund May Seek Bitcoin Exposure",
            img: require("../../img/imgNews4.png")

        },
        {
            id: "5",
            title: "Decrypt • 21 hours ago",
            titleActive: " • Bitcoin",
            description: "Standard Chartered to launch institutional crypto brokerage and exchange in Europe",
            img: require("../../img/imgNews5.png")

        },
    ]
    const renderItem = ({ item }: { item: renderData }) => (
        <TouchableOpacity style={styles.item}>
            <View style={styles.title}>
                <View style={styles.titleItem}>
                    <Text style={styles.textTitle}>{item.title}</Text>
                    <Text style={styles.textTitleActive}>{item.titleActive}</Text>
                </View>
                <Text style={styles.text}>{item.description}</Text>
            </View>
            <View style={styles.img}>
                <Image source={item.img} />
            </View>
        </TouchableOpacity>
    )
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{ gap: 50 }}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        width: '80%',
        gap: 10
    },
    img: {
        width: '20%'
    },
    titleItem: {
        flexDirection: 'row'
    },
    textTitle: {
        fontSize: 14,
        color: "#707070"
    },
    textTitleActive: {
        fontSize: 14,
        color: '#2752E7'

    },
    text: {
        fontSize: 16
    }
})
export default News