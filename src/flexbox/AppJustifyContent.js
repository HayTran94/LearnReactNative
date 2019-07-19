import React, { Component } from "react";

import {
  View, 
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:"column", justifyContent:"space-evenly" }}> 
      <View style={{height:50, width: 50, backgroundColor:"red"}}/>
      <View style={{height:50, width: 50, backgroundColor:"green"}}/>
      <View style={{height:50, width: 50, backgroundColor:"blue"}}/>
      <View style={{height:50, width: 50, backgroundColor:"black"}}/>
      </View>
    )
  }
}