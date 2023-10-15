import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import PersonalInfos from '../components/PersonalInfos';
import Guide from '../components/Guide';
import Questionaire from '../components/Questionaire';
import Submitting from '../components/Submitting';
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
      id: 1,
      q: 'je me sentais inquiète',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 2,
      q: 'je me sentais en sécuritée',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 3,
      q: 'je me ressentis bizarres',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 4,
      q: 'je me sentais confiante',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 5,
      q: "L'équipe soignante comprenait et répondait à mes désirs de manière satisfaisante",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 6,
      q: "je me suis sentie soutenue émotionellement par les professionnels qui s'occupaient demoi",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 7,
      q: 'les professionnels me tenaient informée de ce qui se passait',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 8,
      q: "je sentais que je pouvais m'exprimer et donner mon avis à propos",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 9,
      q: 'Je suis satisfaite de la manière dont les événement se sont',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      q: 'Pendant le travail(des premières contractions jusqu’aux premières poussées)',
      type: 'header',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 10,
      q: 'J’ai réussi à utiliser des méthodes de relaxation pour m’aider lors des contractions',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 11,
      q: 'J’ai pu me mouvoir ou choisir librement ma position',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 12,
      q: 'On a pu soulager ma douleur au moment où je l’ai demandé',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 13,
      q: 'Tout s’est déroulé comme je l’avais imaginé',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 14,
      q: 'J’avais l’impression de perdre tous mes moyens',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 15,
      q: 'Mon partenaire n’était pas présent pendant le',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 16,
      q: 'Le soutien de mon partenaire m’a aidé',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      q: 'Sur une échelle de 0 à 10, à quel point avez-vous éprouvé de la douleur ?',
      type: 'header',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 17,
      q: 'Durant le travail :',
      type: 'slider',
      answer: null,
      needValidation: true,
      valid: true,
    },
    {
      id: 18,
      q: "Durent l'accouchement (césarienne ou voie basse)",
      type: 'slider',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 19,
      q: 'Immédiatement aprés la naissance',
      type: 'header',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 20,
      q: "j'ai pu découvriir visuellement mon béé d emanière  satisfaisante",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 21,
      q: "j'eu mon béé contre moi pour  la première fois au moment où  j'en ai eu envie",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 22,
      q: "Les premiers instants avec mon bébé correspondaient à ce que j'avais imaginé avant  d'accoucher",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      q: 'À ce jour',
      type: 'header',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 23,
      q: "j'ai compris que tout ce qui s'est passé lors de mon accouchement",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 24,
      q: 'je suis fière de moi',
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 25,
      q: "j'ai des regrets",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 26,
      q: "j'ai un sentiment d'échec",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 27,
      q: "L'idée d'accoucher une nouvelle fois m'effraie",
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 28,
      q: "Si l'on met de côté les  émossions relatives à l'arrivée de votre bébé, pour vous en tant que femme, votre vécu de l'accouchement a été : ",
      type: 'slider',
      answer: null,
      needValidation: false,
      valid: true,
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
    <Submitting personalInfos={personalInfos} questions={questions} />,
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
