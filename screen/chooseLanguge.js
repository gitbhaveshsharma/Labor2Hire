import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { useTranslation } from "react-i18next";
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "हिन्दी" },
];
const Selector = ({navigation}) => {
  const { t, i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;
const setLanguage = (code) => {
   navigation.navigate('Mobile');
    return i18n.changeLanguage(code);
  };
return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('common:Hey')}</Text>
      <Text style={[styles.title, styles.title2]}>{t('common:languageSelector')}</Text>
      {LANGUAGES.map((language) => {
        const selectedLanguage = language.code === selectedLanguageCode;
return (  <>
          <Pressable
            key={language.code}
            style={styles.bigblue}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}
          >
            <Text
              style={[selectedLanguage ? styles.selectedText : styles.text]}
            >
              {language.label}
            </Text>
          </Pressable>
          
          </>
        );
      })}
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
export default Selector;