import React, { Component } from 'react';
import {
  View,
  Text,
  SectionList,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:'center', marginTop:100}}>
        <SectionList
        style={{height: 50}}
        sections={[
          {title: 'D', data: ['Devin']},
          {title: 'J', data: ['Jackson', 'Jame', 'Jimmy']},
          {title: 'H', data: ['Henry', 'Hull']},
        ]}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        >
        </SectionList>
      </View>
    )
  }
}