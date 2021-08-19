import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function EmployeeMainScreen(props) {
  const gotoSecond = () => {
    //props.navigation.navigate('Login')
  };
  return (
    <View>
      <View style={styles.sectionContainer}>
        <View style={styles.elem}>
          <Image style={styles.userImage} source={require('./gray.jpg')} />
          <View>
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

        <TouchableOpacity onPress={gotoSecond} style={styles.Button2}>
          <Icon name="plus"></Icon>
          <Text children={'업무 내용 등록'} style={styles.Text2}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoSecond} style={styles.Button2}>
          <Icon name="plus"></Icon>
          <Text children={'연장 근무 사전 신청'} style={styles.Text2}></Text>
        </TouchableOpacity>
      </View>
    </View>
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
    //alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
  },
  userImage: {
    width: 98,
    height: 116,
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
    paddingTop: 50,
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
    textAlign: 'center',
    padding: 6,
    margin: 15,
    width: 135,
    height: 76,
    marginBottom: 32,
    backgroundColor: '#5D5FEF',
    borderRadius: 4,
  },
  Button2: {
    textAlign: 'center',
    margin: 10,
    height: 55,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
  },
});
