import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Radio = ({ questions, setQuestions, id }) => {
  const colorsGuide = [
    { color: '#464646', meaning: 'Pas Consernée' },
    { color: '#DE2222', meaning: 'Pas du tout' },
    { color: '#FFAA54', meaning: 'pas tellement' },
    { color: '#EAFB51', meaning: 'En partie' },
    { color: '#8ADC7B', meaning: 'Tout a fait' },
  ];
  const [selectedBull, setSelectedBull] = React.useState(null);
  React.useEffect(() => {
    setQuestions((prev) =>
      prev.map((question, i) =>
        i == id ? { ...question, answer: selectedBull } : question
      )
    );
  }, [selectedBull]);
  return (
    <View className='flex flex-row items-center gap-7'>
      {colorsGuide.map((color, index) => (
        <TouchableOpacity
          key={index}
          className={`w-6 h-6  rounded-full ${
            index == selectedBull ? 'border-2' : ''
          }`}
          style={{ backgroundColor: color.color }}
          onPress={() => setSelectedBull(index)}
        ></TouchableOpacity>
      ))}
    </View>
  );
};

export default Radio;
