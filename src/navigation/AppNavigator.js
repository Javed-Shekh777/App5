import React from 'react'
import { Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Main from '../screens/Main';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
     <>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name='Login'  component={Login} options={{headerShown:false}} />
        <Stack.Screen name='Main'  component={Main} options={{headerShown:false}} />

        </Stack.Navigator>
      </NavigationContainer>
     </>
  )
}

export default AppNavigator
