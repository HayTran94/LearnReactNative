import React, { Component } from 'react';
import {
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"flex-end"}}>
        <View style={{width:50, height:100, backgroundColor: 'powderblue'}}/>
        <View style={{width:50, height:350, backgroundColor: 'skyblue'}}/>
        <View style={{width:100, height:50,backgroundColor: 'steelblue'}}/>
      </View>
    )
  }
}