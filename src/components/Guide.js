import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { UserContext } from '../../App';
const Guide = ({ setCurrentStep }) => {
  const { lang } = React.useContext(UserContext);
  const langData = {
    ar: {
      howItWorks: 'كيف تعمل?',
      example: 'مثال',
      question: 'سؤال',
      exampleDescription: 'إختر إجابتكي',
      slideQ: 'السؤال  يجاب عليه حسب المقياس ',
      slideQDesc: 'اسحبي النقطة',
      slideLable: 'المقياس من 1 إلى 10 ',
      startButton: 'إبدإي',
    },
    fr: {
      howItWorks: 'Comment Ca Marche?',
      example: 'example',
      question: 'question',
      exampleDescription: 'Vous choisissez votre reponse',
      slideQ: 'Question à réponse par échelle',
      slideQDesc: 'Faire glisser le point',
      slideLable: "l'échelle de 1 á 10",
      startButton: 'Commencer',
    },
  };

  const [sliderValue, setSliderValue] = React.useState(1);

  const colorsGuide = [
    {
      color: '#464646',
      fr: { meaning: 'Pas Consernée' },
      ar: { meaning: 'لست معنية' },
    },
    {
      color: '#DE2222',
      fr: { meaning: 'Pas Consernée' },
      ar: { meaning: 'لا على الإطلاق' },
    },
    {
      color: '#FFAA54',
      ar: { meaning: 'ليس تماما' },
      fr: { meaning: 'pas tellement' },
    },
    {
      color: '#EAFB51',
      ar: { meaning: 'قليلا' },
      fr: { meaning: 'En partie' },
    },
    {
      color: '#8ADC7B',
      ar: { meaning: 'تماما' },
      fr: { meaning: 'Tout a fait' },
    },
  ];
  const [selectedBull, setSelectedBull] = React.useState(null);

  return (
    <View className='flex-1 flex items-center p-3 gap-3'>
      <Text className='text-xl font-bold'>{langData[lang].howItWorks}</Text>
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
            <Text>{el[lang].meaning}</Text>
          </View>
        ))}
        <View className='w-full pt-5 gap-y-1 '>
          <Text className='font-semibold text-lg'>
            {langData[lang].example}
          </Text>
          <View classname='w-[100%] flex flex-row items-end justify-around   '>
            <Text className='font-semibold text-md'>
              {langData[lang].question}
            </Text>
            <View className=''>
              <View className='flex flex-row items-end  gap-x-1'>
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
                {langData[lang].exampleDescription}
              </Text>
            </View>
          </View>
        </View>

        <View className=' pt-10'>
          <Text className='text-center text-lg font-semibold'>
            {langData[lang].slideQ}
          </Text>
          <Text className='text-center text-md text-[#777]'>
            {langData[lang].slideQDesc}
          </Text>
          <View className=' w-full  mt-10'>
            <Text className=''> {langData[lang].slideLable}:</Text>
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
            {langData[lang].startButton}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Guide;
