import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { collection, doc, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { UserContext } from '../../App';
const Submitting = ({ personalInfos, questions }) => {
  const [loading, setLoading] = React.useState(true);
  const { user, setUser } = React.useContext(UserContext);

  const evaluations = collection(db, 'evaluations');
  async function submitEval() {
    try {
      const res = await addDoc(evaluations, {
        answers: { ...questions },
        personal: { ...personalInfos },
        user: {
          name: user._tokenResponse.displayName,
          email: user._tokenResponse.email,
        },
      });
      const evalId = res._key.path.segments;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    submitEval();
  }, []);
  return (
    <View className='flex-1 flex items-center justify-center'>
      {loading && (
        <View>
          <ActivityIndicator
            size='large'
            style={{ width: '500px' }}
            color='#205072'
          />
          <Text className='text-xl font-semibold  text-text'>Uploading...</Text>
        </View>
      )}

      {!loading && (
        <View>
          <Ionicons name='checkmark-done-outline' size={24} color='#205072' />
          <Text className='text-xl font-semibold  text-text'>Done</Text>
        </View>
      )}
    </View>
  );
};

export default Submitting;
