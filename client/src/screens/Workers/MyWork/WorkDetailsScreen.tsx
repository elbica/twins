import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {ListItem, Button} from 'react-native-elements';

const list = [
  {
    title: '7월 15일 목요일',
    content: '(장비명),(위치)',
  },
  {
    title: '7월 14일 수요일',
    content: '(장비명),(위치)',
  },
  {
    title: '7월 13일 화요일',
    content: '(장비명),(위치)',
  },
  {
    title: '7월 12일 월요일',
    content: '(장비명),(위치)',
  },
];

function WorkDetailsScreen(props) {
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

export default WorkDetailsScreen;
