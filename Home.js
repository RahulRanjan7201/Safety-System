import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Home extends React.Component {
render() {
    return (
        <View style= {styles.container}>
            We have No Frieds
        </View>
    )
}
}

const styles = StyleSheet.create( {
    container: {
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    }
})