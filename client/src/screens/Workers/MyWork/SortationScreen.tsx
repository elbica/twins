import React from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';

function Sortation() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CheckBox
        title="연차"
        checkedIcon="clear"
        checkedColor="#6200EE"
        //checked={check3}
        //onPress={() => setCheck3(!check3)}
      />
      <CheckBox
        title="경조사"
        checkedIcon="clear"
        checkedColor="#6200EE"
        //checked={check3}
        //onPress={() => setCheck3(!check3)}
      />
    </View>
  );
}

export default Sortation;
