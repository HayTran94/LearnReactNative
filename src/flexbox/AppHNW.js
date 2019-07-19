import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{height:300, flexDirection:"column", justifyContent:"center"}}>
        <View style={{flex: 1, width:250, flexDirection:"row"}}>
          <View style={{flex: 1, backgroundColor:"powderblue"}}/>
          <View style={{flex: 1, backgroundColor:"skyblue"}}/>
          <View style={{flex: 1, backgroundColor:"steelblue"}}/>
        </View>
        <View style={{flex: 2, width:100, backgroundColor:"green"}}/>
        <View style={{flex: 3, width:150, backgroundColor:"blue"}}/>
      </View>
    )
  }
}