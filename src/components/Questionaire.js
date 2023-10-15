import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Radio from './Radio';
import SliderC from './SliderC';
import CheckBox from './CheckBox';
const Questionaire = ({ questions, setQuestions, setCurrentStep }) => {
  return (
    <View className='flex-1 flex flex-col items-center w-full p-1'>
      <ScrollView className='w-[80%] gap-5'>
        {questions.map((question, index) => (
          <View key={index} className=' flex flex-col items-center gap-4  '>
            {question.type != 'header' && (
              <View className='w-full  justify-center items-center gap-x-10'>
                <Text className='text-lg pb-2 text-center'>
                  {question.id}) {question.q}
                </Text>
                {question.needValidation == true && (
                  <View className='w-full flex-row  items-center justify-center'>
                    <Text className='fonst  text-[#8888]'>Pas Concerné</Text>
                    <CheckBox
                      questions={questions}
                      setQuestions={setQuestions}
                      id={index}
                    />
                  </View>
                )}
              </View>
            )}
            {question.type == 'header' && (
              <Text className='text-xl font-bold underline pb-2 text-center'>
                {question.q}
              </Text>
            )}

            {question.type === 'radio' ? (
              <Radio
                questions={questions}
                setQuestions={setQuestions}
                id={index}
              />
            ) : question.type == 'slider' ? (
              <SliderC
                questions={questions}
                setQuestions={setQuestions}
                id={index}
              />
            ) : null}
          </View>
        ))}
        <View className='w-full h-10'></View>
        <TouchableOpacity
          className='py-2 px-5 self-end rounded-md bg-primary'
          onPress={() => setCurrentStep((prev) => prev + 1)}
        >
          <Text className=' text-[#ffff] text-lg font-semibold '>Terminer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Questionaire;
