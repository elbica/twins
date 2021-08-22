import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 64,
    fontWeight: '500',
  },
});

const NoticeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: '7월 15일 목요일'},
          {key: '7월 14일 수요일'},
          {key: '7월 13일 화요일'},
          {key: '7월 12일 월요일'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default NoticeScreen;
