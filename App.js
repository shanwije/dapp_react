/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import React , { Component }  from 'react';
// import {
//   AppRegistry,
//   Text,
// } from 'react-native';
// import { StackNavigator } from 'react-navigation';

// export default class HomeScreen extends Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     return <Text>Hello, Navigation!</Text>;
//   }
// }

// export const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
// });

// AppRegistry.registerComponent('SimpleApp', () => SimpleApp);


import React , { Component }  from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Button
          onPress={() => navigate('Chat', { user : 'shan', desig : 'engineer'})}
          title="to my 2nd screen user shan" 
        />
        <Button
          onPress={() => navigate('Chat', { user : 'batman', desig : 'super hero'})}
          title="to my 2nd screen user batman"
        />
        <Button
          onPress={() => navigate('MyScreen')}
          title="to my 3rd screen"
        />
      </View>
    );
  }
}

class ChatScreen extends Component{
  static navigationOptions = {
    title: 'the 2nd screen',
  }

render(){
  const { params } = this.props.navigation.state;
  return(
    <View>
      <Text>Hello I'm {params.user}</Text>
      <Text>and my Designation is {params.desig}</Text>
    </View>
  );
}
}

class MyScreen extends Component{
  static navigationOptions = {
    title: 'the 3nd screen',
  }

render(){
  const { navigate } = this.props.navigation;
  return(
    <View>
      <Text>Hello Shan ZZZZZZZZ</Text>
      <Button
          onPress={() => navigate('Chat')}
          title="to my 2nd screen"
        />
    </View>
  );
}
}

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  MyScreen : { screen: MyScreen}
});

export default class App extends Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
