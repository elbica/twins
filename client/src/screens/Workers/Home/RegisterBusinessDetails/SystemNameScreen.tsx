import React from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';

function SystemName() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CheckBox
        title="#129"
        checkedIcon="clear"
        checkedColor="#6200EE"
        //checked={check3}
        //onPress={() => setCheck3(!check3)}
      />
      <CheckBox
        title="#130"
        checkedIcon="clear"
        checkedColor="#6200EE"
        //checked={check3}
        //onPress={() => setCheck3(!check3)}
      />
      <CheckBox
        title="#131"
        checkedIcon="clear"
        checkedColor="#6200EE"
        //checked={check3}
        //onPress={() => setCheck3(!check3)}
      />
      <CheckBox
        title="#132"
        checkedIcon="clear"
        checkedColor="#6200EE"
        //checked={check3}
        //onPress={() => setCheck3(!check3)}
      />
    </View>
  );
}

export default SystemName;
