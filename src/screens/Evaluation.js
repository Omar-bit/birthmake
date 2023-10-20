import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import PersonalInfos from '../components/PersonalInfos';
import Guide from '../components/Guide';
import Questionaire from '../components/Questionaire';
import Submitting from '../components/Submitting';
import { UserContext } from '../../App';
const Evaluation = ({ navigation }) => {
  const { lang } = React.useContext(UserContext);
  const langData = {
    ar: { header: 'التقييم', footer: 'أجبي على الأسئلة التالية' },
    fr: { header: 'Evaluation', footer: 'Répodez au questions suivants' },
  };
  const [personalInfos, setPersonalInfos] = React.useState([
    { ar: { q: 'العمر' }, fr: { q: 'Age' }, answer: 0, type: 'numeric' },
    {
      ar: { q: 'المنشأ الجغرافي' },
      fr: { q: 'Origine géographique' },
      answer: '',
    },
    {
      ar: { q: 'المستوى التعليمي' },
      fr: { q: "Niveau d'instruction" },

      answer: 0,
      type: 'numeric',
    },
    {
      ar: { q: 'الوضع الوظيفي' },
      fr: { q: 'Situation professionnelle' },
      answer: '',
    },
    {
      ar: { q: 'عدد الحمل وعدد الأطفال الأحياء وعدد الإجهاضات' },
      fr: { q: 'Nombre de grossesses' },
      answer: 0,
      type: 'numeric',
    },
    {
      ar: { q: 'التقييم الشخصي لولادات سابقة: تجربة إيجابية تجربة سلبية' },
      fr: { q: 'Evaluation subjective des accouchements précédents' },
      answer: '',
    },
    {
      ar: { q: 'متابعة الحمل' },
      fr: { q: 'Suivi de la grossesse' },
      answer: '',
    },
    { ar: { q: 'المتابعة بواسطة' }, fr: { q: 'Suivie par' }, answer: '' },
    {
      ar: { q: 'التحضير للولادة' },
      fr: { q: 'Préparation à l’accouchement' },
      answer: '',
    },
    { ar: { q: 'تضاعف حمل' }, fr: { q: 'DYSGRAVIDIE' }, answer: '' },
    {
      ar: {
        q: 'هل قدمتي طلبات أو أماني خاصة بخصوص سير الولادة عند الولادة نفسها؟',
      },
      fr: {
        q: 'Avez-vous exprimé des demandes ou des souhaits particuliers sur le déroulement de l’accouchement au moment de l’accouchement lui-même ?',
      },

      answer: '',
    },
    {
      ar: {
        q: 'هل تم تحفيز ولادتك',
      },
      fr: { q: 'Avez-vous eu un déclenchement pour votre accouchement ?' },
      answer: '',
    },
    {
      ar: { q: 'هل تلقيتي معلومات حول التحفيز' },
      fr: { q: 'Avez-vous eu des informations sur le déclenchement  ?' },
      answer: '',
    },
    {
      ar: { q: 'هل تلقيتي معلومات حول التخدير النصفي' },
      fr: { q: 'Avez-vous eu des informations  concernant la péridurale ?' },
      answer: '',
    },

    {
      ar: { q: 'في حالة أنكي سمعتي عن التخدير النصفي:' },
      fr: { q: 'Si vous avez eu une péridurale' },
      answer: '',
      type: 'not',
    },
    { ar: { q: 'هل أنجبت؟' }, fr: { q: 'Vous avez accouché ?' }, answer: '' },
    {
      ar: { q: 'أثناء الولادة، هل تشعرين أنه تم احترام خصوصيتك؟' },
      fr: {
        q: 'Au cours de votre accouchement, avez-vous le sentiment que votre intimité a été respectée',
      },

      answer: '',
    },
    {
      ar: { q: 'إذا تمت عملية قيصرية، هل تم شرح السبب لك' },
      fr: { q: 'En cas de césarienne , on vous a expliqué l’indication?' },

      answer: '',
    },
  ]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [questions, setQuestions] = React.useState([
    {
      id: 1,
      fr: { q: 'je me sentais inquiète' },
      ar: { q: 'كان لدي انفعالات قلق ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 2,
      fr: { q: 'je me sentais en sécuritée' },
      ar: { q: 'كنت مشعرة بالأمان ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 3,
      fr: { q: 'je me ressentis bizarres' },
      ar: { q: 'شعرت بأحاسيس غريبة ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 4,
      fr: { q: 'je me sentais confiante' },
      ar: { q: 'كنت مشعرة بالثقة ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 5,
      fr: {
        q: "L'équipe soignante comprenait et répondait à mes désirs de manière satisfaisante",
      },
      ar: {
        q: 'فهم الفريق الطبي مطالبي واستجاب لها بشكل مرضٍ',
      },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 6,
      fr: {
        q: "je me suis sentie soutenue émotionellement par les professionnels qui s'occupaient demoi",
      },
      ar: {
        q: 'شعرت بالدعم العاطفي من قبل المحترفين الذين كانوا يعتنون بي',
      },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 7,
      fr: { q: 'les professionnels me tenaient informée de ce qui se passait' },
      ar: { q: 'قام المحترفون بإبقائي على دراية بما كان يجري' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 8,
      fr: {
        q: "je sentais que je pouvais m'exprimer et donner mon avis à propos",
      },
      ar: {
        q: 'شعرت أنه بإمكاني التعبير والتعبير عن آرائي حول الأمور',
      },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 9,
      fr: { q: 'Je suis satisfaite de la manière dont les événement se sont' },
      ar: { q: 'أنا راضية عن كيفية تطور الأمور' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      fr: {
        q: 'Pendant le travail(des premières contractions jusqu’aux premières poussées)',
      },
      ar: {
        q: 'أثناء المخاض (من الانقباضات الأولى إلى الدفعات الأولى)',
      },
      type: 'header',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 10,
      fr: {
        q: 'J’ai réussi à utiliser des méthodes de relaxation pour m’aider lors des contractions',
      },
      ar: {
        q: 'استخدام أساليب الاسترخاء للمساعدة خلال التقلصات',
      },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 11,
      fr: { q: 'J’ai pu me mouvoir ou choisir librement ma position' },
      ar: { q: 'كنت قادرة على التحرك أو اختيار وضعي بحرية' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 12,
      fr: { q: 'On a pu soulager ma douleur au moment où je l’ai demandé' },
      ar: { q: 'تم تخفيف آلامي عندما طلبت ذلك' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 13,
      fr: { q: 'Tout s’est déroulé comme je l’avais imaginé' },
      ar: { q: 'كل شيء جرى كما تخيلته ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 14,
      fr: { q: 'J’avais l’impression de perdre tous mes moyens' },
      ar: { q: 'شعرت بأنني فقدت قدرتي على السيطرة' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 15,
      fr: { q: 'Mon partenaire n’était pas présent pendant le' },
      ar: { q: 'شريكي لم يكن حاضرًا أثناء  ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 16,
      fr: { q: 'Le soutien de mon partenaire m’a aidé' },
      ar: { q: 'دعم شريكي ساعدني ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      fr: {
        q: 'Sur une échelle de 0 à 10, à quel point avez-vous éprouvé de la douleur ?',
      },
      ar: {
        q: 'على مقياس من 0 إلى 10، ما مقدار الألم الذي شعرت به؟',
      },
      type: 'header',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 17,
      fr: { q: 'Durant le travail :' },
      ar: { q: 'أثناء العمل' },
      type: 'slider',
      answer: null,
      needValidation: true,
      valid: true,
    },
    {
      id: 18,
      fr: { q: "Durant l'accouchement (césarienne ou voie basse)" },
      ar: { q: 'أثناء الولادة (الولادة القيصرية أو الولادة المهبلية)' },

      type: 'slider',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 19,
      fr: { q: 'Immédiatement aprés la naissance' },
      ar: { q: 'مباشرة بعد الولادة' },
      type: 'header',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 20,
      fr: {
        q: "j'ai pu découvrir visuellement mon bébé de manière  satisfaisante",
      },
      ar: {
        q: 'تمكنت من رؤية طفلي بشكل مرض للغاية',
      },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 21,
      fr: {
        q: "j'eu mon béé contre moi pour  la première fois au moment où  j'en ai eu envie",
      },
      ar: {
        q: 'حضنت طفلي للمرة الأولى عندما أردت ذلك',
      },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 22,
      fr: {
        q: "Les premiers instants avec mon bébé correspondaient à ce que j'avais imaginé avant  d'accoucher",
      },
      ar: {
        q: 'اللحظات الأولى مع طفلي كانت تمامًا كما توقعتها قبل الولادة',
      },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      fr: { q: 'À ce jour' },
      ar: { q: 'في الوقت الحاضر' },
      type: 'header',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 23,
      fr: {
        q: "j'ai compris que tout ce qui s'est passé lors de mon accouchement",
      },
      ar: {
        q: 'لقد فهمت كل ما حدث خلال ',
      },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 24,
      fr: { q: 'je suis fière de moi' },
      ar: { q: 'أشعر بالفخر بنفسي ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 25,
      fr: { q: "j'ai des regrets" },
      ar: { q: 'لدي أندماجات ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 26,
      fr: { q: "j'ai un sentiment d'échec" },
      ar: { q: 'أشعر بفشل ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 27,
      fr: { q: "L'idée d'accoucher une nouvelle fois m'effraie" },
      ar: { q: 'فكرة الولادة مرة أخرى ترعبني ' },
      type: 'radio',
      answer: null,
      needValidation: false,
      valid: true,
    },
    {
      id: 28,
      fr: {
        q: "Si l'on met de côté les  émossions relatives à l'arrivée de votre bébé, pour vous en tant que femme, votre vécu de l'accouchement a été : ",
      },
      ar: {
        q: 'إذا تم تجاهل المشاعر المتعلقة بوصول طفلك الجديد وتركيز النظر على تجربتك كامرأة، كيف وصفت تجربتك في الولادة... (قم بتحديد الرقم المناسب على المقياس أدناه) سيئة جدًا جيدة جدًا ',
      },
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
          {langData[lang].header}
        </Text>
      </View>
      {formSteps[currentStep]}
    </View>
  );
};
export default Evaluation;
