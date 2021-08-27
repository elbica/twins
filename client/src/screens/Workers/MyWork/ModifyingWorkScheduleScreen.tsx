import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

function ModifyingWorkScheduleScreen() {
  const navigation = useNavigation();

  const goAlert1 = () =>
    Alert.alert(
      '연장근무 수정 확인', // 첫번째 text: 타이틀 제목
      '신청일 : 7월 15일\n사유 : ...\n구분 : 연차\n사유서 첨부(선택) : ...', // 두번째 text: 그 밑에 작은 제목
      [
        {
          text: '작업내용 수정', // 버튼 제목
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
        <ListItem.Chevron
          onPress={() => navigation.navigate('신청일')}></ListItem.Chevron>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>사유</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron
          onPress={() => navigation.navigate('사유')}></ListItem.Chevron>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>구분</ListItem.Title>
        </ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>연차</ListItem.Subtitle>
        <ListItem.Chevron
          onPress={() => navigation.navigate('구분')}></ListItem.Chevron>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>
            사유서 첨부(선택)
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron
          onPress={() => navigation.navigate('사유서 첨부')}></ListItem.Chevron>
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
export default ModifyingWorkScheduleScreen;
