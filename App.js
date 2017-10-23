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
  Input,
  List, 
  FlatList,
  StatusBar,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hoshi } from 'react-native-textinput-effects';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SignatureCapture from 'react-native-signature-capture';


import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;



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

const bc = '#fe7013';
const closeIcon = (<Icon name="ios-close-circle" size={25} color="red" style ={{textAlign:'center', marginLeft:10}} />);
const checkIcon = (<Icon name="ios-checkmark-circle" size={25} color="green" style ={{textAlign:'center', marginLeft:10}} />);
const refreshIcon = (<Icon name="ios-refresh-circle" size={25} color="yellow" style ={{textAlign:'center', marginLeft:10}} />);
const forwardIcon = (<Icon name="ios-arrow-forward" size={25} color="black" style ={{textAlign:'center', marginLeft:10}} />);

const nf = 'NIC BACK';
const nb = 'NIC FRONT';

const t1 = '09:23 AM';
const t2 = '11:53 AM';
const t3 = '10:24 AM';

const rejList = [
  {
    icon: closeIcon,
    num: '0771234567',
    issue: nf,
    date: '22/09/2017',
    time: t1
  },
  {
    icon: closeIcon,
    num: '0771234534',
    issue: nb,
    date: '25/09/2017',
    time: t2
  },
  {
    icon: closeIcon,
    num: '0771354567',
    issue: nf,
    date: '02/09/2017',
    time: t3
  },

];

const allList = [
  {
    icon: checkIcon,
    num: '0771234567',
    issue: nf,
    date: '22/09/2017',
    time: t3
  },
  {
    icon: closeIcon,
    num: '0771234567',
    issue: nb,
    date: '22/09/2017',
    time: t1
  },
  {
    icon: checkIcon,
    num: '0771234567',
    issue: nf,
    date: '22/09/2017',
    time: t2
  },
  {
    icon: refreshIcon,
    num: '0771234567',
    issue: nf,
    date: '22/09/2017',
    time: t1
  },
  {
    icon: checkIcon,
    num: '0771234534',
    issue: nb,
    date: '25/09/2017',
    time: t2
  },
  {
    icon: checkIcon,
    num: '0771354567',
    issue: nf,
    date: '02/09/2017',
    time: t1
  },{
  icon: closeIcon,
  num: '0771234567',
  issue: nb,
  date: '22/09/2017',
  time: t1
},
  {
    icon: checkIcon,
    num: '0771354567',
    issue: nf,
    date: '02/09/2017',
    time: t2
  },
  {
    icon: refreshIcon,
    num: '0771354567',
    issue: nb,
    date: '02/09/2017',
    time: t3
  },
  {
    icon: checkIcon,
    num: '0771354567',
    issue: nf,
    date: '02/09/2017',
    time: t1
  },{
  icon: closeIcon,
  num: '0771234567',
  issue: nb,
  date: '22/09/2017',
  time: t1
},

];
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

//-----------------------------------------------------------------------------------

class SimChange extends Component<{}> {




  static navigationOptions = {
    title: 'Sim Change',
  };

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
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAwareScrollView
      style={{ flex:1}}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
    <View>

 </View>
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
                          <Icon style={styles.icon} name="ios-barcode" size={30} color="#000" onPress={this._onPressButton} />

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
                      <Icon style={styles.icon} name="ios-camera" size={30} color="#000" onPress={this._onPressButton}/>

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
                   <Icon style={styles.icon} name="ios-phone-portrait" size={30} color="#000" onPress={this._onPressButton}/>
               </View>
            </View>

        </View>

      </View>


      <View style={{ flex: 1, marginTop:20, flexDirection:'row', justifyContent:'center', alignContent:'center' }}>
        <TouchableOpacity onPress={() => navigate('Astatus')} style={{justifyContent:'center', alignContent:'center',   borderRadius: 50, height:80 }}>
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

//-----------------------------------------------------------------
// class ActivationStatus extends Component<{}> {

// render(){
//   return(
//     <View>
//       <Text>Hello world</Text>
//     </View>
//   );
// }
// }

class RejectedScreen extends Component {




