import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

function MyWorkScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>7월 업무 내역</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle1}>2021년</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron></ListItem.Chevron>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.title2}>근무 요약</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle2}>
            총 4일 근무
          </ListItem.Subtitle>
          <ListItem.Subtitle style={styles.subtitle2}>
            연장 근무 3시간
          </ListItem.Subtitle>
          <ListItem.Subtitle style={styles.subtitle2}>
            지각 0, 결근 0, 휴무 1
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <ListItem style={{marginBottom: -20}}>
        <ListItem.Content>
          <ListItem.Title style={styles.title2}>근무 내역</ListItem.Title>
        </ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle2}>
          전체 보기
        </ListItem.Subtitle>
        <ListItem.Chevron
          onPress={() => navigation.navigate('전체보기')}></ListItem.Chevron>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={{marginLeft: 15}}>
          <ListItem.Title style={styles.title3}>7월 15일 목요일</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle3}>
            (장비명), (위치)
          </ListItem.Subtitle>
          <ListItem.Title style={styles.title3}>7월 15일 목요일</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle3}>
            (장비명), (위치)
          </ListItem.Subtitle>
          <ListItem.Title style={styles.title3}>7월 15일 목요일</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle3}>
            (장비명), (위치)
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title2}>근무일정 수정</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron
          onPress={() =>
            navigation.navigate('근무일정 수정 버튼')
          }></ListItem.Chevron>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '500',
  },
  title2: {
    fontSize: 24,
    fontWeight: '500',
  },
  title3: {
    fontSize: 20,
    fontWeight: '500',
  },
  subtitle1: {
    fontSize: 24,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  subtitle2: {
    fontSize: 18,
    fontWeight: '400',
    color: '#979797',
  },
  subtitle3: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 20,
  },
});

export default MyWorkScreen;
