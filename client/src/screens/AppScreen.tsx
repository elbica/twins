import React from 'react';
import {View, Text, Button} from 'react-native';

function AppScreen(props) {
  const gotoLogin = () => {
    props.navigation.navigate('Login'); //트윈 계정으로 로그인하는 페이지로 이동.
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Button onPress={gotoLogin} title="Login"></Button>
    </View>
  );
}

export default AppScreen;
