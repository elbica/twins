import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Workers/Home/HomeScreen';
import Alarm from '../screens/Workers/Home/AlarmScreen';
import RegisterNavigator from './RegisterNavigator';
import OvertimeWork from '../screens/Workers/Home/PreApplicationForOvertimeWorkScreen';
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#5D5FEF',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="메인"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="업무 내용 등록 버튼"
        children={() => <RegisterNavigator />}
      />
      <Stack.Screen name="알람" component={Alarm} />
      <Stack.Screen name="연장 근무 사전 신청" component={OvertimeWork} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
