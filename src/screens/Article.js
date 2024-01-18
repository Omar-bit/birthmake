import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import React from 'react';
import data from '../data';
import { AntDesign } from '@expo/vector-icons';
import { ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';

//import { ResizeMode } from 'expo-av';
//import VideoPlayer from 'expo-video-player';
import { UserContext } from '../../App';
const Article = ({ route, navigation }) => {
  const { lang } = React.useContext(UserContext);
  const [idArticle, setIdArticle] = React.useState([route.params.itemId, 0]);
  const nbrOfArticles = data.length;
  const nbrOfCurrentArticleContents = data[idArticle[0]][lang].content.length;
  function nextArticle() {
    let thisArticle = [idArticle[0], idArticle[1] + 1];
    if (thisArticle[1] > nbrOfCurrentArticleContents - 1) {
      thisArticle = [thisArticle[0] + 1, 0];
    }
    if (thisArticle[0] > nbrOfArticles - 1) {
      thisArticle = [0, 0];
    }
    setIdArticle(thisArticle);
  }
  function previousArticle() {
    let thisArticle = [idArticle[0], idArticle[1] - 1];
    if (thisArticle[1] < 0) {
      thisArticle = [thisArticle[0] - 1, 0];
    }
    if (thisArticle[0] < 0) {
      thisArticle = [
        nbrOfArticles - 1,
        data[nbrOfArticles - 1].content.length - 1,
      ];
    }
    setIdArticle(thisArticle);
  }
  return (
    <>
      <ScrollView>
        <View className='flex-row  items-center justify-start w-full p-5  bg-primary  min-h-[10vh]  rounded-b-lg '>
          <AntDesign
            name='arrowleft'
            size={24}
            color='white'
            onPress={() => navigation.goBack()}
          />
          <Text className='text-lg font-semibold text-[#ffff] mx-auto'>
            {data[idArticle[0]][lang].title}
          </Text>
        </View>
        <ScrollView className='h-[90vh]  p-2 '>
          {data[idArticle[0]].video != false ? (
            <View className='h-[30vh] w-[100%] mx-auto overflow-hidden flex  justify-center items-center rounded-xl  '>
              {/*       <VideoPlayer
                defaultControlsVisible={true}
                slider={true}
                videoProps={{
                  resizeMode: ResizeMode.CONTAIN,
                  shouldPlay: true,
                  source: { uri:  data[idArticle[0]].video},
                }}
              />*/}

              <VideoPlayer
                videoProps={{
                  shouldPlay: true,
                  resizeMode: ResizeMode.CONTAIN,

                  source: {
                    uri: data[idArticle[0]].video,
                  },
                }}
              />
            </View>
          ) : (
            <TouchableOpacity
              className=' bg-primary rounded-md p-5 mx-auto'
              onPress={() => Linking.openURL('https://youtu.be/LbkACPuEKpg')}
            >
              <Text className='font-bold text-lg'>
                faire la visite virtuelle
              </Text>
            </TouchableOpacity>
          )}
          <Text className='text-[16px]'>
            {data[idArticle[0]][lang].content[idArticle[1]]}
          </Text>
        </ScrollView>
        <View className='h-[10vh]  flex-row items-center justify-between px-3 absolute bottom-0 left-0 w-full  z-50'>
          <TouchableOpacity
            className=' bg-primary py-2 px-5 rounded-xl opacity-60'
            onPress={previousArticle}
          >
            <AntDesign name='arrowleft' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity
            className=' bg-primary py-2  px-5 rounded-xl opacity-60'
            onPress={nextArticle}
          >
            <AntDesign name='arrowright' size={24} color='white' />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Article;
