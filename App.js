/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method", "Track"];
const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#aaaaaa',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#aaaaaa',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#aaaaaa',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#aaaaaa',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#aaaaaa',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
const saeInput = (
  <Sae
    label={'Email Address'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'white'}
    // TextInput props
    autoCapitalize={'none'}
    autoCorrect={false}
  />
);

export default class App extends Component<{}> {

  constructor() {
    super();
    this.state = {
      currentPosition: 2
    }
  }
  render() {
    return (
      <ScrollView style={{flex:1}}>
      <View style={{flex:1, flexDirection:'column'}}>

      <View style={{ flex: 2, flexDirection:'row'}}>
        <View style={{ flex: 1, marginLeft:10}}>
          <StepIndicator 
            customStyles={customStyles}
            direction='vertical'
            currentPosition={this.state.currentPosition}
            stepCount= {3}
            //labels={labels}
          />
        </View>

        <View style={{ flex:6}}>

        <View style={{flex:1, flexDirection:'column', justifyContent:'space-between', alignContent:'center'}}>

          <Text style={styles.title}>the title</Text>
          <Sae
            label={'Email Address'}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconColor={'white'}
          />
          <Text style={styles.title}>the title</Text>
          <Sae
            style={styles.input}
            label={'Invitation Code'}
            iconClass={FontAwesomeIcon}
          />
          <Text style={styles.title}>the title</Text>
          <Sae
            style={styles.input}
            label={'Invitation Code'}
            iconClass={FontAwesomeIcon}
          />

        </View>

        </View>

      </View>


      <View style={{ flex: 1, marginTop:20, flexDirection:'row', justifyContent:'center', alignContent:'center' }}>
      <TouchableOpacity onPress={this._onPressButton} style={{justifyContent:'center', alignContent:'center' }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
      </View>

      </View>
      </ScrollView>
    );
  }
  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    // paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 4,
    backgroundColor:'#aaaaaa'
  },
  title: {
    marginTop:10,
    paddingBottom: 2,
    textAlign: 'left',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});







