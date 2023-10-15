import Slider from '@react-native-community/slider';
import { View, Text } from 'react-native';
import React from 'react';

const SliderC = ({ questions, setQuestions, id }) => {
  const [sliderValue, setSliderValue] = React.useState(1);
  React.useEffect(() => {
    setQuestions((prev) =>
      prev.map((question, i) =>
        i == id ? { ...question, answer: sliderValue } : question
      )
    );
  }, [sliderValue]);

  return (
    <View className='w-full h-10  '>
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
      <View className='sliderIndicator absolute  px-[5%] -top-1  w-[100%]  -z-10  flex flex-row items-center justify-between'>
        <Text className=''>1</Text>
        <Text className=''>2</Text>
        <Text className=''>3</Text>
        <Text className=''>4</Text>
        <Text className=''>5</Text>
        <Text className=''>6</Text>
        <Text className=''>7</Text>
        <Text className=''>8</Text>
        <Text className=''>9</Text>
        <Text className=''>10</Text>
      </View>
    </View>
  );
};

export default SliderC;
