import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Menu from '../screens/Workers/Menu/TotalScreen';
import MyInfoNavigator from './MyInfoNavigator';
import Notice from '../screens/Workers/Menu/NoticeScreen';
import Project from '../screens/Workers/Menu/ProjectInfoScreen';
import Help from '../screens/Workers/Menu/HelpScreen';
import Setting from '../screens/Workers/Menu/SettingScreen';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const MenuStack = createStackNavigator();

const MenuNavigator = () => {
  return (
    <MenuStack.Navigator
      screenOptions={{
        headerTintColor: '#5D5FEF',
      }}>
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
      <MenuStack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#5D5FEF',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity>
              <Icon
                name="search1"
                style={{
                  fontSize: 24,
                  color: '#fff',
                  marginRight: 20,
                }}
              />
            </TouchableOpacity>
          ),
        }}
        name="공지사항"
        component={Notice}
      />
      <MenuStack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#5D5FEF',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  marginRight: 20,
                  fontWeight: '200',
                }}>
                수정
              </Text>
            </TouchableOpacity>
          ),
        }}
        name="프로젝트 정보"
        component={Project}
      />
      <MenuStack.Screen name="도움말" component={Help} />
      <MenuStack.Screen name="설정" component={Setting} />
    </MenuStack.Navigator>
  );
};
const styles = StyleSheet.create({});

export default MenuNavigator;
