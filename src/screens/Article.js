import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import data from '../data';
import { AntDesign } from '@expo/vector-icons';
import { ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';
const Article = ({ route, navigation }) => {
  const [idArticle, setIdArticle] = React.useState([route.params.itemId, 0]);
  const nbrOfArticles = data.length;
  const nbrOfCurrentArticleContents = data[idArticle[0]].content.length;
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
            {data[idArticle[0]].title}
          </Text>
        </View>
        <ScrollView className='h-[90vh]  p-2 '>
          {data[idArticle[0]].video ? (
            <View className='h-[30vh] w-[100%] mx-auto overflow-hidden flex  justify-center items-center rounded-xl  '>
              <VideoPlayer
                defaultControlsVisible={true}
                defaultControlsVisible={true}
                slider={true}
                videoProps={{
                  resizeMode: ResizeMode.CONTAIN,
                  shouldPlay: false,
                  // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                  //source: data[idArticle[0]].video,
                  source: {
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                  },
                }}
              />
            </View>
          ) : null}
          <Text className='text-[16px]'>
            {data[idArticle[0]].content[idArticle[1]]}
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
