import React, { Component } from 'react';
import {
  Alert,
  View, 
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirectio:"column", justifyContent:'center', alignItems:'center'}}>
        <TouchableHighlight onPress={()=> {
          Alert.alert('You tapped the button!');
        }}
        onLongPress={() => {
          Alert.alert('You long press the button!');
        }}
        > 
          <View style={{backgroundColor: "green"}}>
            <Text style={{backgroundColor: "white"}}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={()=> {
          Alert.alert('You tapped the button!');
        }}
        onLongPress={() => {
          Alert.alert('You long press the button!');
        }}
        > 
          <View style={{backgroundColor: "green"}}>
          <Text style={{backgroundColor: "white"}}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback onPress={()=> {
          Alert.alert('You tapped the button!');
        }}
        onLongPress={() => {
          Alert.alert('You long press the button!');
        }}
        > 
          <View style={{backgroundColor: "green"}}>
          <Text style={{backgroundColor: "white"}}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback onPress={()=> {
          Alert.alert('You tapped the button!');
        }}
        onLongPress={() => {
          Alert.alert('You long press the button!');
        }}
        > 
          <View style={{backgroundColor: "green"}}>
          <Text style={{backgroundColor: "white"}}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}