
import React, { Component } from 'react';
import {
  Button,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{height:100, width:50, backgroundColor:"red", position:"relative"}}/>
        <View style={{height:200, width:50, backgroundColor:"green"}}/>
        {/* <View style={{height:150, width:50, backgroundColor:"blue"}}/>
        <View style={{height:200, width:50, backgroundColor:"yellow"}}/>
        <View style={{height:150, width:50, backgroundColor:"blue"}}/> */}
        <Button onPress={() => {
          console.log(new Date().getTime());
        }}  title="Press Me" />
      </View>
    )
  }
}