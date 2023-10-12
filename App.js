import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNonAuth from './src/screens/HomeNonAuth';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Articles from './src/screens/Articles';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './src/config/firebase';
const Stack = createNativeStackNavigator();
export const UserContext = React.createContext();

export default function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log('user: ' + user);
      setUser(user);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} />
      <UserContext.Provider value={{ user, setUser }}>
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