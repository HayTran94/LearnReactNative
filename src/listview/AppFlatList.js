import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native'


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <FlatList 
        style={{flex:1}}
        data={[
          {key: 'Devin'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item, index}) => <Text style={{color:'red'}}>{item.key + " " + index} </Text>}
        />
      </View>
    )
  }
}