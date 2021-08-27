import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {ListItem, Button} from 'react-native-elements';

const list = [
  {
    title: '연장근무 승인되었습니다.',
    content: '관리자, 7월 15일 목요일',
  },
  {
    title: '연장근무 거부되었습니다.',
    content: '관리자, 7월 16일 금요일',
  },
];

function AlarmScreen(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {list.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => props.navigation.navigate(item.title)}>
          <ListItem key={i}>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              <ListItem.Title style={styles.subtitle}>
                {item.content}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  subtitle: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.6);',
  },
});

export default AlarmScreen;
