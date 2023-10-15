import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const CheckBox = ({ questions, setQuestions, id }) => {
  const [isChecked, setIsChecked] = React.useState(questions[id].valid);
  React.useEffect(() => {
    let newQuestions = questions;

    newQuestions = newQuestions.map((question, index) =>
      parseInt(index) == parseInt(id)
        ? { ...question, valid: isChecked }
        : question
    );
    setQuestions(newQuestions);
  }, [isChecked]);
  return (
    <TouchableOpacity
      className='border-2 rounded-md h-6 ml-2 items-center justify-center w-6 '
      onPress={() => setIsChecked((prev) => !prev)}
    >
      {!isChecked && <Entypo name='check' size={24} color='green' />}
    </TouchableOpacity>
  );
};

export default CheckBox;
