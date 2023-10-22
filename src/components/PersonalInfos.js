import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { UserContext } from '../../App';
const PersonalInfos = ({ personalInfos, setPersonalInfos, setCurrentStep }) => {
  const { lang } = React.useContext(UserContext);
  const langData = {
    ar: { header: 'أجبي على الأسئلة التالية', nextButtonText: 'التالي' },
    fr: { header: 'Répodez au questions suivants', nextButtonText: 'suivant' },
  };
  function modifyPersonal(i, val) {
    const newPersonalInfos = personalInfos.map((el, index) =>
      i != index
        ? el
        : { ...el, answer: el.type == 'numeric' ? parseInt(val || 0) : val }
    );
    setPersonalInfos(newPersonalInfos);
  }
  return (
    <View className='flex-1 bg-[#ffff] flex flex-col gap-3 items-center p-3 '>
      <Text className='text-xl font-semibold'>{langData[lang].header}</Text>
      <ScrollView className='flex-1 w-full flex flex-col  gap-3   '>
        {personalInfos.map((question, index) =>
          question.type === 'not' ? (
            <Text className='text-lg font-bold pt-5 ' key={index}>
              {question[lang].q}
            </Text>
          ) : (
            <View
              key={index}
              className='  w-[80%] mx-auto flex flex-col gap-y-2'
            >
              <Text className='text-lg'>{question[lang].q}</Text>
              <TextInput
                className='px-1 py-2 bg-[#eeeeeeee] border rounded-xl '
                value={
                  String(question.answer) != 'NaN'
                    ? String(question.answer)
                    : ''
                }
                onChangeText={(text) => modifyPersonal(index, text)}
                keyboardType={question.type ? 'numeric' : 'default'}
              />
            </View>
          )
        )}
      </ScrollView>
      <View className='flex flex-row w-[100vw] h-[5vh] justify-end  absolute  bottom-0 pb-1'>
        <TouchableOpacity
          className='py-2  px-4 rounded-md opacity-90 bg-primary'
          onPress={() => setCurrentStep((prev) => prev + 1)}
        >
          <Text className='text-[#fff] font-bold'>
            {langData[lang].nextButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalInfos;
