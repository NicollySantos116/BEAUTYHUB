import React from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './assets/screens/HomeScreen.js';
import DetailScreen from './assets/screens/DetailScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}