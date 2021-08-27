import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Register from '../screens/Workers/Home/RegisterBusinessDetails/RegisterBusinessScreen';
import Equipment from '../screens/Workers/Home/RegisterBusinessDetails/EquipmentNameScreen';
import Location from '../screens/Workers/Home/RegisterBusinessDetails/LocationScreen';
import Progress from '../screens/Workers/Home/RegisterBusinessDetails/ProgressScreen';
import WorkCode from '../screens/Workers/Home/RegisterBusinessDetails/WorkCodeScreen';
import Issues from '../screens/Workers/Home/RegisterBusinessDetails/IssuesScreen';
import Loss from '../screens/Workers/Home/RegisterBusinessDetails/LossScreen';
import System from '../screens/Workers/Home/RegisterBusinessDetails/SystemNameScreen';

const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#5D5FEF',
      }}>
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

export default RegisterNavigator;
