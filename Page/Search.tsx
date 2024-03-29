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
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fethData } from '../Service/API';
import { useEffect, useState } from 'react';

const Search = () => {
    const [keyWord, setKeyWord] = useState('')
    const navigate = useNavigation<any>()
    const [show, setShow] = useState(true)

    const dismissKeyboard = () => {
        Keyboard.dismiss();
        setKeyWord('')
        setShow(true)
    };

    const cities = [
        {
            id: 1581130,
            name: 'Hà Nội',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1562820,
            name: 'Hải Phòng',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1581188,
            name: 'Hà Giang',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1581047,
            name: 'Hạ Long',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1580700,
            name: 'Sapa',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1580142,
            name: 'Vinh',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1580240,
            name: 'Thanh Hóa',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1580247,
            name: 'Thái Bình',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1563287,
            name: 'Cao Bằng',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1587976,
            name: 'Pleiku',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1584661,
            name: 'Long Xuyên',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1575627,
            name: 'Bắc Giang',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1562548,
            name: 'Bắc Ninh',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1569805,
            name: 'Đồng Hới',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1576633,
            name: 'Hải Dương',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1563281,
            name: 'Lạng Sơn',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1583992,
            name: 'Nam Định',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1566083,
            name: 'Thành phố Hồ Chí Minh',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1563281,
            name: 'Cần Thơ',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1562414,
            name: 'Biên Hòa',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1566346,
            name: 'Nha Trang',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1568757,
            name: 'Buôn Ma Thuột',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1586350,
            name: 'Vũng Tàu',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1587923,
            name: 'Phan Thiết',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1586443,
            name: 'Cà Mau',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1568770,
            name: 'Quy Nhơn',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1583449,
            name: 'Rạch Giá',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1587976,
            name: 'Cần Giờ',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1564433,
            name: 'Tiền Giang',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1585660,
            name: 'Cao Lãnh',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1560349,
            name: 'Vĩnh Long',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1587976,
            name: 'Sóc Trăng',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1562412,
            name: 'Bạc Liêu',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1580141,
            name: 'An Giang',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1568754,
            name: 'Hậu Giang',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1568877,
            name: 'Kiên Giang',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1580541,
            name: 'Bến Tre',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1568212,
            name: 'Trà Vinh',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1572151,
            name: 'Bình Thuận',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1581047,
            name: 'Long An',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1566083,
            name: 'Đồng Tháp',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        },
        {
            id: 1568793,
            name: 'Vị Thanh',
            country: 'Việt Nam',
            img: require('../img/sun.png'),
        }
    ];

    // console.log(cities.length)
    

    const filter = cities.filter((product) => product.name.includes(keyWord))



    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={
                [
                styles.container, 
                { 
                    backgroundColor: show ? '#2E335A' : '#000' ,
                    // alignItems: show ? 'center' : "stretch" 

                }
                ]
                }>
                {show && <View style={styles.nav}>
                    <TouchableOpacity onPress={() => navigate.navigate('Menu')} style={styles.back}>
                        <Image source={require('../img/Back.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, color: '#fff' }}>Menu</Text>
                </View>}


                <View style={[styles.header, { marginTop: !show ? 50 : 0 }]}>
                    <View style={[styles.search, { backgroundColor: show ? '#63688C' : '#fff' }]}>
                        <Image source={require('../img/search.png')} />

                        <TextInput
                            onFocus={() => setShow(prev => !prev)}
                            onChangeText={(text) => setKeyWord(text)}
                            value={keyWord}
                            style={{ height: "100%", width: '100%', borderRadius: 15, color: '#000' }}
                            placeholder='  Search for a city'
                        >

                        </TextInput>
                        {!show &&
                            <TouchableOpacity
                                onPress={dismissKeyboard}
                                style={styles.cancel}>
                                <Text style={{ color: '#fff', fontWeight: '800' }}>X</Text>
                            </TouchableOpacity>}



                    </View>

                </View>
                {show && 
                <Text style={{fontSize:30 , fontWeight: '700' , color:'#fff' ,paddingHorizontal:15}}>No data</Text>
                
                }


                <ScrollView contentContainerStyle={styles.list}>
                    {!show && filter.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => navigate.navigate('Home', { id: item.id, name: item.name })}
                            key={index}
                            style={styles.listItem}>
                            <Text style={{ color: '#fff' }}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}


                </ScrollView>
            </View>
        </TouchableWithoutFeedback>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#2E335A',
        paddingHorizontal: 20
    },
    search: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#000",
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#63688C',
        paddingHorizontal: 20,
        gap: 15,
        position: 'relative'

    },
    header: {
        height: 100,
        justifyContent: 'center',
        // alignItems:'center',
        // flexDirection:'row'
    },
    back: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nav: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginTop: 70
    },
    list: {
        // backgroundColor:'#000',
    },
    listItem: {
        width: '100%',
        height: 50,
        // backgroundColor: '#000',
        paddingHorizontal: 20,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    cancel: {
        backgroundColor: '#000',
        width: 30,
        height: 30,
        borderRadius: 50,
        position: 'absolute',
        right: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    }
})
export default Search;