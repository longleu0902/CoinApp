import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withTiming } from "react-native-reanimated";

const Spend = (props: any) => {
    const { translateY  } = props
    const navigate = useNavigation<any>()
    const renderList = [
        {
            id: 1,
            type: "Buy",
            description: "Buy crypto with cash"

        },
        {
            id: 2,
            type: "Sell",
            description: "Sell crypto for cash"

        },
        {
            id: 3,
            type: "Convert",
            description: "Convert one crypto to another"

        },
        {
            id: 4,
            type: "Send",
            description: "Send crypto to another wallet"

        },
        {
            id: 5,
            type: "Receive",
            description: "Receive crypto from another wallet"

        },
    ]

    const handleClick = (id: number) => {
        switch (id) {
            case 1:
                navigate.navigate("Buy");
                translateY.value = withTiming(700, { duration: 30 })
                break;
            case 2:
                navigate.navigate("");
                translateY.value = withTiming(700, { duration: 30 })
                break;
            case 3:
                navigate.navigate("ConvertCoin");
                translateY.value = withTiming(700, { duration: 30 })
                break;
            case 4:
                navigate.navigate("");
                translateY.value = withTiming(700, { duration: 30 })
                break;
            case 5:
                navigate.navigate("Receive");
                translateY.value = withTiming(700, { duration: 30 })
                break;
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.line}></View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
                {renderList.map((item, index) => (
                    <TouchableOpacity onPress={() => handleClick(item.id)} key={index} style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
                        <Text style={styles.icon}>+</Text>
                        <View style={{ gap: 3 }}>
                            <Text style={{ fontSize: 16, fontWeight: "700" }}>{item.type}</Text>
                            <Text style={{ fontSize: 13, color: "#707070" }}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}



            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        width: 80,
        height: 5,
        backgroundColor: "#000",
        borderRadius: 40
    },
    list: {
        gap: 30,
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    icon: {
        color: "#2752E7",
        fontSize: 35
    }
})
export default Spend;