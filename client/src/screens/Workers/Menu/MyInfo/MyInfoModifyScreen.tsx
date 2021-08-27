import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {ListItem, Button, Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

function MyInfoModifyScreen() {
  const navigation = useNavigation();
  const goAlert1 = () =>
    Alert.alert(
      '정보를 수정하시겠습니까?',
      '',
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
      ],
      {cancelable: false},
    );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={require('../../../../assets/images/gray.jpg')}
        style={{
          marginTop: '5%',
          alignSelf: 'center',
          width: 98,
          height: 116,
        }}
      />
      <Icon
        name="plus"
        style={{alignSelf: 'center'}}
        size={24}
        color="black"></Icon>
      <ListItem>
        <ListItem.Content style={{marginBottom: -40}}>
          <ListItem.Title style={styles.title}>이름</ListItem.Title>
          <Input placeholder="홍길동" inputContainerStyle={styles.input} />
        </ListItem.Content>
      </ListItem>

      <ListItem>
        <ListItem.Content style={{marginBottom: -40}}>
          <ListItem.Title style={styles.title}>전화번호</ListItem.Title>
          <Input
            placeholder="010-1234-1234"
            inputContainerStyle={styles.input}
          />
        </ListItem.Content>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>이메일</ListItem.Title>
          <Input
            placeholder="example@example.com"
            inputContainerStyle={styles.input}
          />
        </ListItem.Content>
      </ListItem>

      <Button
        onPress={goAlert1}
        title={'확인'}
        buttonStyle={{
          backgroundColor: '#6200EE',
        }}
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
export default MyInfoModifyScreen;
