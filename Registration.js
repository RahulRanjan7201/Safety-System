import React , {Component}from 'react';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';
  import Icon from 'react-native-vector-icons/AntDesign'
  
export default class Registration extends Component{
  dataSource=[];
  loading = false;
  constructor(props) {
         super(props);
         this.state = {
             emailId : '',
             name:'',
             mobile:'',
             password:'', 
         }
         
     }  
    
     onSubmitClick = (viewId) => {
       this.validateForm();
     }

    validateForm() {
      if(!this.state.emailId) {
        Alert.alert("Alert", "Please Enter Email Address" );
        return;
      }
       if(!this.state.name) {
        Alert.alert("Alert", "Please Enter Name");
        return;
      } 
      if(!this.state.mobile) {
        Alert.alert("Alert", "Please Enter Mobile Number");
        return;
      }
      if(!this.state.password) {
        Alert.alert("Please enter password");
        return;
      }
      this.saveFormData()
    }
    async saveFormData() {

        await fetch('http://192.168.1.228:3000/?key=a65aba16b4035268d20f69877a0f9ca0b9b3ba2b', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(this.state),
      }).then((response) => response.text())
      .then((responseData) => {
          console.log("Response:",JSON.stringify(responseData));
       }).catch((error) => {
         console.log(error);
              Alert.alert('problem while adding data');
          })
      .done();
      
    }
    render() {
          return (
            <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon style={styles.inputIcon}  name="user" />
          
          <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

        <View style={styles.inputContainer}>
        <Icon style={styles.inputIcon}  name="mail" />
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(emailId) => this.setState({emailId})}/>
        </View>
        <View style={styles.inputContainer}>
        <Icon style={styles.inputIcon}  name="mobile1" />
          <TextInput style={styles.inputs}
              placeholder="Mobile"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(mobile) => this.setState({mobile})}/>
        </View>

        <View style={styles.inputContainer}>
        <Icon style={styles.inputIcon}  name="key" />
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onSubmitClick('sign_up')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
          );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00b5ec',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:20,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    signupButton: {
      backgroundColor: "#FF4DFF",
    },
    signUpText: {
      color: 'white',
    }
  });