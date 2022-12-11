import React from 'react';
import { SafeAreaView, StyleSheet, Image, TextInput, View, Pressable, Text} from "react-native";
import { useTranslation } from "react-i18next";
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default function WorkAndProvider({navigation}) {
  const onWorker = () => {
   navigation.navigate('WorkLook');
  };
  const onProvider = () => {
   navigation.navigate('WorkerLook');
  };
  return (
    <View style={styles.container}>  
    <Text style={styles.title}> Select Your </Text>
    <Text style={styles.title2}> Category </Text>
    <View style={styles.workAndProvider}>
      <Pressable onPress={onWorker}>
            <Text style={styles.text}>Work</Text>
          </Pressable>
      
       <Pressable onPress={onProvider}>
            <Text style={styles.text}>Provider</Text>
        </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#FFFFFF',
    height:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize:50,
    fontWeight:'bold',
    color:'#000000',
    lineHeight:70,
  },
  title2: {
    fontSize:58,
    marginBottom:20,
    fontWeight:'bold',
    color:'#000000',
  },
workAndProvider:{
  flexWrap:'wrap',
  flexDirection:'row'
},
 text: {
    fontFamily:'Arial',
    fontSize: 23,
    width:150,
    height:59,
    textAlign:'center',
    padding:5,
    margin:10,
    color: 'blue',
    fontWeight: 'bold',
    color: "#0088F1",
    fontWeight:'bold',
    borderColor: '#002C6E',
    borderWidth: 2,
    borderRadius:10,
    paddingVertical: 14,
    letterSpacing:5,
  },
});
