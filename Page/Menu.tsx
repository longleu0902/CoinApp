import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fethData } from '../Service/API';
import { useEffect, useState } from 'react';
// import { TextInput } from 'react-native-gesture-handler';

interface list {
    id: number,
    name: string,
    img: string,
    country: string
}
const Menu = () => {
    //ID của Thành phố Hồ Chí Minh (Sai Gon) trong dữ liệu API của OpenWeatherMap là 1566083.
    //ID của Thành phố Quy Nhơn trong dữ liệu API của OpenWeatherMap là 1568770.
    const navigate = useNavigation<any>()

    const date = new Date()
    // console.log("check date", typeof date)


    const list: list[] = [
        {
            id: 1581130,
            name: 'Hà Nội',
            country: "Việt Nam",
            img: require('../img/sun.png'),
        },
        {
            id: 1566083,
            name: 'Hồ Chí Minh',
            country: "Việt Nam",
            img: require('../img/sun.png'),
        },
        {
            id: 1568770,
            name: 'Quy nhơn',
            country: "Việt Nam",
            img: require('../img/sun.png'),
        },

    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigate.navigate("Search")} style={styles.search}>
                    <Image source={require('../img/search.png')} />
                   <Text style={{color:'#333'}}>Search for a city</Text>
                </TouchableOpacity>

            </View>
            {list.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigate.navigate('Home', { id: item.id, name: item.name })}
                        style={styles.item}
                    >
                        <Image source={require('../img/product.png')} />
                        <Image style={styles.img} source={require('../img/sun.png')} />
                        <View style={[styles.img, { left: 25, top: 40, gap: 10 }]}>
                            <Text style={{ fontSize: 30, fontWeight: '700', color: '#fff' }}>{item.name}</Text>
                            <Text style={{ fontSize: 12, fontWeight: '700', color: '#ccc' }}>H:24°  T:18°</Text>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>{item.country}</Text>
                        </View>
                        <View style={[styles.img, { right: 60, top: 130 }]}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>{date.getHours() + " : " + date.getMinutes()}</Text>
                        </View>

                    </TouchableOpacity>
                )
            })}



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2E335A",
        paddingHorizontal: 30,
        gap: 50
    },
    header: {
        height: 100,
        justifyContent: 'center',
        // alignItems:'center'
    },
    item: {
        position: 'relative',


    },
    img: {
        position: 'absolute',
        right: 30,
        top: -40

    },
    search: {
        width: '100%',
        height: 50,
        marginTop: 100,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#000",
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#63688C',
        paddingHorizontal:20,
        gap : 15

    }
})
export default Menu