import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MyInfo from '../screens/Workers/Menu/MyInfo/MyInfoScreen';
import MyInfoModify from '../screens/Workers/Menu/MyInfo/MyInfoModifyScreen';
import PasswordModify from '../screens/Workers/Menu/MyInfo/PasswordModifyScreen';

const Stack = createStackNavigator();

const MyInfoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="내 정보" component={MyInfo} />
      <Stack.Screen name="정보 수정" component={MyInfoModify} />
      <Stack.Screen name="비밀번호 변경" component={PasswordModify} />
    </Stack.Navigator>
  );
};

export default MyInfoNavigator;
