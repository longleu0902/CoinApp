import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "../Nav/styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface nav {
    id: number,
    name: string,
    img: any,
    imgActive: any,
    active: boolean,
}
const Nav = () => {
    const navigate = useNavigation<any>()
    const defaultItem = [
        {
            id: 1,
            name: 'Home',
            img: require("../../img/Home_fill.png"),
            imgActive: require("../../img/Home_fill-2.png"),
            active: false,
        },
        {
            id: 2,
            name: 'Portfolio',
            img: require("../../img/Pipe_fill.png"),
            imgActive: require("../../img/Pipe_fill-2.png"),
            active: false,
        },
        {
            id: 3,
            name: '',
            img: require("../../img/Sort_arrow.png"),
            imgActive: require("../../img/Sort_arrow.png"),
            active: false,
        },
        {
            id: 4,
            name: 'Prices',
            img: require("../../img/Chart_alt_fill.png"),
            imgActive: require("../../img/Chart_alt_fill-2.png"),
            active: false,
        },
        {
            id: 5,
            name: 'Settings',
            img: require("../../img/User_fill.png"),
            imgActive: require("../../img/User_fill-2.png"),
            active: false,
        },
    ]
    const [renderItem, setRenderItem] = useState(defaultItem);
    const handleClick = (id: number) => {
        const _renderItem = [...defaultItem]
        const index = _renderItem.findIndex(item => item.id == id)
        _renderItem[index]["active"] = true
        setRenderItem(_renderItem)
        switch (id) {
            case 1:
                navigate.navigate("Home")
                break;
            case 2:
                navigate.navigate("Prortfolio")
                break;
            case 5:
                navigate.navigate("SignOut");
                break;
            default:
                navigate.navigate("Home")
        }

    }
    useEffect(()=> {
        handleClick(1)
    },[])

    return (
        <View style={styles.container}>
            {renderItem.map((item: nav, index: number) => (
                <View key={index} style={styles.item}>
                    <TouchableOpacity
                        onPress={() => handleClick(item.id)}
                        style={[styles.btn,
                        {
                            backgroundColor: item.id == 3 ? "#2752E7" : "#FFF",
                            padding: item.id == 3 ? 30 : 0
                        }
                        ]}>
                        {item.active ? (
                            <Image source={item.imgActive} />
                        ) : (
                            <Image source={item.img} />
                        )}
                    </TouchableOpacity>
                    {item.id !== 3 && <Text style={[styles.text, { color: item.active == true ? "blue" : '#707070' }]}>{item.name}</Text>}

                </View>
            ))}

        </View>
    )
}

export default Nav