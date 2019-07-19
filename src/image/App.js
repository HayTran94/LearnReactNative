import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import abc from './1.png';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <Image style={{width:200, height: 100}} source={a}></Image>
      </View>
    )
  }
}