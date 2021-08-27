import React from 'react';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {ListItem, Button} from 'react-native-elements';

const list = [
  {
    title: '장비명',
    content: '#129(현재 선택된 옵션 출력)',
  },
  {
    title: '시스템명',
    content: '#129(선택된 옵션 표시)',
  },
  {
    title: '위치',
    content: '#129(선택된 옵션 표시)',
  },
  {
    title: '진행률',
    content: '(입력한 진행률 표시됨)',
  },
  {
    title: '작업코드',
    content: '(선택된 작업 코드 표시됨)',
  },
  {
    title: '이슈사항',
  },
  {
    title: '로스사항',
  },
];

function RegisterBusinessScreen(props) {
  const goAlert1 = () =>
    Alert.alert(
      '작업내용 확인', // 첫번째 text: 타이틀 제목
      '장비명 : #129\n시스템명 : \n...', // 두번째 text: 그 밑에 작은 제목
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
      {list.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => props.navigation.navigate(item.title)}>
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              <ListItem.Title style={styles.subtitle}>
                {item.content}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}

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
  Button1: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  text1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
});

export default RegisterBusinessScreen;
