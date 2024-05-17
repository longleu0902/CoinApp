/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import LayOut from './Layout/LayOut';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  console.log("hello")


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <LayOut />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>


  );
}

const styles = StyleSheet.create({

});

export default App;
