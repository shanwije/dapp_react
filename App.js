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
import { TabNavigator } from "react-navigation";


const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method", "Track"];
const customStyles = {
  stepIndicatorSize: 32,
  currentStepIndicatorSize: 32,
  separatorStrokeWidth: 5,
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
  stepIndicatorLabelFontSize: 10,
  currentStepIndicatorLabelFontSize: 10,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#ffffff',
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
      currentPosition: 0,
      input1 : '',
      input2 : '',
      input3 : '',
      input1_editable : true,
      input2_editable : false,
      input3_editable : false,

      input1_autoFocus : true,
      input2_autoFocus : false, 
      input3_autoFocus : false,     
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

      <View style={{ flex: 3, flexDirection:'row'}}>
              <View style={{ flex: 1, marginLeft:10,}}>
                  <StepIndicator 
                    customStyles={customStyles}
                    direction='vertical'
                    currentPosition={this.state.currentPosition}
                    stepCount= {3}
                    //labels={labels}
                  />
              </View>

        <View style={{ flex:9}}>

              <View style={styles.inputDiv}>
                    <View style={{flex:3, flexDirection:'row', marginTop:36}}>
                        <Hoshi
                            style={styles.input}
                            label={'Scan SIM No'}
                            labelStyle ={styles.inputLabelStyle}
                            borderColor={'#fec300'}
                            ref={'zero'}
                            maxLength={20}
                            onChangeText={ (text) => this.onChangeText_inputOne(text) }
                            editable = {this.state.input1_editable}
                            autoFocus ={this.state.input1_autoFocus}
                          />
                          <Icon style={styles.icon} name="barcode" size={30} color="#000" onPress={this._onPressButton}/>

                      </View>
                  <View style={{flex:3, flexDirection:'row', marginTop:36}}>
                      <Hoshi
                        style={styles.input}
                        label={'NIC/Passport No'}
                        borderColor={'#fec300'}
                        ref={'one'}
                        maxLength={20}
                        labelStyle ={styles.inputLabelStyle}
                        onChangeText={ (text) => this.onChangeText_inputTwo(text) }
                        editable = {this.state.input2_editable}
                        autoFocus ={this.state.input2_autoFocus}
                      />
                      <Icon style={styles.icon} name="camera" size={30} color="#000" onPress={this._onPressButton}/>

                 </View>
                <View style={{flex:3, flexDirection:'row',marginTop:36}}>
                    <Hoshi
                      style={styles.input}
                      label={'Mobile No'}
                      borderColor={'#fec300'}
                      ref={'two'}
                      keyboardType={'phone-pad'}
                      maxLength={20}
                      labelStyle ={styles.inputLabelStyle}
                      onChangeText={ (text) => this.onChangeText_inputThree(text) }
                      editable = {this.state.input3_editable}
                      autoFocus ={this.state.input3_autoFocus}
                    />
                   <Icon style={styles.icon} name="phone" size={30} color="#000" onPress={this._onPressButton}/>
               </View>
            </View>

        </View>

      </View>


      <View style={{ flex: 1, marginTop:20, flexDirection:'row', justifyContent:'center', alignContent:'center' }}>
        <TouchableOpacity onPress={this._submit} style={{justifyContent:'center', alignContent:'center',   borderRadius: 50, height:80 }}>
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
  onChangeText_inputOne(text){
    this.state.input1 = text;
    if(this.state.input1.length > 5){
      this.onPageChange(1);
      this.state.input2_editable = true;
    
      if(this.state.input2.length > 5){
        this.onPageChange(2);
        this.state.input3_editable = true;
      
      if(this.state.input3.length > 5){
        this.onPageChange(3);
      }
    }
  }
  }
  onChangeText_inputTwo(text){
    this.state.input2 = text;
    if(this.state.input1.length > 5){
      this.onPageChange(1);
      this.state.input1_editable = true;
      this.state.input3_editable = true;
    
      if(this.state.input2.length > 5){
        this.onPageChange(2);
        this.state.input3_editable = true;
      if(this.state.input3.length > 5){
        this.onPageChange(3);
      }
    }
  }
  }
  onChangeText_inputThree(text){
    this.state.input3 = text;
    if(this.state.input1.length > 5){
      this.onPageChange(1);
    
      if(this.state.input2.length > 5){
        this.onPageChange(2);
      
      if(this.state.input3.length > 5){
        this.onPageChange(3);
      }
    }
  }
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

  input: {
    flex:8,
    justifyContent:'center',
    alignContent:'center',
    marginRight:5,
    marginLeft:5,

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
    flex:1,
    justifyContent:'center',
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#fec300'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  icon:{
    flex:1,
    justifyContent:'flex-start',
    alignContent:'flex-end',
    textAlign:'right',
    marginRight:20,
    paddingTop:12,

  },
  inputLabelStyle:{
  fontSize:17,
  color: '#000'
  },
  inputDiv:{
    paddingRight:2,
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between', 
    alignContent:'center',
    
  }
});







