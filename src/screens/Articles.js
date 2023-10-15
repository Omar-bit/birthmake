import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import data from '../data';
import { Ionicons } from '@expo/vector-icons';

const Articles = ({ navigation }) => {
  return (
    <View className='flex-1 '>
      <Image
        source={require('./../assets/canvas.png')}
        className=' absolute w-[80vw] h-[70vh]'
        style={{ resizeMode: 'stretch' }}
      />
      <View className='flex-1'>
        <View className='w-full h-[40vh] bg-[#c38ea7cc] opacity-100 rounded-b-2xl p-5'>
          <View className='w-full'>
            <Ionicons
              name='arrow-back'
              size={24}
              color='white'
              onPress={() => navigation.goBack()}
            />
          </View>
          <Text className='text-[#ffff] font-semibold text-4xl tracking-wider	text-center mt-10'>
            Le Jour J
          </Text>
          <Image
            source={require('./../assets/doctorANDpatient.png')}
            className='w-full max-h-[250px]'
            style={{ resizeMode: 'stretch' }}
          />
        </View>
        <ScrollView className='p-5 mb-3 '>
          {data.map((article) => (
            <TouchableOpacity
              key={article.id}
              className='w-[70%] mx-auto bg-primary p-5 my-1 rounded-lg'
              onPress={() =>
                navigation.navigate('Article', {
                  itemId: article.id,
                })
              }
            >
              <Text className='text-[#ffff] text-lg'>{article.title}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity className='w-[70%] mx-auto  p-5 my-1 rounded-lg'>
            <Text className='text-[#ffff] text-lg'></Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Articles;
