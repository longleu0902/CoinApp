
import Animated, { useSharedValue, withSpring, useAnimatedStyle, useAnimatedGestureHandler, withTiming, Easing, ReduceMotion } from 'react-native-reanimated';
import styles from './styles';
import { Image, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

type ShowModel = {
    title : string
    show: boolean
    setShow: any
}
const Toast = (props: ShowModel) => {
    const { show, setShow , title } = props;

    const translateY = useSharedValue(-200)
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{
            translateY: withSpring(translateY.value, {
                mass: 1,
                damping: 10,
                stiffness: 100,
                overshootClamping: false,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 2,
                reduceMotion: ReduceMotion.System,
            })
        }],
    }));

    const handleToast = () => {
        translateY.value = withSpring(50, { duration: 30 })
        setTimeout(() => {
            translateY.value = withSpring(-200, { duration: 10 })
            setShow(false)
        }, 1000)

    }
    if (show == true) {
        handleToast();
    }
    return (
        <>
            <Animated.View style={[styles.containerModel, animatedStyles]}>
                <View style={[styles.model]}>
                    <Text style={styles.textModel}>{title}</Text>
                    <Image style={{ width: 15, height: 15 }} source={require("../../img/modelSuccess.png")} />
                </View>
            </Animated.View>
        </>
    )
}
export default Toast;