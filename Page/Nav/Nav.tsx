import { Text, TouchableOpacity, View, Image, useWindowDimensions } from "react-native";
import styles from "../Nav/styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { PanGestureHandler, GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, useAnimatedGestureHandler, withTiming, Easing } from 'react-native-reanimated';
import Spend from "./Spend";
import { uid } from "uid";
import { setRender } from "../../Redux/scrollViewReducer";
import { useDispatch } from "react-redux";

interface nav {
    id: number,
    name: string,
    img: any,
    imgActive: any,
    active: boolean,
}
const Nav = () => {
    const dispath = useDispatch();
    const navigate = useNavigation<any>();
    const translateY = useSharedValue(700);
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
                navigate.navigate("Home");
                translateY.value = withTiming(700, { duration: 30 })
                break;
            case 2:
                navigate.navigate("Prortfolio")
                translateY.value = withTiming(700, { duration: 30 })
                break;
            case 3:
                translateY.value = withSpring(0, { duration: 30 })
                break;
            case 5:
                navigate.navigate("SignOut");
                translateY.value = withTiming(700, { duration: 30 })
                break;
            default:
                navigate.navigate("Home")
        }

    }

    const [lastPress, setLastPress] = useState(0);
    const handleDoubleClick = (id: number) => {
        const currentTime = new Date().getTime();
        const doublePressDelay = 300; // Khoảng thời gian cho phép giữa hai lần click

        if (currentTime - lastPress < doublePressDelay) {
            // Xử lý sự kiện double click ở đây
            const render = uid();
            dispath(setRender(render))
            switch (id) {
                case 1:
                    navigate.navigate("Home");
                    translateY.value = withTiming(700, { duration: 30 })
                    break;
                case 2:
                    navigate.navigate("Prortfolio")
                    translateY.value = withTiming(700, { duration: 30 })
                    break;
                case 3:
                    translateY.value = withSpring(0, { duration: 30 })
                    break;
                case 5:
                    navigate.navigate("SignOut");
                    translateY.value = withTiming(700, { duration: 30 })
                    break;
                default:
                    navigate.navigate("Home")
            }
        }
        setLastPress(currentTime);
    }

    useEffect(() => {
        handleClick(1)
    }, []);

    const { height } = useWindowDimensions()
    const gestureHandler = useAnimatedGestureHandler({
        onStart: (event) => {
            // console.log('start')
        },
        onActive: (event) => {
            // console.log('active',event)
            translateY.value = event.translationY


        },
        onEnd: (event) => {
            // console.log('end', event.translationY)
            console.log(height)
            if (translateY.value < -height / 2 || event.velocityY < 0) {
                translateY.value = withTiming(0, { duration: 60 })

            } else if (translateY.value > height || event.velocityY > -500) {
                translateY.value = withTiming(700, { duration: 30 })
            }
            // translateY.value = withTiming(0, { duration: 30 })
        },
    });
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: withTiming(translateY.value, { duration: 250, easing: Easing.linear }) }],
    }));

    return (
        <GestureHandlerRootView >
            <View style={styles.container}>
                {renderItem.map((item: nav, index: number) => (
                    <View key={index} style={styles.item}>
                        <TouchableOpacity
                            onPress={() => {
                                handleClick(item.id)
                                handleDoubleClick(item.id)
                            }}
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
            <PanGestureHandler onGestureEvent={gestureHandler} >
                <Animated.View style={[styles.spend, animatedStyles]}>
                    <Spend />
                </Animated.View>
            </PanGestureHandler>

        </GestureHandlerRootView>

    )
}

export default Nav