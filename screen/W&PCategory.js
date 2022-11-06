import React from 'react'
import { useTranslation } from "react-i18next";
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { StyleSheet, Text, View} from 'react-native'
const data = [
  { provider: "Provider", worker: "Worker" },
];
export default function WandPCategory(navigate) {
   const {t} = useTranslation();
   const onPress = () => {
   navigation.navigate('#');
  };
  return (<Text></Text>  );
};

const styles = StyleSheet.create({})