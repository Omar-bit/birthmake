import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Radio from './Radio';
const Questionaire = ({ questions, setQuestions, setCurrentStep }) => {
  return (
    <View className='flex-1 flex flex-col items-center w-full p-1'>
      <ScrollView className='w-[80%] gap-5'>
        {questions.map((question, index) => (
          <View className=' flex flex-col items-center gap-4  '>
            <Text className='text-lg pb-2 text-center'>
              {index + 1}) {question.q}
            </Text>

            {question.type === 'radio' ? (
              <Radio
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
