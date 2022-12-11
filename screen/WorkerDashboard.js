import React, { useState } from 'react';
import CheckBox from './components/CheckBox';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context'; 
import { Card } from 'react-native-paper';
import ProfileImage from './components/ProfileImage'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TextInput, 
  View,
  Text,
  Pressable,
  navigation,       
} from 'react-native';

const Dashboard = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const onPress = () => {
   navigation.navigate('UserDetails');

  };
  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.profile}>
          <ProfileImage/>
          <View style={styles.profileDetalis}>
            <Text style={styles.profileText}>Rana jee</Text>
            <Text style={styles.profilesubText}>I am a carpenter.</Text>
            <Pressable style={[styles.button, styles.shadowProp]} onPress={onPress}>
        <Text style={styles.texthire}>Call me</Text>
      </Pressable>
          </View>

        </View>
            <View style={styles.box1}>
              <Card style={styles.Card}>
              <Text style={styles.text}>Work</Text>
              <Text style={styles.subcardtext}>500</Text>
              </Card>
              <View style={styles.hairline}></View>
              <Card style={styles.Card}>
              <Text style={styles.text}>Rated</Text>
              <Text style={styles.subcardtext} >4.5/5</Text>
              </Card>
            </View>
             <ScrollView style={styles.ScrollView}>
            <View style={styles.box2}>
              <Card style={styles.Card2}>
              <Text style={styles.card2text}>Gallry</Text>
              <Text style={styles.subtext}>Work Images</Text>
              </Card>
              <Card style={styles.Card2}>
              <Text style={styles.card2text}>Payment Method</Text>
              <Text style={styles.subtext}>Different Payment Method</Text>
              </Card>
              <Card style={styles.Card2}>
              <Text style={styles.card2text}>Address</Text>
              <Text style={styles.subtext}>Current address</Text>
              </Card>
            </View>
            </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
 
  box1:{
    marginTop:-15,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    padding:10,
  },
ScrollView:{
  height:150
},
  hairline: {
  backgroundColor: '#A2A2A2',
  marginTop:15,
  height: 90,
  width:2
},
text:{
fontSize:18,
textAlign:'center',
color:'#000000',
fontWeight:'350',
lineHeight:25
},
subcardtext:{
fontSize:15,
color:'#000000',
textAlign:'center',
fontWeight:'700',
lineHeight:25
},
  Card:{
    padding:35,
    alignItems:'center',
    width:160,
    height:120,
    borderRadius:10,
    backgroundColor:'#E6F7FF'
  },
  box2:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',  
  },
  Card2:{
    margin:8,
    height:115,
    width:350,
    backgroundColor:'#E6F7FF'
  },
  card2text:{
    fontSize:20,
    paddingLeft:25,
    paddingTop:10,
    color:'#000000',
    fontWeight:'700'
  },
  subtext:{
    paddingLeft:25,
    lineHeight:15,
    color:'#000000',
  },
  profile: {
    margin: 24,
  },
  profileDetalis:{
    alignItems:'center',
  },
  profileText:{
    fontSize:20,
    fontWeight:'700',
    color:'#002C6E',
    letterSpacing:1
  },
  profilesubText:{
 fontSize:11,
    fontWeight:'500',
    color:'#002C6E',
    letterSpacing:1
  },
   button: {
    margin:5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 44,
    width: 300,
    backgroundColor: '#002C6E',
  },
  texthire: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Segoe UI',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default Dashboard;
