import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {ListItem, Button} from 'react-native-elements';

function PreApplicationForOvertimeWorkScreen() {
  const goAlert1 = () =>
    Alert.alert(
      '연장근무 신청 확인', // 첫번째 text: 타이틀 제목
      '신청일 : 7월 15일\n출근시간 : 09:00\n퇴근시간 : 19:00\n사유 : ...', // 두번째 text: 그 밑에 작은 제목
      [
        {
          text: '작업내용 등록', // 버튼 제목
          onPress: () => console.log('작업내용등록'),
        },
        {
          text: '취소',
          onPress: () => console.log('취소'),
          style: 'cancel',
        },
        // 이벤트 발생시 로그를 찍는다
      ],
      {cancelable: false},
    );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>신청일</ListItem.Title>
        </ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>7월 15일</ListItem.Subtitle>
        <ListItem.Chevron></ListItem.Chevron>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>출근시간</ListItem.Title>
        </ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>09:00</ListItem.Subtitle>
        <ListItem.Chevron></ListItem.Chevron>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>퇴근시간</ListItem.Title>
        </ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>19:00</ListItem.Subtitle>
        <ListItem.Chevron></ListItem.Chevron>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>사유</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron></ListItem.Chevron>
      </ListItem>

      <Button
        onPress={goAlert1}
        title={'확인'}
        buttonStyle={{backgroundColor: '#6200EE'}}
        containerStyle={styles.Button1}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#979797',
  },
  Button1: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});
export default PreApplicationForOvertimeWorkScreen;
