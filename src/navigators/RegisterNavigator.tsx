import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Workers/RegisterBusinessDetails/RegisterBusinessScreen';
import Equipment from '../screens/Workers/RegisterBusinessDetails/EquipmentNameScreen';
import Location from '../screens/Workers/RegisterBusinessDetails/LocationScreen';
import Progress from '../screens/Workers/RegisterBusinessDetails/ProgressScreen';
import WorkCode from '../screens/Workers/RegisterBusinessDetails/RegisterBusinessScreen';
import Issues from '../screens/Workers/RegisterBusinessDetails/IssuesScreen';
import Loss from '../screens/Workers/RegisterBusinessDetails/RegisterBusinessScreen';
import System from '../screens/Workers/RegisterBusinessDetails/SystemNameScreen';
const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="업무 내용 등록" component={Register} />
      <Stack.Screen name="장비명" component={Equipment} />
      <Stack.Screen name="시스템명" component={System} />
      <Stack.Screen name="위치" component={Location} />
      <Stack.Screen name="진행률" component={Progress} />
      <Stack.Screen name="작업코드" component={WorkCode} />
      <Stack.Screen name="이슈사항" component={Issues} />
      <Stack.Screen name="로스사항" component={Loss} />
    </Stack.Navigator>
  );
};

export default RegisterNavigator();
