import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Lnaguage from './screen/chooseLanguge';
import Mobile from './screen/mobileNumber';
import OTP from './screen/Otp'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import './screen/components/constants/DCSLocalize'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Lnaguage} />
          <Stack.Screen name="Mobile" component={Mobile} />
          <Stack.Screen name="OTP" component={OTP} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
