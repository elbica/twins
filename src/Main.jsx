import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import EmployeeMainScreen from '../screens/EmployeeMainScreen';

import {createAppContainer} from 'react-navigation';

// StackNavigator 객체 생성
const stackNav = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  EmployeeMain: {screen: EmployeeMainScreen},
});

// 네비게이터 객체를 가지고 있는 AppContainer객체 생성 : 컴포넌트 객체
const Container = createAppContainer(stackNav);

export default class Main extends Component {
  render() {
    return <Container theme="light"></Container>;
  }
}
