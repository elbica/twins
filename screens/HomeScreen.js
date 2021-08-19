import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
 
export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>HomeScreen</Text>
                <Button onPress={this.gotoLogin} title="Login"></Button>          
            </View>
        );
    }
    gotoLogin=()=>{
        this.props.navigation.navigate('Login') //트윈 계정으로 로그인하는 페이지로 이동.
    }
}
