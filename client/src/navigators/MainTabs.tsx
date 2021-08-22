import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MyWorkScreen from '../screens/Workers/MyWorkScreen';

import Home from '../screens/Workers/HomeScreen';
import Register from '../screens/Workers/RegisterBusinessDetails/RegisterBusinessScreen';
import Equipment from '../screens/Workers/RegisterBusinessDetails/EquipmentNameScreen';
import Location from '../screens/Workers/RegisterBusinessDetails/LocationScreen';
import Progress from '../screens/Workers/RegisterBusinessDetails/ProgressScreen';
import WorkCode from '../screens/Workers/RegisterBusinessDetails/WorkCodeScreen';
import Issues from '../screens/Workers/RegisterBusinessDetails/IssuesScreen';
import Loss from '../screens/Workers/RegisterBusinessDetails/LossScreen';
import System from '../screens/Workers/RegisterBusinessDetails/SystemNameScreen';
import Alarm from '../screens/Workers/AlarmScreen';

import Menu from '../screens/Workers/Menu/TotalScreen';
import MyInfo from '../screens/Workers/Menu/MyInfoScreen';
import Notice from '../screens/Workers/Menu/NoticeScreen';
import Project from '../screens/Workers/Menu/ProjectInfoScreen';
import Help from '../screens/Workers/Menu/HelpScreen';
import Setting from '../screens/Workers/Menu/SettingScreen';
import RegisterNavigator from '../navigators/RegisterNavigator';

const Stack = createStackNavigator();
const MenuStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// const RegisterNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         options={{headerShown: false}}
//         name="메인"
//         component={Home}
//       />
//       <Stack.Screen name="업무 내용 등록" component={Register} />
//       <Stack.Screen name="장비명" component={Equipment} />
//       <Stack.Screen name="시스템명" component={System} />
//       <Stack.Screen name="위치" component={Location} />
//       <Stack.Screen name="진행률" component={Progress} />
//       <Stack.Screen name="작업코드" component={WorkCode} />
//       <Stack.Screen name="이슈사항" component={Issues} />
//       <Stack.Screen name="로스사항" component={Loss} />
//       <Stack.Screen name="알람" component={Alarm} />
//     </Stack.Navigator>
//   );
// };

const MenuNavigator = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        options={{headerShown: false}}
        name="메뉴"
        component={Menu}
      />
      <MenuStack.Screen name="내 정보" component={MyInfo} />
      <MenuStack.Screen name="공지사항" component={Notice} />
      <MenuStack.Screen name="프로젝트 정보" component={Project} />
      <MenuStack.Screen name="도움말" component={Help} />
      <MenuStack.Screen name="설정" component={Setting} />
    </MenuStack.Navigator>
  );
};

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
      <BottomTab.Screen name="전체" component={MenuNavigator} />
    </BottomTab.Navigator>
  );
}
