import React from "react";
import { useTranslation } from "react-i18next";
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, Image, TextInput, View, Pressable, Text} from "react-native";

const Otp = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(null);
  const {t} = useTranslation();
  const onPress = () => {
    navigation.navigate('WorkLook');
  };
  return (
    <>   
    <View style={styles.container}>
    <SafeAreaView >
      <TextInput
        style={[styles.input,  {
          transform: [{ translateY: -80 }]
        }]}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="OTP"
        placeholderTextColor="#7E90AA" 
        />
    </SafeAreaView>
        <Pressable style={[styles.button, styles.shadowProp]} onPress={onPress}>
<Text style={styles.text}>आगे बढ़े</Text>
    </Pressable>
       </View>
       <View style={styles.lableB}>
       <Text style={styles.lableU}>Under Register</Text>
       </View>
       <View style={styles.row}>
    <View
        style={[styles.box]}
    >
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://user-images.githubusercontent.com/73784964/163539179-57d7ecd5-bc9a-482b-9e41-34b7b5ae3a0f.png',
        }}
      />
      <Text style={styles.lable}>Ministry of labour &
Employment</Text>
      </View>
      <View
        style={[styles.box]}
    >
      <Image
        style={styles.tinyLogo1}
        source={{
          uri: 'https://user-images.githubusercontent.com/73784964/163546518-c2f5c992-e884-4c7e-85cd-81e9ab9a7b35.png',
        }}
      />
      </View>
      </View>
        </>
  );
};

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: '#ffffff',
    height:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: "white",
    height: 56,
    width: 330,
    marginTop: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#002C6E',
    padding: 10, 
    textAlign: "center",  
    fontFamily: "Segoe UI", 
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing:10,
  },
button: {
  marginTop: -50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  height: 44,
  width: 113,
  elevation: 3,
  backgroundColor: '#0088F1',
},
text: {
  fontSize: 25,
  fontWeight: 'bold',
  fontFamily: "Segoe UI", 
  letterSpacing: 0.25,
  color: 'white',
},
shadowProp: {
  shadowColor: '#000000',
  shadowOffset: {width: 20, height: 40},
  shadowOpacity: 0.2,
  elevation: 10,
  shadowRadius: 10,
},
box: {
  width: 199,
  height: 170,
  alignItems: 'center',
  backgroundColor:'#FFFFFF'
     },
row: {
  flexDirection: "row",
  flexWrap: "nowrap",
   },
tinyLogo: {
  width: 60,
  height: 110,
  },
  tinyLogo1: {
    width: 160,
    height: 65,
    alignItems: 'center',
    marginTop: 50
    },
  lable: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Arial',
    fontWeight:'bold',
    color: '#000000'
  },
  lableU: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6F59F9',
    fontFamily: 'Segoe UI',
    opacity: 0.4,
    textAlign: 'center',
    backgroundColor:'#D8D2FE'
     },
  lableB: {
    backgroundColor:'#FFFFFF'
     }
});
export default Otp; 