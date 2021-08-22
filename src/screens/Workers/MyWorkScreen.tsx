import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

function EmployeeMainScreen() {
  return (
    <View>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 36,
          marginLeft: 20,
          marginTop: 20,
        }}>
        7월 업무 내역
      </Text>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 24,
          marginLeft: 20,
          color: 'rgba(0, 0, 0, 0.6)',
        }}>
        2021년
      </Text>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 24,
          marginLeft: 20,
          marginTop: 40,
          color: 'black',
        }}>
        근무요약
      </Text>
    </View>
  );
}

export default EmployeeMainScreen;
