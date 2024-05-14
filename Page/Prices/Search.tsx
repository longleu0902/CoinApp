import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



const Search = (props: any) => {
    const { setShowSearch, keyWord, setKeyWord } = props;
    const [activeInput, setActiveInput] = useState(false);
    return (
        <View style={styles.container}>
            <View style={[styles.boxInput, { borderColor: activeInput ? "#2752E7" : "#707070" }]}>
                <TextInput
                    style={{ width: "90%" }}
                    placeholder="Search"
                    value={keyWord}
                    onChangeText={(Text) => setKeyWord(Text)}
                    onFocus={() => setActiveInput(true)}
                />
                <TouchableOpacity onPress={() => setKeyWord("")}>
                    <Image style={{ width: 10, height: 15 }} source={require("../../img/Close.png")} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setShowSearch(false)
                    setActiveInput(false)
                    setKeyWord("")
                }}>
                <Text style={styles.Text}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    boxInput: {
        borderWidth: 1,
        width: "60%",
        padding: 15,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center"

    },
    Text: {
        fontWeight: "700",
        fontSize: 16
    },

})
export default Search;