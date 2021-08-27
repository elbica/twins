import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

function MyInfoScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={require('../../../../assets/images/gray.jpg')}
        style={{
          marginVertical: '5%',
          marginLeft: '38%',
          width: 98,
          height: 116,
        }}
      />

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>이름</ListItem.Title>
        </ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>홍길동</ListItem.Subtitle>
      </ListItem>

      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>전화번호</ListItem.Title>
        </ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>
          010-1234-1234
        </ListItem.Subtitle>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>이메일</ListItem.Title>
        </ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>
          example@example.com
        </ListItem.Subtitle>
      </ListItem>

      <TouchableOpacity onPress={() => navigation.navigate('비밀번호 변경')}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>비밀번호 변경</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>

      <TouchableOpacity>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>로그아웃</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
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

export default MyInfoScreen;
