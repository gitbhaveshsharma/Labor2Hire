import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Lnaguage from './screen/chooseLanguge';
import Mobile from './screen/MobileNumber';
import OTP from './screen/Otp';
import WorkerAndProvider from './screen/W&PCategory';
import WorkLook from './screen/workLook';
import WorkFor from './screen/WAddress';
import Aadhar from './screen/aadharV'
import UserDetails from './screen/UserDetails';
import Dashboard from './screen/Dashboard'
import WorkAndProvider from './screen/W&PCategory';
import WorkerLook from './screen/workerLook'
import ProviderWorker from './screen/Paddress'
import WorkerDashboard from './screen/WorkerDashboard'
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import './screen/components/constants/DCSLocalize';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Language Select" component={Lnaguage} />
          <Stack.Screen name="Mobile" component={Mobile} />
          <Stack.Screen name="OTP" component={OTP} />
          {/* <Stack.Screen name="WorkerAndProvider" component={WorkerAndProvider} /> */}
          <Stack.Screen name="WorkLook" component={WorkLook} />
          <Stack.Screen name="WorkFor" component={WorkFor} />
          <Stack.Screen name="WorkerLook" component={WorkerLook} />
           <Stack.Screen name="ProviderWorker" component={ProviderWorker} />
          <Stack.Screen name="Aadhar" component={Aadhar} />
          <Stack.Screen name="UserDetails" component={UserDetails} />
          <Stack.Screen name="WorkAndProvider" component={WorkAndProvider} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="WorkerDashboard" component={WorkerDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
