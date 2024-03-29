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
// import Home from './Page/Home';
import AppRouter from './Routes/AppRoutes';
import { NavigationContainer } from '@react-navigation/native';



type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  console.log("hello")


  return (
    <NavigationContainer>
        <AppRouter/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});

export default App;
