import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View className='flex-1 items-center justify-center '>
      <View className='w-[100vw] absolute top-[20vh] -translate-y-[50%]  left-0 -z-10 justify-start items-start  p-0 m-0'>
        <Image
          source={require('./../assets/pregnantWomenHomePage2.png')}
          className=' self-start w-[80vw] h-[70vh]'
          style={{ resizeMode: 'stretch' }}
        />
      </View>
      <View className='flex justify-start gap-y-32 items-center h-[75vh]  '>
        <Text className='text-[#9D3284] text-xl font-semibold h-[5vh]'>
          Bienvenue sur BirthMate
        </Text>

        <View className='gap-y-10  items-start h-[10vh]  '>
          <TouchableOpacity
            onPress={() => navigation.navigate('Articles')}
            className='w-[250px] py-3 justify-center items-center bg-primary rounded-md'
          >
            <Text className=' text-[#ffff] text-lg'>Le Jour J </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Evaluation')}
            className='w-[250px] py-3 justify-center items-center bg-primary rounded-md'
          >
            <Text className=' text-[#ffff] text-lg'>Évaluez-nous</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
