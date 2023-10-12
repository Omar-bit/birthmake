import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
const NonAuthNav = ({ back }) => {
  return (
    <View
      className=' flex-row items-center p-5  h-[22vh]'
      style={{ backgroundColor: 'white' }}
    >
      <Ionicons name='arrow-back' size={24} color='black' onPress={back} />
      <Image
        source={require('./../assets/stars.png')}
        className='mx-auto -translate-x-[24px]'
        style={{ resizeMode: 'stretch', transform: [{ scale: 0.7 }] }}
      />
    </View>
  );
};

export default NonAuthNav;
