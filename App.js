import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

import Regform from "./app/components/Regform";
// import Loginform from "./app/components/Loginform";


export default class App extends Component {
  render() {
    return (
      
      <ImageBackground
        source={require('./images/login_bg.jpg')}
        style={styles.container}>
      <View>
         <Regform />
      </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: undefined,
      height: undefined,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      alignItems: 'center',

  },
});
