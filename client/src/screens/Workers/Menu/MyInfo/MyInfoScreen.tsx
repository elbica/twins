import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

function MyInfoScreen() {
  return (
    <View>
      <Text>MyInfoScreen</Text>
      <Input placeholder="BASIC INPUT" />
    </View>
  );
}

export default MyInfoScreen;
