import { View, Text } from 'react-native';
import React from 'react';
import data from '../data';
const Articles = () => {
  const articles = new Set(data.map((article) => article.title));
  return (
    <View>
      {articles.map((article, index) => (
        <Text> {article} </Text>
      ))}
    </View>
  );
};

export default Articles;
