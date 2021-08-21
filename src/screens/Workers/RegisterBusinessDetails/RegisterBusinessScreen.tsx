import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {ListItem} from 'react-native-elements';

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

function RegisterBusiness(props) {
  const goAlert1 = () =>
    Alert.alert(
      '작업내용 확인', // 첫번째 text: 타이틀 제목
      '장비명 : #129', // 두번째 text: 그 밑에 작은 제목
      [
        {
          text: '작업내용 등록', // 버튼 제목
          onPress: () => console.log('작업내용등록'),
        },
        {
          text: '취소',
          onPress: () => goAlert2,
          style: 'cancel',
        },
        // 이벤트 발생시 로그를 찍는다
      ],
      {cancelable: false},
    );

  const goAlert2 = () =>
    Alert.alert(
      '근무 내용 작성을 취소하겠습니까?', // 첫번째 text: 타이틀 제목
      '', // 두번째 text: 그 밑에 작은 제목
      [
        {
          text: '작성 취소', // 버튼 제목
          onPress: () => console.log('작업내용등록'),
          style: 'cancel',
        },
        {
          text: '계속 작성',
          onPress: () => console.log('취소'),
        },
        // 이벤트 발생시 로그를 찍는다
      ],
      {cancelable: false},
    );
  return (
    <View>
      {list.map((item, i) => (
        <TouchableOpacity onPress={() => props.navigation.navigate(item.title)}>
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
      <TouchableOpacity onPress={goAlert1} style={styles.Button1}>
        <Text children={'확인'} style={styles.text1}></Text>
      </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 36,
    width: 56,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#6200EE',
    borderColor: '#6200EE',
    borderRadius: 4,
  },
  text1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
});

export default RegisterBusiness;
