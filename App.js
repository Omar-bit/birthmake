import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNonAuth from './src/screens/HomeNonAuth';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Articles from './src/screens/Articles';
import Article from './src/screens/Article';
import Evaluation from './src/screens/Evaluation';
const Stack = createNativeStackNavigator();
export const UserContext = React.createContext();

export default function App() {
  const [user, setUser] = React.useState(null);

  const [lang, setLang] = React.useState('fr');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} />
      <UserContext.Provider value={{ user, setUser, lang, setLang }}>
        <NavigationContainer>
          {!user && (
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={HomeNonAuth}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Signup'
                component={Signup}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
          {user && (
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name='Articles'
                component={Articles}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Article'
                component={Article}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Evaluation'
                component={Evaluation}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </UserContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 0,
    margin: 0,
  },
});
// IOS : 774172110540-b91lvkjcf9fcp1qq5kjj92k1p546s285.apps.googleusercontent.com
// ANDROID : 774172110540-rlu3lvre8q9c3hbv56e2juc7nhc3u1lc.apps.googleusercontent.com
