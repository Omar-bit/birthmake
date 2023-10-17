import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ToggleLang from './../components/ToggleLang';

const HomeNonAuth = ({ navigation }) => {
  return (
    <View className='flex-1 py-5 h-[100vh]   items-center  justify-around bg-[#ffff]   '>
      <View className='w-full flex-row items-center justify-between px-5'>
        <Image
          source={require('./../assets/stars.png')}
          className=' '
          style={{ resizeMode: 'stretch', width: 95, height: 50 }}
        />
        <ToggleLang />
      </View>
      <Text className='text-text text-2xl font-semibold'>BirthMate</Text>
      <Text className='text-[#9D3284] text-xl z-20 '>
        Votre parcours vers la maternité
      </Text>
      <Image
        source={require('./../assets/pregnantWoman2.png')}
        className='	w-[90%]  min-h-[400px] h-[55vh] -translate-y-20 z-10 self-end'
        style={{ resizeMode: 'stretch' }}
      />
      <TouchableOpacity
        className=' bg-primary w-[70%] py-4 rounded-md -mt-24 justify-center items-center'
        onPress={() => {
          navigation.navigate('Signup');
        }}
      >
        <Text className=' text-[#ffff] text-md font-bold'>Commencer</Text>
      </TouchableOpacity>
      <Text className='text-[#68B2A0] text-md'>
        Vous avez deja un compte ?{' '}
        <Text
          className='text-text'
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          se connecter
        </Text>
      </Text>
    </View>
  );
};

export default HomeNonAuth;
