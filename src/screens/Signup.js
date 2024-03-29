import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import NonAuthNav from '../components/NonAuthNav';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { firebaseAuth } from '../config/firebase';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { UserContext } from '../../App';

const Signup = ({ navigation }) => {
  const { lang, setLang } = React.useContext(UserContext);
  const langData = {
    ar: {
      header: 'إنضمي إلينا',
      description: 'أدخلي اسمكي , بريدكي الإلكتروني و كلمة مروركي',
      name: 'الاسم',
      email: 'البريد الالكتروني',
      pwd: 'كلمة السر',
      createAccButton: 'إنشأ حسابي',
    },
    fr: {
      header: 'Rejoignez-nous',
      description: 'Entrez votre nom , e-mail et mot de passe',
      name: 'Nom',
      email: 'Email',
      pwd: 'Mot de passe',
      createAccButton: 'Crée mon compte',
    },
  };
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);
  const auth = firebaseAuth;
  async function signup() {
    //error-valid
    if (!isValidEmail(email) || !email) {
      Toast.show({
        type: 'error',
        text1: 'Echec de connection',
        text2: 'email invalid',
      });
      return;
    }
    if (!password || password.length < 8) {
      Toast.show({
        type: 'error',
        text1: 'Echec de crée votre compte',
        text2: 'le mot de password doit etre composé minimum par 8 caractères',
      });
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      Toast.show({
        type: 'success',
        text1: 'welcome',
        text2: 'votre compte a été crée',
      });
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    } catch (error) {
      console.log('error ' + error);
      Toast.show({
        type: 'error',
        text1: 'Echec de crée votre compte',
        text2: error.message,
      });
    }
  }
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  return (
    <View className='flex-1' style={{ backgroundColor: 'white' }}>
      <NonAuthNav back={navigation.goBack} />
      <View
        className=' mt-20 h-[50vh]   items-center  gap-10     '
        style={{ backgroundColor: 'white' }}
      >
        <View className='justify-center items-center gap-1'>
          <Text className='text-text text-xl '>{langData[lang].header}</Text>
          <Text className='text-[#68B2A0] text-md z-20 '>
            {langData[lang].description}
          </Text>
        </View>

        <View className='w-[60%] items-center gap-7  '>
          <View
            className='  border	 flex-row p-1 items-center gap-2 w-full rounded-xl overflow-hidden'
            style={{
              backgroundColor: 'white',
            }}
          >
            <TextInput
              placeholder={langData[lang].name}
              placeholderTextColor='#aaa'
              value={name}
              onChangeText={(text) => setName(text)}
              className='w-[78%]'
            />
            <View
              className={` ${
                name ? '' : '	 border-2 border-wrongred'
              } rounded-full p-1 bg-primary`}
            >
              {name ? (
                <MaterialIcons name='done' size={22} color='white' />
              ) : (
                <Feather name='x' size={20} color='white' />
              )}
            </View>
          </View>
          <View
            className='  border	 flex-row p-1 items-center gap-2 w-full rounded-xl overflow-hidden'
            style={{
              backgroundColor: 'white',
            }}
          >
            <TextInput
              placeholder={langData[lang].email}
              placeholderTextColor='#aaa'
              value={email}
              onChangeText={(text) => setEmail(text)}
              className='w-[78%]'
            />
            <View
              className={` ${
                isValidEmail(email) ? '' : '	 border-2 border-wrongred'
              } rounded-full p-1 bg-primary`}
            >
              {isValidEmail(email) ? (
                <MaterialIcons name='done' size={22} color='white' />
              ) : (
                <Feather name='x' size={20} color='white' />
              )}
            </View>
          </View>

          <View
            className='border	 flex-row p-1 items-center gap-2 w-full rounded-xl overflow-hidden'
            style={{
              backgroundColor: 'white',
            }}
          >
            <TextInput
              placeholder={langData[lang].pwd}
              secureTextEntry={!isPasswordShown}
              placeholderTextColor='#aaa'
              value={password}
              onChangeText={(text) => setPassword(text)}
              className='w-[78%]'
            />
            <View
              className={` bg-primary
               rounded-full p-1`}
            >
              {!isPasswordShown ? (
                <Ionicons
                  name='md-eye'
                  size={20}
                  color='white'
                  onPress={() => setIsPasswordShown(true)}
                />
              ) : (
                <Ionicons
                  name='md-eye-off'
                  size={20}
                  color='white'
                  onPress={() => setIsPasswordShown(false)}
                />
              )}
            </View>
          </View>

          <TouchableOpacity
            className=' bg-primary w-full py-4 rounded-xl -mt-24 justify-center items-center'
            onPress={signup}
          >
            <Text className=' text-[#ffff] text-md font-bold'>
              {langData[lang].createAccButton}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast />
    </View>
  );
};

export default Signup;
