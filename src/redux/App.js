import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { Provider, connect } from 'react-redux';
import store from './store/store';
import CounterContainer from './containers/counter-container';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CounterContainer/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
