import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { getDataCoin, fethDataCoin, fethDataCoinIcon } from "../../Service/API";
import SelectCoin from "../SelectCoin";
const ConvertCoin = () => {
    const navigate = useNavigation<any>();

    //open selectCoinÏ
    const [selectCoin, setSelectCoin] = useState(false);

    //Call API and push data in listCoin --> props to selectCoin and render list
    const [listCoin, setListCoin] = useState<any>([]);

    //Check to see if it is on the left or right side
    const [checkConvertCoin, setCheckConvertCoin] = useState("");

    //Priview convert
    const [numberConvert, setNumberCovert] = useState(0);
    const [number, setNumber] = useState("");
    const [showConvert, setShowConvert] = useState(false);



    //Keyboard
    const defaultKeyBoard = [
        {
            id: 1,
            number: '1'
        },
        {
            id: 2,
            number: '2'
        },
        {
            id: 3,
            number: '3'
        },
        {
            id: 4,
            number: '4'
        },
        {
            id: 5,
            number: '5'
        },
        {
            id: 6,
            number: '6'
        },
        {
            id: 7,
            number: '7'
        },
        {
            id: 8,
            number: '8'
        },
        {
            id: 9,
            number: '9'
        },
        {
            id: 12,
            number: ''
        },
        {
            id: 10,
            number: '0'
        },
        {
            id: 11,
            number: '<-'
        },
    ]


    //Box Changes listÏ
    const [changeCoin, setChangeCoin] = useState<any>([
        {
            id: 1,
            img1: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
            img2: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
            symbol1: "BTC",
            symbol2: "ADA"
        },
    ])


    // SWAP Coin
    const hanldeSwap = () => {
        setNumber("0")
        setNumberCovert(0);
        setShowConvert(false);
        let change;
        for (let i = 0; i < changeCoin.length; i++) {
            let Img1 = changeCoin[i]["img1"]
            let symbol1 = changeCoin[i]["symbol1"]
            changeCoin[i]["img1"] = changeCoin[i]["img2"]
            changeCoin[i]["symbol1"] = changeCoin[i]["symbol2"]
            changeCoin[i]["img2"] = Img1
            changeCoin[i]["symbol2"] = symbol1
            change = [...changeCoin]
        }
        setChangeCoin(change)
    }

    //fomatNumber
    const formatNumberWithCommas = (number: number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Choose NumberÏ
    const handleClickKeyBoard = (item: any) => {
        setNumber("0")
        setNumberCovert(0);
        setShowConvert(false);
        if (item.id == 12) return;
        if (item.id == 11) {
            setNumber(number.slice(0, -1))
            return;
        }
        setNumber(number + Number(item.number))
    }


    //Preview convert
    const handleConvert = async () => {
        const _changeCoin = [...changeCoin]
        const coin1: any = await getDataCoin(_changeCoin[0]["symbol1"]);
        const coin2: any = await getDataCoin(_changeCoin[0]["symbol2"]);
        setShowConvert(true)

        const convert = (coin1.price * Number(number)) / coin2.price
        setNumberCovert(convert)
    }

    //Click choose then open selectCoin 
    const handleChooseCoin = async (type: string) => {
        setNumberCovert(0);
        setShowConvert(false)
        setCheckConvertCoin(type)
        const res: any = await fethDataCoin(10);
        const _list = [...res.data];
        setListCoin(_list)
        setSelectCoin(true);
    }

    // handle from selectCoin --> To makes changes icon and symbolÏ
    const handleClickCoin = async (id: number, symbol: string) => {
        const logo = await fethDataCoinIcon(id)
        const _changeCoin = [...changeCoin]
        if (checkConvertCoin == "From") {
            _changeCoin[0]["symbol1"] = symbol
            _changeCoin[0]["img1"] = logo
        }
        if (checkConvertCoin == "To") {
            _changeCoin[0]["symbol2"] = symbol
            _changeCoin[0]["img2"] = logo
        }
        setChangeCoin(_changeCoin)
    }

    return (
        <View style={styles.content}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigate.navigate("Home")} style={{ width: "5%" }}>
                        <Image source={require("../../img/Arrow_left.png")} />
                    </TouchableOpacity>
                    <View style={{ width: "95%", alignItems: "center" }}>
                        <Text style={styles.text}>Convert Bitcoin</Text>
                    </View>
                </View>
                <View style={styles.number}>
                    {!showConvert &&
                        <Text style={[styles.text, { color: "#2752E7", fontSize: 50 }]}>${formatNumberWithCommas(Number(number))}</Text>
                    }

                    {showConvert &&
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                            <Text style={[styles.text, { color: "#2752E7", fontSize: 20 }]}>{formatNumberWithCommas(Number(number))}</Text>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: changeCoin[0]["img1"] }} />
                            <Text style={[styles.text, { color: "#2752E7", fontSize: 17 }]}>=</Text>
                            <Text style={[styles.text, { color: "#2752E7", fontSize: 20 }]}>{formatNumberWithCommas(Number(numberConvert.toFixed(10)))}</Text>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: changeCoin[0]["img2"] }} />
                        </View>
                    }


                </View>
                <View style={styles.boxChange}>
                    {changeCoin.map((item: any, index: number) => (
                        <>
                            <Image style={{ width: 35, height: 35 }} source={{ uri: item.img1 }} />
                            <TouchableOpacity onPress={() => handleChooseCoin("From")} style={{ gap: 2 }}>
                                <Text style={[styles.text, { fontWeight: '400', fontSize: 14, color: "#707070" }]}>From</Text>
                                <Text style={[styles.text, { fontWeight: '400', fontSize: 14 }]}>{item.symbol1}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => hanldeSwap()} style={styles.btnChange}>
                                <Image source={require("../../img/Sort_arrow-2.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleChooseCoin("To")} style={{ gap: 2 }}>
                                <Text style={[styles.text, { fontWeight: '400', fontSize: 14, color: "#707070" }]}>To</Text>
                                <Text style={[styles.text, { fontWeight: '400', fontSize: 14 }]}>{item.symbol2}</Text>
                            </TouchableOpacity>
                            <Image style={{ width: 35, height: 35 }} source={{ uri: item.img2 }} />
                        </>

                    ))}
                </View>
                <View style={styles.keyboad}>
                    {defaultKeyBoard.map((item: any, index: number) => {
                        return (
                            <TouchableOpacity onPress={() => handleClickKeyBoard(item)} key={index} style={styles.textNumber}>
                                <Text style={[styles.text, { fontSize: 35, fontWeight: "400" }]}>{item.number}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <TouchableOpacity onPress={() => handleConvert()} style={styles.btn}>
                    <Text style={[styles.text, { color: "#fff" }]}>Preview convert</Text>
                </TouchableOpacity>


            </View>
            {selectCoin &&
                <View style={styles.chooseCoin}>
                    <SelectCoin listCoin={listCoin} setSelectCoin={setSelectCoin} handleClickCoin={handleClickCoin} />
                </View>
            }

        </View>

    )
}
export default ConvertCoin;