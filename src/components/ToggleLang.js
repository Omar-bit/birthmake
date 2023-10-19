import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { UserContext } from '../../App';
const ToggleLang = () => {
  const { lang, setLang } = React.useContext(UserContext);

  return (
    <View className='rounded-xl bg-text flex-row  items-center p-1 gap-x-1 '>
      <TouchableOpacity
        onPress={() => setLang('ar')}
        className={`w-8 h-8  rounded-full flex justify-center items-center ${
          lang == 'ar' ? 'bg-secondary' : null
        }`}
      >
        <Text className='text-[#fff]'>Ar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setLang('fr')}
        className={`w-8 h-8  rounded-full flex justify-center items-center ${
          lang == 'fr' ? 'bg-secondary' : null
        }`}
      >
        <Text className='text-[#fff]'>Fr</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleLang;
