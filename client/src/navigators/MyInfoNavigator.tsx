import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import MyInfo from '../screens/Workers/Menu/MyInfo/MyInfoScreen';
import MyInfoModify from '../screens/Workers/Menu/MyInfo/MyInfoModifyScreen';
import PasswordModify from '../screens/Workers/Menu/MyInfo/PasswordModifyScreen';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const MyInfoNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTintColor: '#5D5FEF',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('정보 수정')}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#5D5FEF',
                  marginRight: 20,
                  fontWeight: '200',
                }}>
                수정
              </Text>
            </TouchableOpacity>
          ),
        }}
        name="내 정보 "
        component={MyInfo}
      />
      <Stack.Screen
        options={{
          headerTintColor: '#5D5FEF',
        }}
        name="정보 수정"
        component={MyInfoModify}
      />
      <Stack.Screen
        options={{
          headerTintColor: '#5D5FEF',
        }}
        name="비밀번호 변경"
        component={PasswordModify}
      />
    </Stack.Navigator>
  );
};

export default MyInfoNavigator;
