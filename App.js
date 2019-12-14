import React , {Component} from 'react';
import {Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Registration from './Registration';
export default class Surakash extends Component {
   constructor() {
     super();
     this.state = {
       isVisible : true,
     }
   }

   Hide_Splash_Screen =() => {
     this.setState({
       isVisible : false
     });
   }
   componentDidMount() {
     var me = this;
     setTimeout(function() {
       me.Hide_Splash_Screen();
     }, 5000)

   }

   render()  
   {  
       let Splash_Screen = (  
            <View style={styles.SplashScreen_RootView}>  
                <View style={styles.SplashScreen_ChildView}>  
                      <Image source={require('./assest/Images/splashscreen.png')}  
                   style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
               </View>  
            </View> )  
        return(  
            
            <View style = { styles.MainContainer }> 
              <Registration></Registration> 
                {  
                 (this.state.isVisible === true) ? 
                 Splash_Screen : null  
               }  
           </View>  
             );  
   } 
  }
   const styles = StyleSheet.create(  
    {  
        MainContainer:  
        {  
            flex: 1,  
            
            paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
        },  
       
        SplashScreen_RootView:  
        {  
            justifyContent: 'center',  
            flex:1,  
            margin: 10,  
            position: 'absolute',  
            width: '100%',  
            height: '100%',  
          },  
       
        SplashScreen_ChildView:  
        {  
            justifyContent: 'center',  
            alignItems: 'center',  
            backgroundColor: '#00BCD4',  
            flex:1,  
        },  
    });  
