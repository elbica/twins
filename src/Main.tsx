import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import EmployeeMainScreen from '../screens/EmployeeMainScreen';

// StackNavigator 객체 생성
const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'EmployeeMain'} component={EmployeeMainScreen} />
    </Stack.Navigator>
  );
}
