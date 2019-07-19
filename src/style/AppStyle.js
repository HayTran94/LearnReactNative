import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red then bigBlue</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});