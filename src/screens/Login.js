import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import NonAuthNav from '../components/NonAuthNav';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { firebaseAuth } from '../config/firebase';
import Toast from 'react-native-toast-message';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../../App';
const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);
  const { user, setUser } = React.useContext(UserContext);

  const auth = firebaseAuth;
  async function login() {
    //error-valid
    if (!isValidEmail(email) || email === '') {
      Toast.show({
        type: 'error',
        text1: 'err de connection',
        text2: 'email invalid',
      });
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      Toast.show({
        type: 'success',
        text1: 'welcome back',
        text2: res,
      });
      setUser(res);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Echec de connection',
        text2: 'email ou mot de passe est incorrect',
      });
    } finally {
      console.log('zebi');
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
        className=' mt-20 h-[50vh]   items-center  gap-14     '
        style={{ backgroundColor: 'white' }}
      >
        <View className='justify-center items-center gap-1'>
          <Text className='text-text text-xl '>Se Connecter</Text>
          <Text className='text-[#68B2A0] text-md z-20 '>
            Entrez votre e-mail et mot de passe
          </Text>
        </View>

        <View className='w-[60%] items-center gap-10  '>
          <View
            className='  border	 flex-row p-1 items-center gap-2 w-full rounded-xl overflow-hidden'
            style={{
              backgroundColor: 'white',
            }}
          >
            <TextInput
              placeholder='Email'
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
              placeholder='Mot de passe'
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
            onPress={login}
          >
            <Text className=' text-[#ffff] text-md font-bold'>
              Se Connecter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast />
    </View>
  );
};

export default Login;
