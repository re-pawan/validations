import { View, Text } from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import Sign from '../Task/src/screens/Sign';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
