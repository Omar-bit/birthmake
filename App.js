import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNonAuth from './src/screens/HomeNonAuth';
const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = React.useState(null);
  return (
    <NavigationContainer>
      {!user && (
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeNonAuth} />
        </Stack.Navigator>
      )}
      {user && (
        <Stack.Navigator>
          <Stack.Screen name='Home' component={() => <Text>Auth</Text>} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
