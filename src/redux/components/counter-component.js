import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View> 
        <Button
        title="Increase"
        onPress={this.props.increment}
        />
        <Text
        style={styles.counter}
        onPress={this.props.reset}
        >
          {this.props.count}
        </Text>
        <Button
        title="Decrease"
        onPress={this.props.decrement}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  }
})