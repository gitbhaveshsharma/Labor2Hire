import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';

type AvatarData = {
image_url: string;
};

const dataList: AvatarData[] = [
{
  image_url: 'https://randomuser.me/api/portraits/men/36.jpg',
},
];

type AvatarComponentProps = {};

Array.prototype.chunk = function ( n ) {
  if ( !this.length ) {
      return [];
  }
  return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
};

const Profile: React.FunctionComponent<AvatarComponentProps> = () => {
return (
  <>
    <ScrollView>
      {dataList.chunk(3).map((chunk, chunkIndex) => (
        <View  style={styles.avatar}
          key={chunkIndex}
        >
          {chunk.map((l, i) => (
            <Avatar
           
              size={140}
              rounded
              
              source={l.image_url ? { uri: l.image_url } : {}}
              key={`${chunkIndex}-${i}`}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
avatar:{
    flex:1,
    alignItems:'center',
    marginLeft:100,
    width:145,
  borderWidth:2,
  borderRadius:100,
  borderStyle: 'dashed',
  borderColor:'#002C6E'
}
})

export default Profile;