import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useRef } from "react";

const Prortfolio = () => {
    const resetScrollView = useSelector<any>(state => state.scrollView.render)
    const navigate = useNavigation<any>();
    const scrollViewRef = useRef<ScrollView>(null);
    const scrollToTop = () => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true }) ?? null;
    };

    useFocusEffect(
        useCallback(() => {
            scrollToTop()
        },[resetScrollView])
    )
    const renderData = [
        {
            id: 1,
            img: require("../../img/USDC.png"),
            name: "USD Coin",
            price: "00.00",
            type: "0 USDC"
        },
        {
            id: 2,
            img: require("../../img/MATIC.png"),
            name: "Polygon",
            price: "13.80",
            type: "8.52889997 MATIC"
        },
        {
            id: 3,
            img: require("../../img/Ox.png"),
            name: "Ox",
            price: "00.00",
            type: "0 ZRX"
        },
        {
            id: 4,
            img: require("../../img/1INCH.png"),
            name: "1Inch",
            price: "00.00",
            type: "0 1INC"
        },
        {
            id: 5,
            img: require("../../img/aAAVE.png"),
            name: "AAve",
            price: "00.00",
            type: "0 AAVE"
        },
        {
            id: 6,
            img: require("../../img/ALGO.png"),
            name: "Algorand",
            price: "00.00",
            type: "0 ALGO"
        },
        {
            id: 7,
            img: require("../../img/ampl.png"),
            name: "Ampleforth Governance",
            price: "00.00",
            type: "0 FORTH"
        },
        {
            id: 8,
            img: require("../../img/ANKR.png"),
            name: "Ankr",
            price: "00.00",
            type: "0 FORTH"
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
                <View style={styles.header}>
                    <Text style={[styles.textGrey, { fontSize: 14 }]}>
                        Portfolio balance
                    </Text>
                    <Text style={[styles.textBlack, { fontSize: 30 }]}>
                        $13.84
                    </Text>
                </View>
                {renderData.map((item, index) => (
                    <View key={index} style={styles.list}>
                        <View style={{ flexDirection: "row", alignItems: 'center', gap: 20 }}>
                            <Image source={item.img} />
                            <Text style={styles.textBlack}>{item.name}</Text>
                        </View>
                        <View style={{ alignItems: "flex-end", gap: 5 }}>
                            <Text style={styles.textBlack}>$ {item.price}</Text>
                            <Text style={styles.textGrey}>{item.type}</Text>
                        </View>
                    </View>

                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Prortfolio