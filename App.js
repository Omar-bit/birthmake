import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNonAuth from './src/screens/HomeNonAuth';
const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} />
      <NavigationContainer>
        {!user && (
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeNonAuth}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
        {user && (
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={() => <Text>Auth</Text>}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
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
