import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import PersonalInfos from '../components/PersonalInfos';
import Guide from '../components/Guide';
import Questionaire from '../components/Questionaire';
const Evaluation = ({ navigation }) => {
  const [personalInfos, setPersonalInfos] = React.useState([
    { q: 'age:', answer: 0, type: 'numeric' },
    { q: 'Origine géographique', answer: '' },
    { q: "Niveau d'instruction:", answer: 0, type: 'numeric' },
    { q: 'Situation professionnelle :', answer: '' },
    { q: 'Nombre de grossesses ::', answer: 0, type: 'numeric' },
    { q: 'Evaluation subjective des accouchements précédents :', answer: '' },
    { q: 'Suivi de la grossesse :', answer: '' },
    { q: 'Suivie par : ', answer: '' },
    { q: 'Préparation à l’accouchement : ', answer: '' },
    { q: ' DYSGRAVIDIE :', answer: '' },
    { q: ' DYSGRAVIDIE :', answer: '' },
    {
      q: ` Avez-vous exprimé des demandes ou des souhaits particuliers sur le déroulement de l’accouchement au moment de l’accouchement lui-même ? `,
      answer: '',
    },
    {
      q: ` Avez-vous eu un déclenchement 
pour votre accouchement ? `,
      answer: '',
    },
    {
      q: ` Avez-vous eu des informations 
sur le déclenchement  ?`,
      answer: '',
    },

    {
      q: `Si vous avez eu une péridurale : `,
      answer: '',
      type: 'not',
    },
    {
      q: ` Vous avez accouché ?`,
      answer: '',
    },
    {
      q: ` Au cours de votre 
accouchement, avez-vous le
sentiment que votre intimité
a été respectée :
`,
      answer: '',
    },
    {
      q: ` En cas de césarienne , on vous
a expliqué l’indication?`,
      answer: '',
    },
  ]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [questions, setQuestions] = React.useState([
    {
      q: 'je me sentais inquiète',
      type: 'radio',
      answer: null,
    },
    {
      q: 'je me sentais en sécuritée',
      type: 'radio',
      answer: null,
    },
    {
      q: 'je me ressentis bizarres',
      type: 'radio',
      answer: null,
    },
    {
      q: 'je me sentais confiante',
      type: 'radio',
      answer: null,
    },
    {
      q: "L'équipe soignante comprenait et répondait à mes désirs de manière satisfaisante",
      type: 'radio',
      answer: null,
    },
    {
      q: "je me suis sentie soutenue émotionellement par les professionnels qui s'occupaient demoi",
      type: 'radio',
      answer: null,
    },
    {
      q: 'les professionnels me tenaient informée de ce qui se passait',
      type: 'radio',
      answer: null,
    },
    {
      q: "je sentais que je pouvais m'exprimer et donner mon avis à propos",
      type: 'radio',
      answer: null,
    },
    {
      q: 'Je suis satisfaite de la manière dont les événement se sont',
      type: 'radio',
      answer: null,
    },
  ]);
  const formSteps = [
    <PersonalInfos
      personalInfos={personalInfos}
      setPersonalInfos={setPersonalInfos}
      setCurrentStep={setCurrentStep}
    />,
    <Guide setCurrentStep={setCurrentStep} />,
    <Questionaire
      questions={questions}
      setQuestions={setQuestions}
      setCurrentStep={setCurrentStep}
    />,
    <Text>Submitting data to the DB</Text>,
  ];

  return (
    <View className='flex-1'>
      <View className=' flex-row px-5 justify-start items-center  bg-primary rounded-b-2xl  h-[13vh]'>
        <Ionicons
          name='arrow-back'
          size={24}
          color='white'
          onPress={navigation.goBack}
        />
        <Text className='mx-auto text-xl font-bold text-[#ffffff] tracking-wider'>
          Evaluation
        </Text>
      </View>
      {formSteps[currentStep]}
    </View>
  );
};
export default Evaluation;
