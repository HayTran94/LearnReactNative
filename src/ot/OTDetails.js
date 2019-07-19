/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.apiKey = '45585262';
    this.sessionId = '2_MX40NTU4NTI2Mn5-MTU2MzE2MjA5MDk5MX52eUIybFM2VlByZkVTaEhHVS9hL2NBNVJ-fg';
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'name');
    const token = navigation.getParam('token', 'token');
    console.log(navigation);
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center'}}>
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={token}>
          <OTPublisher style={{ width: 100, height: 100 }} />
          <OTSubscriber style={{ width: 100, height: 100 }} />
        </OTSession>
        <Text> {name}</Text>
      </View>
    );
  }
}
