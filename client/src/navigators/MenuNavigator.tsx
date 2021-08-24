import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Menu from '../screens/Workers/Menu/TotalScreen';
import MyInfoNavigator from './MyInfoNavigator';
import Notice from '../screens/Workers/Menu/NoticeScreen';
import Project from '../screens/Workers/Menu/ProjectInfoScreen';
import Help from '../screens/Workers/Menu/HelpScreen';
import Setting from '../screens/Workers/Menu/SettingScreen';

const MenuStack = createStackNavigator();

const MenuNavigator = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        options={{headerShown: false}}
        name="메뉴"
        component={Menu}
      />
      <MenuStack.Screen
        name="내 정보"
        options={{headerShown: false}}
        children={() => <MyInfoNavigator />}
      />
      <MenuStack.Screen name="공지사항" component={Notice} />
      <MenuStack.Screen name="프로젝트 정보" component={Project} />
      <MenuStack.Screen name="도움말" component={Help} />
      <MenuStack.Screen name="설정" component={Setting} />
    </MenuStack.Navigator>
  );
};

export default MenuNavigator;
