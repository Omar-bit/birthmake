import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Linking,
  ScrollView,
} from 'react-native';
import React from 'react';
import ToggleLang from './../components/ToggleLang';
import { UserContext } from '../../App';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';
const HomeNonAuth = ({ navigation }) => {
  const { lang, setLang } = React.useContext(UserContext);
  const [modalVisible, setModalVisible] = React.useState(false);
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
    <>
      <View className='flex-1 absolute -z-10 w-[100vw] h-[100vh] bg-[#ffff]  justify-center items-center '>
        <Animated.Image
          entering={FadeInRight.duration(800).delay(500)}
          exiting={FadeInUp.duration(800).delay(500)}
          source={require('./../assets/pregnantWoman2.png')}
          className='	w-[100%]  max-h-[65vh] -z-10 self-end '
          style={{ resizeMode: 'stretch', transform: [{ translateY: 0 }] }}
        />
      </View>
      <View className='flex-1 py-7 h-[100vh]   items-center  justify-between    '>
        <View className='w-full flex-col items-center gap-12'>
          <View className='w-full flex-row items-center justify-between px-5'>
            <Image
              source={require('./../assets/stars.png')}
              className=' '
              style={{ resizeMode: 'stretch', width: 95, height: 50 }}
            />
            <ToggleLang />
          </View>
          <Text className='text-text text-2xl font-semibold'>BirthMate</Text>
          <Text className='text-[#9D3284] text-xl z-20 bg-[#d5add524] rounded-xl p-1 '>
            {langData[lang].description}
          </Text>
        </View>
        <View className='w-full flex-col items-center gap-12'>
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
        <TouchableOpacity
          className=' rounded-md  p-2 absolute bottom-1 left-1 '
          onPress={() => setModalVisible(true)}
        >
          <Text className='font-semibold text-sm  text-text text-center'>
            Authors
          </Text>
        </TouchableOpacity>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View className='w-[100vw] h-[50vh] absolute z-10 bottom-0 bg-[#a1429ce9] rounded-t-3xl px-10 py-4'>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className='absolute top-5 right-5'
            >
              <Feather name='x' size={28} color='white' />
            </TouchableOpacity>

            <View className='flex-col   gap-y-4  mt-1 items-start flex-1   '>
              <TouchableOpacity
                className='max-h-[60px]  w-[100%] self-end  mt-auto'
                onPress={() => Linking.openURL('https://innovibe.tech/')}
              >
                <Image
                  source={require('./../assets/innovibe-white.png')}
                  className='   w-[100%]   max-h-[55px]   '
                  style={{ resizeMode: 'stretch' }}
                />
              </TouchableOpacity>
              <Text className='text-secondary text-2xl underline font-bold'>
                BirthMate was made by :
              </Text>

              <TouchableOpacity className='flex-row items-center gap-x-5'>
                <MaterialCommunityIcons
                  name='thought-bubble'
                  size={24}
                  color='#ECDEE7'
                />
                <Text className='text-secondary text-xl font-semibold'>
                  Idea : Dr.Mohamed Rami Ltifi
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className='flex-row items-center gap-x-5'
                onPress={() => Linking.openURL('ahmed@gmail.com')}
              >
                <MaterialIcons
                  name='design-services'
                  size={24}
                  color='#ECDEE7'
                />
                <Text className='text-secondary text-xl font-semibold'>
                  UI/UX Design : Ahmed Soussi
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className='flex-row items-center '
                onPress={() =>
                  Linking.openURL('https://linktr.ee/omar_bouassida')
                }
              >
                <Ionicons name='code-slash' size={24} color='#ECDEE7' />
                <Text className='text-secondary text-xl font-semibold items-center mx-1 '>
                  Developement: Omar Bouassida
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default HomeNonAuth;
