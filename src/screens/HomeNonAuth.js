import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ToggleLang from './../components/ToggleLang';
import { UserContext } from '../../App';
const HomeNonAuth = ({ navigation }) => {
  const { lang, setLang } = React.useContext(UserContext);
  const langData = {
    ar: {
      description: 'رحلتك إلى الأمومة',
      signUpButton: 'إبدأ',
      signInText: 'لديكي حساب بالفعل ؟',
      signInButton: 'تسجيل الدخول',
    },
    fr: {
      description: 'Votre parcours vers la maternité',
      signUpButton: 'Commencer',
      signInText: 'Vous avez deja un compte ?',
      signInButton: 'se connecter',
    },
  };
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
        {langData[lang].description}
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
        <Text className=' text-[#ffff] text-md font-bold'>
          {langData[lang].signUpButton}
        </Text>
      </TouchableOpacity>
      <Text className='text-[#68B2A0] text-md'>
        {langData[lang].signInText}
        <Text
          className='text-text px-2'
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          {langData[lang].signInButton}
        </Text>
      </Text>
    </View>
  );
};

export default HomeNonAuth;
