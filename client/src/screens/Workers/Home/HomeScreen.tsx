import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/Octicons';
import {Button} from 'react-native-elements';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

function EmployeeMainScreen() {
  const navigation = useNavigation();
  const gotoSecond = () => {
    navigation.navigate('');
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <BellIcon
        style={{
          fontSize: 25,
          color: '#5D5FEF',
          marginTop: 10,
          marginLeft: '90%',
        }}
        onPress={() => navigation.navigate('알람')}
        name="bell"></BellIcon>
      <View style={styles.sectionContainer}>
        <View style={styles.elem}>
          <Image
            style={styles.userImage}
            source={require('../../../assets/images/gray.jpg')}
          />
          <View style={{marginLeft: 30}}>
            <Text style={styles.sectionText1}>1234PRJ</Text>
            <Text style={styles.sectionText1}>배관공</Text>
            <Text style={styles.sectionText1}>홍길동</Text>
          </View>
        </View>

        <View style={styles.elem}>
          <View>
            <Text style={styles.sectionText2}>08:00</Text>
            <TouchableOpacity onPress={gotoSecond} style={styles.Button1}>
              <Text children={'출근'} style={styles.Text1}></Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.sectionText2}>15:30</Text>
            <TouchableOpacity onPress={gotoSecond} style={styles.Button1}>
              <Text children={'퇴근'} style={styles.Text1}></Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="업무 내용 등록"
          icon={{
            name: 'plus',
            type: 'font-awesome',
            size: 15,
            color: '#5D5FEF',
          }}
          buttonStyle={{
            borderColor: 'rgba(0, 0, 0, 0.12)',
          }}
          type="outline"
          titleStyle={{color: '#5D5FEF', fontSize: 24, fontWeight: '500'}}
          containerStyle={{
            width: 300,
            marginHorizontal: 20,
          }}
          onPress={() => navigation.navigate('업무 내용 등록 버튼')}
        />
        <Button
          title="연장 근무 사전 신청"
          icon={{
            name: 'plus',
            type: 'font-awesome',
            size: 15,
            color: '#5D5FEF',
          }}
          buttonStyle={{
            borderColor: 'rgba(0, 0, 0, 0.12)',
          }}
          type="outline"
          titleStyle={{color: '#5D5FEF', fontSize: 24, fontWeight: '500'}}
          containerStyle={{
            width: 300,
            marginHorizontal: 20,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate('연장 근무 사전 신청')}
        />
      </View>
    </ScrollView>
  );
}

export default EmployeeMainScreen;

const styles = StyleSheet.create({
  TextInput: {
    margin: 10,
    height: 40,
    borderBottomColor: '#5D5FEF',
    borderBottomWidth: 1,
  },
  elem: {
    width: '100%',
    flexDirection: 'row',
    padding: 3,
  },
  userImage: {
    width: 98,
    height: 116,
    margin: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionText1: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
  },
  sectionText2: {
    paddingTop: 40,
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },
  Text1: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  Text2: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#5D5FEF',
    fontSize: 24,
    fontWeight: 'normal',
  },
  Button1: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 6,
    margin: 15,
    width: 135,
    height: 76,
    marginBottom: 32,
    backgroundColor: '#5D5FEF',
    borderRadius: 4,
  },
});

// const TestView = styled.View`
//   flex: 1;
//   background-color: red;
//   height: 100px;
//   width: 100px;
// `;
