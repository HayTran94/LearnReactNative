import React, {Component } from 'react';

import {
  View,
  Text,
  Button,
  Image,
} from 'react-native';
 
export default class App extends Component {

  componentDidMount() {
    console.log('componentDidMount');
  }

  async request() {
    const res = await fetch('8.8.8.8', {
      method: 'GET',
    });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent:"center"}}>
        <Text>OK</Text>
        <Button onPress={() => {
          this.request();
          console.log('request to 8.8.8.8');
        }}
        title='Request'></Button>
      </View>
    )
  }
}