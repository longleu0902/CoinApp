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


import { fethData } from './Service/API';
import { NavigationContainer } from '@react-navigation/native';
import LayOut from './Layout/LayOut';
import { Provider } from 'react-redux';
import store from './Redux/Store';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  console.log("hello")


  return (
    <Provider store={store}>
      <NavigationContainer>
        <LayOut />
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({

});

export default App;
