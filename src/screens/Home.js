import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { UserContext } from '../../App';
import ToggleLang from '../components/ToggleLang';
const Home = ({ navigation }) => {
  const { user, setUser } = React.useContext(UserContext);

  return (
    <>
      <View className='flex-row w-full px-1 py-7   items-center justify-around  '>
        <Text className='font-bold text-lg text-text'>
          {user._tokenResponse.displayName}
        </Text>
        <TouchableOpacity
          className='border border-wrongred rounded-md py-2 px-5'
          onPress={() => setUser(null)}
        >
          <Text className='text-wrongred  font-semibold '>Sign out</Text>
        </TouchableOpacity>
        <ToggleLang />
      </View>

      <View className='flex-1 items-center justify-center '>
        <View className='w-[100vw] absolute top-[20vh] -translate-y-[50%]  left-0 -z-10 justify-start items-start  p-0 m-0'>
          <Image
            source={require('./../assets/pregnantWomenHomePage2.png')}
            className=' self-start w-[80vw] h-[70vh]'
            style={{ resizeMode: 'stretch' }}
          />
        </View>
        <View className='flex justify-start gap-y-32 items-center h-[75vh]  '>
          <Text className='text-[#9D3284] text-xl font-semibold h-[5vh]'>
            Bienvenue sur BirthMate
          </Text>

          <View className='gap-y-10  items-start h-[10vh]  '>
            <TouchableOpacity
              onPress={() => navigation.navigate('Articles')}
              className='w-[250px] py-3 h-12 justify-center items-center bg-primary rounded-md'
            >
              <Text className=' text-[#ffff] text-lg'>Le Jour J </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Evaluation')}
              className='w-[250px] py-3 h-12 justify-center items-center bg-primary rounded-md'
            >
              <Text className=' text-[#ffff] text-lg'>Évaluez-nous</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
