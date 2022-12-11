import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  View,
  Pressable,
  Text,
} from 'react-native';

const UselessTextInput = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [user, setUserData] = React.useState({ name: '', city:'',stete:'',country:''});
  const [number, onChangeNumber] = React.useState(null);
  const {t} = useTranslation();
  const onPress = () => {
     navigation.navigate('WorkerDashboard');
  };
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.inputLeble}>{t('common:pinCode')}</Text>
      <TextInput
        style={styles.input}
         onChangeText={(text) => setUserData({...user, name: text })}
         value={user.name}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.inputLeble}>{t('common:city')}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUserData({...user, city: text })}
         value={user.city}
        placeholder=""
      />
      <Text style={styles.inputLeble}>{t('common:state')}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUserData({...user, stete: text })}
         value={user.stete}
        placeholder=""
      />
      <Text style={styles.inputLeble}>{t('common:country')}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUserData({...user, country: text })}
         value={user.country}
        placeholder=""
      />
    </View>
    <View style={styles.location}>
      <Icon
        name='location-on'
        type='MaterialIcons'
        color='#0088F1' 
        size={30}
        />
      <Text style={styles.locationText}>click for location</Text>
      </View>
      <Pressable style={[styles.button, styles.shadowProp]} onPress={onPress}>
        <Text style={styles.text}>{t('common:next')}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:'#00000'
  },
   title: {
    fontSize:25,
    marginBottom:40,
    fontWeight:'700',
    color:'#000000',
  },
  input: {
    backgroundColor: "white",
    height: 55,
    width: 310,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#002C6E',
    padding: 10, 
    textAlign: "center",  
    fontFamily: "Segoe UI", 
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing:5,
  },
  inputLeble:{
    margin:8,
    fontSize:20,
    fontWeight:'700',
    color:'#000000'
  },
  location:{
    marginTop:20,
    fontStyle:'italic',
    textAlign:'center'
  },
  button: {
    marginTop: 30,
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
    fontFamily: 'Segoe UI',
    letterSpacing: 0.25,
    color: 'white',
  },
  location:{
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop:15
  },
  locationText:{
    marginTop:5,
    color:'#002C6E',
    fontStyle: 'italic',
  }
});
export default UselessTextInput;