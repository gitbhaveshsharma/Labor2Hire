import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
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

const data = [
  { label: 'Electrician', value: '1' },
  { label: 'Plumber', value: '2' },
  { label: 'Gardener', value: '3' },
  { label: 'Construction Worker', value: '4' },
  { label: 'Painter', value: '5' },
  { label: 'Welder', value: '6' },
  { label: 'Automotive technician', value: '7' },
  { label: 'Carpenter', value: '8' },
];

const DropdownComponent = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const {t} = useTranslation();
  const onPress = () => {
     navigation.navigate('ProviderWorker');
  };
  const renderLabel = () => {
    if (value || isFocus) {
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.lalala}>{t('common:whatKindOfWorkerYoulook')}</Text>
      <View style={styles.Wbox}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Options':'Selecting...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <Pressable style={[styles.button, styles.shadowProp]} onPress={onPress}>
          <Text style={styles.text}>{t('common:next')}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:'#00000'
  },
  dropdown: {
    height: 60,
    width: 300,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#002C6E',
    color:'Black',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 20,
    color:'#000000',
    textAlign:'center',
    fontWeight: '800',
    letterSpacing:5,
  },
  iconStyle:{
  },
  selectedTextStyle: {
    fontSize: 20,
    color:'blue',
    fontWeight:'bold',
    textAlign:'center',
    letterSpacing:2,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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

  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: { width: 20, height: 40 },
    shadowOpacity: 0.2,
    elevation: 10,
    shadowRadius: 10,
  },
  lalala: {
    marginBottom: -65,
    fontSize: 23,
    fontWeight: '700',
    color: '#000000',
    textAlign:'center'
  },
  Wbox:{
    margin:70,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
