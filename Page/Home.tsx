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
    useWindowDimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, useAnimatedGestureHandler, withTiming, Easing } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { fethData } from '../Service/API';
import React from 'react';




const Home: React.FC<Props> = ({route}) => {
    const navigate = useNavigation<any>();
    const [city, setCity] = useState('')
    const { id } = route.params
    const { name } = route.params

    // console.log("check",id)

    const [list, setList] = useState<any>([])

    const fomatTime = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const formattedTime = hours

        return formattedTime;
    }
    const kelvinToCelsius = (tempKelvin: number) => {
        return (tempKelvin - 273.15).toFixed(0);
    };
    const capitalizeFirstLetter = (str: string) => {
        if (str && str.length < 0) return;
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }
    const feelWeather = (something : any) => {
       const check = kelvinToCelsius(something);
       if( Number(check) > 30) {
        const title = "The weather is quite hot today"
        return title
       }
       if( Number(check) < 30) {
        const title = "Today is quite cool"
        return title
       }
       if( Number(check) < 15) {
        const title = "Today is very cold"
        return title
       }
    }

    const ApiData = async (id: number) => {
        const data: any = await fethData(id);

        if (id = 1581130) {
            setCity("Ha Noi")
        }
        if (id = 1566083) {
            setCity("Ho Chi Minh")
        }
        if (id = 1568770) {
            setCity("Quy Nhon")
        }
        setList(data)
    }
    useEffect(() => {
        ApiData(id);
        // feelWeather();
    }, [])



    const translateY = useSharedValue(400);


    const [showBorder, setShowBoder] = useState<boolean>(false);
    const { height } = useWindowDimensions()

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (event) => {
            console.log('start')
            // translateY.value = 0
        },
        onActive: (event) => {
            // console.log('active',event)

            translateY.value = event.translationY


        },
        onEnd: (event) => {
            // console.log('end', event.translationY)
            console.log(height)
            if (translateY.value < -height / 2 || event.velocityY < -500) {
                // translateY.value = withTiming(500, { duration: 30 })
                translateY.value = withTiming(0, { duration: 60 })

            } else if (translateY.value > height || event.velocityY > -500) {
                // translateY.value = withTiming(0, { duration: 60 })
                // translateY.value = -height
                translateY.value = withTiming(400, { duration: 30 })
            }
        },
    });

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: withTiming(translateY.value, { duration: 250, easing: Easing.linear }) }],
    }));

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={{ height: '100%' }} source={require('../img/background.png')}>
                {/* <TouchableOpacity 
                onPress={()=>navigate.navigate('Menu')}
                style={{width:150 , height:150 , backgroundColor:'#fff'}}></TouchableOpacity> */}

                <View style={styles.body}>
                    <View style={styles.bodyHeader}>
                        <Text style={{ fontSize: 30, color: '#fff' }}>{name}</Text>
                        <Text style={{ fontSize: 70, color: '#fff' }}>{list ? kelvinToCelsius(list[0]?.main.temp)  : 0}°</Text>
                        <Text style={{ fontSize: 20, color: '#fff' }}>{ list ?capitalizeFirstLetter(list[0]?.weather[0].description) : 'none'}</Text>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>H:{list ? kelvinToCelsius(list[0]?.main.temp_max) : 0}°</Text>
                            <Text style={{ fontSize: 20, color: '#fff' }}>T:{list ? kelvinToCelsius(list[0]?.main.temp_min) : 0}°</Text>
                        </View>
                    </View>
                    <View style={styles.bodyImage}>
                        <Image source={require('../img/House2.png')} />
                        {/* <Text>abc</Text> */}

                    </View>
                    <View style={{ height: 100 }}></View>

                    <PanGestureHandler onGestureEvent={gestureHandler} >

                        <Animated.View style={[styles.item, animatedStyles]}>
                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <View style={{ width: 72, height: 7, backgroundColor: '#ccc', borderRadius: 20 }} >
                                </View>
                                {/* <View style={{ height: "100%", width: '100%' }}></View> */}
                            </View>
                            <View style={styles.headerItem}>
                                <Text style={{ color: '#ebebf5' }} >Hourly Forecast</Text>
                                <Text style={{ color: '#ebebf5' }} >Weekly Forecast</Text>
                            </View>


                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20, gap: 15 }}>
                                {list && list.map((item: any, index: number) => {
                                    let weather = item.weather[0].main
                                    const imgWeather = (weather: String) => {
                                        if (item.pop * 100 < 50 && item.pop * 100 > 0) {
                                            let img = require('../img/SunRain.png')
                                            return img
                                        }
                                        if (weather == 'Clouds') {
                                            let img = require('../img/wind.png')
                                            return img
                                        }
                                        if (weather == 'Rain') {
                                            let img = require('../img/rain.png')
                                            return img
                                        }
                                        if (weather == 'Clear') {
                                            let img = require('../img/sun.png')
                                            return img
                                        }

                                    }

                                    return (
                                        <View key={index} style={[styles.weatherItem, { backgroundColor: index == 0 ? '#452AA8' : '' }]}>
                                            <Text style={{ color: '#fff', fontSize: 16 }}>{index == 0 ? "Now" : fomatTime(item.dt) + " " + "AM"}</Text>
                                            <Image style={{ width: 40, height: 40 }} source={imgWeather(weather)} />
                                            <Text
                                                style={{ color: '#40CBD8', fontSize: 13, fontWeight: '800', opacity: item.pop * 100 == 0 ? 0 : 1 }}>
                                                {(item.pop * 100).toFixed(0)}%
                                            </Text>
                                            <Text style={{ color: '#fff', fontSize: 16 }}>{kelvinToCelsius(item.main.temp)}°</Text>
                                        </View>
                                    )
                                })}
                            </ScrollView>

                            <View style={{ paddingHorizontal: 0, paddingBottom: 30, gap: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                                <View style={[styles.weatherItem, { borderRadius: 15, width: '48%', alignItems: 'flex-start', paddingHorizontal: 10 }]}>
                                    <Text style={{ fontSize: 16, color: '#fff' }}>Feels Like</Text>
                                    <Text style={{ fontSize: 30, color: '#fff', fontWeight: "700" }}>{list ? kelvinToCelsius(list[0]?.main.feels_like) : 0}°</Text>
                                    <Text style={{ fontSize: 13, color: '#fff', marginTop: 30 }}>{list ? feelWeather(list[0]?.main.feels_like): "none"}</Text>
                                </View>
                                <View style={[styles.weatherItem, { borderRadius: 15, width: '48%', alignItems: 'flex-start', paddingHorizontal: 10 }]}>
                                    <Text style={{ fontSize: 16, color: '#fff' }}>Vision</Text>
                                    <Text style={{ fontSize: 30, color: '#fff', fontWeight: "700" }}>{list && list[0]?.visibility / 1000} km</Text>
                                    <Text style={{ fontSize: 13, color: '#fff', marginTop: 30 }}>{list && list[0]?.visibility / 1000 < 1 ? 'Limited visibility' : 'Foresight'}</Text>
                                </View>
                                <View style={[styles.weatherItem, { borderRadius: 15, width: '48%', alignItems: 'flex-start', paddingHorizontal: 10 }]}>
                                    <Text style={{ fontSize: 16, color: '#fff' }}>Humidity</Text>
                                    <Text style={{ fontSize: 30, color: '#fff', fontWeight: "700" }}>{list && list[0]?.main.humidity}%</Text>
                                    <Text style={{ fontSize: 10, color: '#fff', marginTop: 30 }}>Atmospheric pressure above ground {list && list[0]?.main.grnd_level} hPa</Text>
                                </View>
                                <View style={[styles.weatherItem, { borderRadius: 15, width: '48%', alignItems: 'flex-start', paddingHorizontal: 10 }]}>
                                    <Text style={{ fontSize: 16, color: '#fff' }}>WIND</Text>
                                    <Text style={{ fontSize: 30, color: '#fff', fontWeight: "700" }}>{list && list[0]?.wind.speed} M/s</Text>
                                    <Text style={{ fontSize: 10, color: '#fff', marginTop: 30 }}>wind direction is {list && list[0]?.wind.deg}</Text>
                                </View>
                            </View>
                        </Animated.View>

                    </PanGestureHandler>


                </View>
            </ImageBackground>


        </GestureHandlerRootView>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    body: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    bodyHeader: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7


    },
    bodyImage: {
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 20

    },
    triangle: {
        width: '100%',
        height: 0,
        // backgroundColor: 'red',
        borderStyle: 'solid',
        borderLeftWidth: 150,
        borderRightWidth: 150,
        borderBottomWidth: 70,
        borderTopWidth: 40,
        borderLeftColor: '#3A3A6A',
        borderRightColor: '#3A3A6A',
        borderBottomColor: '#3A3A6A',
        borderTopColor: 'transparent',
        // borderTopColor: '#000',
        // borderBottomLeftRadius:50,
        // borderBottomRightRadius:50,
        position: 'relative'
    },
    button: {
        width: '100%',
        height: 100,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // left:'35%',
        // backgroundColor:'#000',

    },
    buttonItem: {
        backgroundColor: '#A9AECE',
        width: 70,
        height: 70,
        borderRadius: 30,
        position: 'relative'


    },

    item: {
        width: '100%',
        height: '80%',
        backgroundColor: '#3A3A6A',
        opacity: 0.8,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: 1,
        shadowColor: 'pink',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 10,
        paddingHorizontal: 10,
        paddingVertical: 10



    },
    headerItem: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 25,
        borderRadius: 50

    },
    weatherItem: {
        // backgroundColor: '#6244D1',
        // opacity: 0.9,
        borderWidth: 1,
        borderColor: "#ccc",
        width: 70,
        height: 150,
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
        position: 'relative'

    },
})
export default Home