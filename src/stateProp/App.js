import React, {Component} from 'react';
import  {
  View,
  TextInput
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }
  render() {
    console.log('render');
    const { input } = this.state;
    return (
      <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        <TextInput
        onChangeText={({text}) => {
          this.setState({input: text});
        }}
        value={input}
        style={{backgroundColor:'red'}}
        >

        </TextInput>
      </View>
    )
  }
}