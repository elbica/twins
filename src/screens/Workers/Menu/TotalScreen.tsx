import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ListItem, Image} from 'react-native-elements';

const list = [
  {
    title: '내 정보',
  },
  {
    title: '공지사항',
  },
  {
    title: '프로젝트 정보',
  },
  {
    title: '도움말',
  },
  {
    title: '설정',
  },
];

function TotalScreen(props) {
  return (
    <View>
      <Image style={styles.LogoImage} source={require('./gray.jpg')} />
      {list.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => props.navigation.navigate(item.title)}>
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  LogoImage: {
    margin: 10,
    height: 100,
  },
});

export default TotalScreen;
