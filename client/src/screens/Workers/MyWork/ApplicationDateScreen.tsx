import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

function ApplicationDate() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TextInput multiline style={styles.TextInput} placeholder={'신청일'} />
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderWidth: 1,
    height: 164,
    padding: 10,
    margin: 20,
  },
});

export default ApplicationDate;
