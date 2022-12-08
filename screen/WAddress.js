import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  onPress,
  View,
  Button,
} from 'react-native';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Current Address</Text>
    <View>
      <Text style={styles.inputLeble}>Pin code</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.inputLeble}>City</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.inputLeble}>State</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.inputLeble}>Country</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.location}>click for location</Text>
    </View>
      <Pressable style={[styles.button, styles.shadowProp]} onPress={onPress}>
        <Text style={styles.text}>Next</Text>
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
    fontSize:30,
    marginBottom:30,
    fontWeight:'700',
    color:'#000000',
  },
  input: {
    backgroundColor: "white",
    height: 55,
    width: 310,
    borderWidth: 2,
    borderRadius: 10,
    bborderColor: '#002C6E',
    padding: 10, 
    textAlign: "center",  
    fontFamily: "Segoe UI", 
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing:5,
  },
  inputLeble:{
    margin:5,
    fontSize:20,
    fontWeight:'700',
    color:'#000000'
  },
  location:{
    marginTop:20,
    fontStyle:'italic',
    textAlign:'center',
    color:'#002C6E'
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
