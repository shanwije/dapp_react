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
  Alert,
  KeyboardAvoidingView,
  Input
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hoshi } from 'react-native-textinput-effects';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method", "Track"];
const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fec300',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fec300',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fec300',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fec300',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: '#aaaaaa',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

const hoshiInput = (
  <Hoshi
    label={'Town'}
    // this is used as active border color
    borderColor={'#b76c94'}
    // this is used to set backgroundColor of label mask.
    // please pass the backgroundColor of your TextInput container.
    backgroundColor={'#F9F7F6'}
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
      <KeyboardAwareScrollView
      style={{ flex:1}}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
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

        <View style={styles.inputDiv}>
            <Icon style={styles.icon} name="barcode" size={20} color="#000" onPress={this._onPressButton}/>

          
          <Hoshi
            style={styles.input}
            label={'Scan SIM No'}
            labelStyle ={styles.inputLabelStyle}
            borderColor={'#fec300'}
            ref={'zero'}
          />

          <Icon style={styles.icon} name="camera" size={20} color="#000" onPress={this._onPressButton}/>
          <Hoshi
            style={styles.input}
            label={'NIC/Passport No'}
            borderColor={'#fec300'}
            autoFocus = {true}
            ref={'one'}
            labelStyle ={styles.inputLabelStyle}
          />

          <Icon style={styles.icon} name="phone" size={20} color="#000" onPress={this._onPressButton}/>
          <Hoshi
            style={styles.input}
            label={'Mobile No'}
            borderColor={'#fec300'}
            ref={'two'}
            keyboardType={'phone-pad'}
            labelStyle ={styles.inputLabelStyle}
          />


        </View>

        </View>

      </View>


      <View style={{ flex: 1, marginTop:20, flexDirection:'row', justifyContent:'center', alignContent:'center' }}>
      <TouchableOpacity onPress={this._submit} style={{justifyContent:'center', alignContent:'center' }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Change SIM</Text>
          </View>
        </TouchableOpacity>
      </View>

      </View>
      </KeyboardAwareScrollView>
    );
  }
  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
  _onPressButton() {
    Alert.alert('Sorry', 'This feature is still under construction');
  }
  _submit(){
    Alert.alert('You tapped the submit button!');
  }
  // getVisibleRows = (visibleRows) => {
  //   const visibleRowNumbers = Object.keys(visibleRows.s1).map((row) => parseInt(row));
  //   this.setState({currentPage:visibleRowNumbers[0]})
  // }

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
    marginRight:5,
    marginLeft:5,
    padding:20

    //backgroundColor:'#aaaaaa'
  },
  title: {
    marginTop:20,
    paddingBottom: 2,
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
    textAlign: 'left',
    
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#fec300'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 25
  },
  icon:{
    textAlign:'right',
    marginRight:20,
    paddingTop:30,

  },
  inputLabelStyle:{
  fontSize:17,
  },
  inputDiv:{
    paddingLeft:10,
    paddingRight:10,
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between', 
    alignContent:'center',
  }
});







