import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const token1 = 'T1==cGFydG5lcl9pZD00NTU4NTI2MiZzaWc9MzAyNDdhNzFhYjMyMjdmZDEwNGNjZTk3ZmZiYzQ0YjUyN2QyODA4OTpzZXNzaW9uX2lkPTJfTVg0ME5UVTROVEkyTW41LU1UVTJNekUyTWpBNU1EazVNWDUyZVVJeWJGTTJWbEJ5WmtWVGFFaEhWUzloTDJOQk5WSi1mZyZjcmVhdGVfdGltZT0xNTYzMTYyNzMxJnJvbGU9cHVibGlzaGVyJm5vbmNlPTE1NjMxNjI3MzEuMjMxNTIxMDQzNjYxMTE=';
    const token2 = 'T1==cGFydG5lcl9pZD00NTU4NTI2MiZzaWc9ZGVhMjA5ZWQ3YzM3M2IwNmM4MzFmMTFhODdmYjA1MWVlZDFkM2EwNzpzZXNzaW9uX2lkPTJfTVg0ME5UVTROVEkyTW41LU1UVTJNekUyTWpBNU1EazVNWDUyZVVJeWJGTTJWbEJ5WmtWVGFFaEhWUzloTDJOQk5WSi1mZyZjcmVhdGVfdGltZT0xNTYzMTY1MzY5JnJvbGU9cHVibGlzaGVyJm5vbmNlPTE1NjMxNjUzNjkuNTg3Mzg1OTc2OTEyMw==';
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, alignContent: 'center'}}>
        <Button
        title="Token 1"
        onPress={() => navigate('Details', {name: 'Token 1', token: token1})}
      />
      <Button
        title="Token 2"
        onPress={() => navigate('Details', {name: 'Token 2', token: token2})}
      />
       <Button
        title="Log"
        onPress={() => console.log('ok')}
      />
      </View>
      
    );
  }
}

