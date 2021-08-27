import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MyWork from '../screens/Workers/MyWork/MyWorkScreen';
import ModifyingWorkScheduleScreen from '../screens/Workers/MyWork/ModifyingWorkScheduleScreen';
import Sortation from '../screens/Workers/MyWork/SortationScreen';
import ApplicationDate from '../screens/Workers/MyWork/ApplicationDateScreen';
import Reason from '../screens/Workers/MyWork/ReasonScreen';
import AttachingAStatementOfReason from '../screens/Workers/MyWork/AttachingAStatementOfReasonScreen';
import WorkDetailsScreen from '../screens/Workers/MyWork/WorkDetailsScreen';
const Stack = createStackNavigator();

const ModifyingWorkSchedule = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#5D5FEF',
      }}>
      <Stack.Screen
        name="근무일정 수정"
        component={ModifyingWorkScheduleScreen}
      />
      <Stack.Screen name="신청일" component={ApplicationDate} />
      <Stack.Screen name="사유" component={Reason} />
      <Stack.Screen name="구분" component={Sortation} />
      <Stack.Screen
        name="사유서 첨부"
        component={AttachingAStatementOfReason}
      />
    </Stack.Navigator>
  );
};

const WorkDetails = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#5D5FEF',
      }}>
      <Stack.Screen name="근무 내역" component={WorkDetailsScreen} />
    </Stack.Navigator>
  );
};

const MyWorkNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="내 작업" component={MyWork} />
      <Stack.Screen
        name="근무일정 수정 버튼"
        children={() => <ModifyingWorkSchedule />}
      />
      <Stack.Screen name="전체보기" children={() => <WorkDetails />} />
    </Stack.Navigator>
  );
};

export default MyWorkNavigator;
