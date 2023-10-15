import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

const Guide = ({ setCurrentStep }) => {
  const [sliderValue, setSliderValue] = React.useState(1);

  const colorsGuide = [
    { color: '#464646', meaning: 'Pas Consernée' },
    { color: '#DE2222', meaning: 'Pas du tout' },
    { color: '#FFAA54', meaning: 'pas tellement' },
    { color: '#EAFB51', meaning: 'En partie' },
    { color: '#8ADC7B', meaning: 'Tout a fait' },
  ];
  const [selectedBull, setSelectedBull] = React.useState(null);

  return (
    <View className='flex-1 flex items-center p-3 gap-3'>
      <Text className='text-xl font-bold'>Comment ca marcher ?</Text>
      <View className='gap-y-[5px]  self-start px-10   w-full'>
        {colorsGuide.map((el, index) => (
          <View
            key={index}
            className='flex flex-row gap-x-3 items-center  p-0 m-0 	'
          >
            <View
              className={`w-6 h-6  rounded-full }`}
              style={{ backgroundColor: el.color }}
            ></View>
            <Text>{el.meaning}</Text>
          </View>
        ))}
        <View className='w-full pt-5 gap-y-1 '>
          <Text className='font-semibold text-lg'>Example:</Text>
          <View classname='w-[100%] flex flex-row items-center justify-around   '>
            <Text className='font-semibold text-md'>Question :</Text>
            <View className=''>
              <View className='flex flex-row items-center gap-x-1'>
                {colorsGuide.map((color, index) => (
                  <TouchableOpacity
                    key={color.color}
                    className={`w-4 h-4 rounded-full ${
                      index == selectedBull ? 'border-2' : ''
                    }`}
                    style={{ backgroundColor: color.color }}
                    onPress={() => setSelectedBull(index)}
                  ></TouchableOpacity>
                ))}
              </View>
              <Text className='text-sm text-[#777] '>
                Vous choisissez votre répense
              </Text>
            </View>
          </View>
        </View>

        <View className=' pt-10'>
          <Text className='text-center text-lg font-semibold'>
            Question à réponse par échelle
          </Text>
          <Text className='text-center text-md text-[#777]'>
            Faites glisser le point vert
          </Text>
          <View className=' w-full  mt-10'>
            <Text className=''>l'échelle de 1 à 10 :</Text>
            <View className='w-full   '>
              <Slider
                style={{
                  width: '100%',
                  height: 40,
                }}
                minimumValue={1}
                maximumValue={10}
                minimumTrackTintColor='#FE9DCF'
                maximumTrackTintColor='#FE9DCF'
                step={1}
                value={sliderValue}
                onValueChange={(value) => setSliderValue(value)}
              />
              <View className='sliderIndicator absolute px-[14%] h-2 w-[100%] top-4 -z-10  flex flex-row items-center justify-between'>
                <View className='h-[15px] w-[3px] bg-primary'></View>
                <View className='h-[15px] w-[3px] bg-primary'></View>
                <View className='h-[15px] w-[3px] bg-primary'></View>
                <View className='h-[15px] w-[3px] bg-primary'></View>
                <View className='h-[15px] w-[3px] bg-primary'></View>
                <View className='h-[15px] w-[3px] bg-primary'></View>
                <View className='h-[15px] w-[3px] bg-primary'></View>

                <View className='h-[15px] w-[3px] bg-primary'></View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className=' w-full flex flex-row items-center justify-end absolute bottom-3 right-3 '>
        <TouchableOpacity
          className='py-2 px-5 rounded-md bg-primary  '
          onPress={() => setCurrentStep((prev) => prev + 1)}
        >
          <Text className='text-md font-semibold text-[#ffffff]'>
            Commencer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Guide;
