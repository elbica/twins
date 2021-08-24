import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MyWorkScreen from '../screens/Workers/MyWorkScreen';
import MenuNavigator from './MenuNavigator';
import RegisterNavigator from '../navigators/RegisterNavigator';

const BottomTab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="홈"
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: '#5D5FEF',
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#5D5FEF',
      }}>
      <BottomTab.Screen name="홈" children={() => <RegisterNavigator />} />
      <BottomTab.Screen name="내 작업" component={MyWorkScreen} />
      <BottomTab.Screen name="전체" children={() => <MenuNavigator />} />
    </BottomTab.Navigator>
  );
}
