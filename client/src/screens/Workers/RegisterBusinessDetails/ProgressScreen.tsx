import React from 'react';
import {Text, View} from 'react-native';
import {Slider} from 'react-native-elements';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem} from 'react-native-elements';

const list = [
  {
    title: '실측',
  },
  {
    title: '공지사항',
  },
  {
    title: '프로젝트 정보',
  },
  {
    title: '도움말',
  },
  {
    title: '설정',
  },
];

function Progress(props) {
  return (
    <View>
      {list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <Slider
              value={35}
              onValueChange={35}
              maximumValue={100}
              minimumValue={0}
              step={1}
              trackStyle={{height: 10, backgroundColor: 'transparent'}}
              thumbStyle={{
                height: 20,
                width: 20,
                backgroundColor: 'transparent',
              }}
              thumbProps={{
                children: <Icon name="circle" size={20} color="#5D5FEF" />,
              }}
            />
            <Text>{35}%</Text>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

export default Progress;
