// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCGuqdE2a-ulxuAFtjCKcAGtQOhdk4eSqM',
  authDomain: 'birthmake-c6ee7.firebaseapp.com',
  projectId: 'birthmake-c6ee7',
  storageBucket: 'birthmake-c6ee7.appspot.com',
  messagingSenderId: '774172110540',
  appId: '1:774172110540:web:4affac391052415e939c69',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
