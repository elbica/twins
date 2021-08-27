import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MyWorkNavigator from './MyWorkNavigator';
import MenuNavigator from './MenuNavigator';
import HomeNavigator from './WorkersHomeNavigator';

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
      <BottomTab.Screen name="홈" children={() => <HomeNavigator />} />
      <BottomTab.Screen name="내 작업" children={() => <MyWorkNavigator />} />
      <BottomTab.Screen name="전체" children={() => <MenuNavigator />} />
    </BottomTab.Navigator>
  );
}
