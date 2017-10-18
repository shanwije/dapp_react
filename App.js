/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

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

export default class App extends Component<{}> {

  constructor() {
    super();
    this.state = {
      currentPosition: 2
    }
  }
  render() {
    return (
      <View style={{flex:1, flexDirection:'column'}}>

      <View style={{ flex: 2, flexDirection:'row'}}>
        <View style={{ flex: 1, margin:10 }}>
          <StepIndicator style={{flex: 1, flexDirection: 'row', alignContent:'center', justifyContent:'center' }}
            customStyles={customStyles}
            direction='vertical'
            currentPosition={this.state.currentPosition}
            stepCount= {3}
            //labels={labels}
          />
        </View>

        <View style={{backgroundColor:'#fe7013', flex:6}}>
        
        </View>

      </View>


      <View style={{ flex: 1, flexDirection:'row' }}>
        <Text>Hello World</Text>
      </View>
      
      </View>
    );
  }
  onPageChange(position) {
    this.setState({ currentPosition: position });
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