  renderRow(){
    var rows = [];
    for (var i=0; i < rejList.length; i++) {
        rows.push(
          <View key={i} style={styles.listVView_row} >
          <View style={styles.listView_col1}>
            {rejList[i].icon}
          </View>
          <View style={styles.listView_col2}>
            <Text style={styles.rowText}>{rejList[i].num}</Text>
          </View>
          <View style={styles.listView_col3}>
            <Text style={styles.rowText}>{rejList[i].issue}</Text>
          </View>
          <View style={styles.listView_col4}>
            <Text style={styles.rowText}>{rejList[i].date}</Text>
          </View>
          <View style={styles.listView_col5}>
            <Text style={styles.rowText}>{rejList[i].date}</Text>
            <Text style={styles.rowText}>{rejList[i].time}</Text>
          </View>
          <View key={i} style={styles.listView_col6} >
          {forwardIcon} 
          </View> 
      </View>
        );
    }
    return rows;
  } 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
<View style={styles.listView_wholePage}>
        {this.renderRow()}
        </View>
        </ScrollView>
    )
  }
  _onPressMore() {
    Alert.alert("clicked");
  }

}
//-----------------------------------------------------------
class AllScreen extends Component {
  renderRow(){
    var rows = [];
    for (var i=0; i < allList.length; i++) {
        rows.push(
          <View key={i} style={styles.listVView_row} >
          <View style={styles.listView_col1}>
            {allList[i].icon}
          </View>
          <View style={styles.listView_col2}>
            <Text style={styles.rowText}>{allList[i].num}</Text>
          </View>
          <View style={styles.listView_col3}>
            <Text style={styles.rowText}>{allList[i].issue}</Text>
          </View>
          <View style={styles.listView_col4}>
            <Text style={styles.rowText}>{allList[i].date}</Text>
          </View>
          <View style={styles.listView_col5}>
            <Text style={styles.rowText}>{allList[i].date}</Text>
            <Text style={styles.rowText}>{allList[i].time}</Text>
          </View>
          <View key={i} style={styles.listView_col6} >
          {forwardIcon} 
          </View> 
      </View>
        );
    }
    return rows;
  } 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
      <View style={styles.listView_wholePage}>
      {this.renderRow()}
      </View>
      </ScrollView>
    )
  }
  _onPressMore() {
    Alert.alert("clicked");
  }
}

class Signature extends Component{
  render(){
    return(
  <View style={{flex:1, flexDirection:'row'}}>
  <SignatureCapture style={{flex:1, flexDirection:'row'}} />
  </View>
      
    );
  }
}

//-----------------------------------------------------------

//-----------------------------------------------------------------
const MainScreenNavigator = TabNavigator({
  REJECTED: { screen: RejectedScreen },
  ALL: { screen: AllScreen },
  SIGN_PAGE : {screen: Signature},

});


export const SimpleApp = StackNavigator({
  Home: { screen: SimChange,
    cardStyle: {backgroundColor: '#111'}
  
  },
  Astatus : { screen : MainScreenNavigator,
  navigationOptions: {title: 'Activation Status',},
},
});



export default class App extends Component {
  render() {
  return( 
  <View style={{flex:1}}>
     <StatusBar
     backgroundColor='#fec300'
     barStyle="dark-content"

   />
   <SimpleApp />
  </View>
 );
  }
}


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
    flex: 8,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 5,
    marginLeft: 5,

    //backgroundColor:'#aaaaaa'
  },
  title: {
    marginTop: 20,
    paddingBottom: 2,
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
    textAlign: 'left',

  },
  button: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#fec300'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  icon: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-end',
    textAlign: 'right',
    marginRight: 20,
    paddingTop: 12,

  },
  inputLabelStyle: {
    fontSize: 17,
    color: '#000'
  },
  inputDiv: {
    paddingRight: 2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',

  },
  listView_wholePage: {
    flex:1,
    flexDirection: 'column',
  },
  listVView_row: {
    flexDirection: 'row',
    height: 70,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff',
  },
  listView_col1: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:20,
    paddingTop:20,
  },
  listView_col2: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:20,
    paddingTop:20,
  },
  listView_col3: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:20,
    paddingTop:20,
  },
  listView_col4: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:20,
    paddingTop:20,
  },
  listView_col5: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:20,
    paddingTop:20,
  },
  listView_col6: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:20,
    paddingTop:20,
    paddingRight:10,
  },
  rowText : {
    flex:1,
    flexDirection: 'column',
    fontSize: 10,
    color:'#000',
    textAlign: 'center'
  }
  

});







