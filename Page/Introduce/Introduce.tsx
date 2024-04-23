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

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, useAnimatedGestureHandler, withTiming, Easing } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import React from 'react';


const Introduce = () => {
    const navigate = useNavigation<any>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.Item, { flex: 5 }]}>
                <Text style={[styles.text, { fontSize: 40 }]}>coinbase</Text>
            </View>
            <View style={[styles.Item, { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: '#fff' }]}
                    onPress={() => navigate.navigate("signup")}
                >
                    <Text style={[styles.text, { color: '#000' }]}>Get started</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigate.navigate("Login")}
                >
                    <Text style={styles.text}>Sign in</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default Introduce