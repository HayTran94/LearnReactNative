
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Blink extends Component {
  state = { isShowingText: true };

  componentDidMount() {
    setInterval(()=> {
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText}
      ))
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text> {this.props.text} </Text>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Blink text='I love to blink'/>
        <Blink text='Yes blinking is so great'/>
      </View>
    )
  }
}