import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AppScreen from './screens/AppScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainTabs from './navigators/MainTabs';
import {NavigationContainer} from '@react-navigation/native';

// StackNavigator 객체 생성
const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'App'} component={AppScreen} />
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'SignUp'} component={SignUpScreen} />
        <Stack.Screen name={'Tab'} component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
