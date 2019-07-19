import React, { Component } from 'react';
import {
  View,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:"row", justifyContent:"flex-end", alignItems: "center"}}>
        <View style={{width: 50, height: 50, backgroundColor:"red", alignSelf:"flex-end"}}/>
        <View style={{width: 50, height: 50, backgroundColor:"green" }}/>
        <View style={{width: 50, height: 50, backgroundColor:"blue" }}/>
        <View style={{width: 50, height: 50, backgroundColor:"black"}}/>
      </View>
    )
  }
}