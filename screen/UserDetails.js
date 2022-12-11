import React from "react";
import { useTranslation } from "react-i18next";
import 'react-native-gesture-handler';
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
  const [user, setUserData] = React.useState({ name: '', username:'',password:'',confirmpassword:''});
    const {t} = useTranslation();
  const onPress = () => {
     navigation.navigate('Dashboard');
  };
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Alternative Login Details</Text>
    <View>
      <Text style={styles.inputLeble}>{t('common:email')}</Text>
      <TextInput
        style={styles.input}
         onChangeText={(text) => setUserData({...user, name: text })}
         value={user.name}
        placeholder=""
      />
      <Text style={styles.inputLeble}>{t('common:userName')}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUserData({...user, username: text })}
         value={user.username}
        placeholder=""
      />
      <Text style={styles.inputLeble}>{t('common:password')}</Text>
      <TextInput
      secureTextEntry={true}
      textContentType={'password'}
        style={styles.input}
        onChangeText={(text) => setUserData({...user, password: text })}
         value={user.password}
        placeholder=""
      />
      <Text style={styles.inputLeble}>{t('common:confirmPassword')}</Text>
      <TextInput
      secureTextEntry={true}
      textContentType={'password'}
        style={styles.input}
        onChangeText={(text) => setUserData({...user, confirmpassword: text })}
         value={user.confirmpassword}
        placeholder=""
      />
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
    height: 100,
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
});
export default UselessTextInput;