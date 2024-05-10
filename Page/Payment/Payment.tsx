import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"



const Payment = () => {
    const navigate = useNavigation<any>();
    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => navigate.navigate("Home")}
                style={{ width: 50, height: 50, marginHorizontal: 20 }}
            >
                <Image source={require("../../img/Arrow_left.png")} />
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={[styles.text, { fontSize: 22 }]}>Lick Your Card</Text>
                <View style={styles.form}>

                    <View style={styles.formGroup}>
                        <Text style={styles.text}>Name on Card</Text>
                        <TextInput placeholder="Mobbin" style={styles.Input} />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.text}>Card number</Text>
                        <View style={[styles.Input, styles.InputCard]}>
                            <TextInput style={{ width: "70%" }} placeholder="XXXX XXXX XXXX XX" />
                            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10 }}>
                                <Image source={require("../../img/Visa.png")} />
                                <Image source={require("../../img/Master.png")} />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'space-between' }}>
                        <View style={[styles.formGroup, { width: "47%" }]}>
                            <Text style={styles.text}>Expriration</Text>
                            <TextInput placeholder="MM/YY" style={styles.Input} />
                        </View>
                        <View style={[styles.formGroup, { width: "47%" }]}>
                            <Text style={styles.text}>CVC</Text>
                            <TextInput placeholder="123" style={styles.Input} />
                        </View>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.text}>Postal code</Text>
                        <TextInput placeholder="Mobbin" style={styles.Input} />
                    </View>


                </View>
                <View style={styles.bottom}>
                    <Text style={[styles.text, { color: "#707070" }]}>By adding a new card, you agree to the
                        <TouchableOpacity>
                            <Text style={[styles.text, { color: "blue", marginTop: 10 }]}> credit/debit card terms.</Text>
                        </TouchableOpacity>
                    </Text>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: "#fff", fontSize: 20}}>Add Card</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 30
    },
    text: {
        // fontSize : 22 ,
        fontWeight: "600"
    },
    form: {
        gap: 20
    },
    formGroup: {
        gap: 10
    },
    Input: {
        borderWidth: 1,
        borderColor: "#707070",
        height: 50,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    InputCard: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bottom: {
       gap : 20
    },
    btn: {
        height: 60,
        backgroundColor: "#2752E7",
        width: "100%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    }
})
export default Payment