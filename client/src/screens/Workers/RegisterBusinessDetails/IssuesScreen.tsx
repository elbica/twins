import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

function IssueScreen() {
  return (
    <View>
      <TextInput multiline style={styles.TextInput} placeholder={'이슈사항'} />
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

export default IssueScreen;
