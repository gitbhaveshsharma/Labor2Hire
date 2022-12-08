import React from 'react'
import { useTranslation } from "react-i18next";
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { StyleSheet, Text, View,Pressable} from 'react-native'
const data = [
  { provider: "Provider", worker: "Worker" },
];
export default function WandPCategory(navigate) {
   const {t} = useTranslation();
return (
    <View style={styles.container}>
      
          <Pressable style={styles.bigblue}
            onPress={() => setLanguage(language.code)} >
            <Text style={styles.text}>worker</Text>
          </Pressable>
          
    </View>
  );
};
const styles = StyleSheet.create({
container: {
    backgroundColor: '#FFFFFF',
    height:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:40,
  },
  title: {
    fontSize:50,
    fontWeight:'bold',
    color:'#000000',
    lineHeight:70,
  },
  title2: {
    fontSize:58,
    marginBottom:20
  },
  text: {
    fontFamily:'Arial',
    fontSize: 23,
    width:252,
    height:59,
    textAlign:'center',
    padding:5,
    margin:20,
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
  selectedText: {
    fontSize: 23,
    width:254,
    height:59,
    fontWeight: "600",
    textAlign:'center',
    color: "#ffffff",
    backgroundColor:'#0088F1',
    fontWeight:'bold',
    borderColor: '#002C6E',
    borderRadius:10,
    paddingVertical: 13,
    letterSpacing:1,
    shadowColor: '#000000',
    shadowOffset: {width: 20, height: 40},
    shadowOpacity: 0.2,
    elevation: 10,
    shadowRadius: 10,
  },
  bigblue: {
    
        }
});