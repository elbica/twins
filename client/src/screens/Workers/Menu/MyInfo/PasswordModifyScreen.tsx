import React from 'react';
import {View, StyleSheet, Alert, TextInput} from 'react-native';
import {ListItem, Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

function PasswordModifyScreen() {
  const goAlert1 = () =>
    Alert.alert(
      '비밀번호를 수정하시겠습니까?', // 첫번째 text: 타이틀 제목
      '', // 두번째 text: 그 밑에 작은 제목
      [
        {
          text: '수정', // 버튼 제목
          onPress: () => console.log('수정'),
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
        <ListItem.Content style={{marginBottom: -40}}>
          <ListItem.Title style={styles.title}>
            현재 비밀번호 입력
          </ListItem.Title>
          <Input
            placeholder="password"
            rightIcon={<Icon name="eye" size={24} color="black" />}
            inputContainerStyle={styles.input}
          />
        </ListItem.Content>
      </ListItem>

      <ListItem>
        <ListItem.Content style={{marginBottom: -40}}>
          <ListItem.Title style={styles.title}>새 비밀번호 입력</ListItem.Title>
          <Input
            placeholder="password"
            rightIcon={<Icon name="eye" size={24} color="black" />}
            inputContainerStyle={styles.input}
          />
        </ListItem.Content>
      </ListItem>

      <ListItem>
        <ListItem.Content style={{marginBottom: -40}}>
          <ListItem.Title style={styles.title}>새 비밀번호 확인</ListItem.Title>
          <Input
            placeholder="password"
            rightIcon={<Icon name="eye" size={24} color="black" />}
            inputContainerStyle={styles.input}
          />
        </ListItem.Content>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Subtitle style={styles.subtitle}>
            비밀번호는 8자리이상, 영문 대/소문자와 숫자, 특수문자로 구성되어
            있어야 합니다.
          </ListItem.Subtitle>
        </ListItem.Content>
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
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#979797',
  },
  Button1: {
    alignSelf: 'center',
    marginTop: 50,
  },
  input: {
    marginLeft: -10,
    height: 56,
    width: '105%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 5,
    padding: 10,
  },
});
export default PasswordModifyScreen;
