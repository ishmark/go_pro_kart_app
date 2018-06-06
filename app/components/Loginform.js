import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  CheckBox
} from 'react-native';

export default class Loginform extends Component {
    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
            route: 'Login',
            username: '',
            password: '',
            rememberpassword: true,
        };
    }

    toggleSwitch() {
        this.setState({ rememberpassword: !this.state.rememberpassword });
    }
  
    userSignIn (e) {
        this.props.onSignUp(this.state.username, this.state.password);
        e.preventDefault();
    }
  
    toggleRoute (e) {
        let alt = (this.state.route === 'Login');
        this.setState({ route: alt });
        e.preventDefault();
    }
    render() {
        let alt = (this.state.route === 'Login');

        return(
           <ScrollView style={styles.regform}>
          <Text style={styles.header}>Go Pro Kart</Text>

          <TextInput 
          style={styles.textinput} 
          placeholderTextColor="gray"
          placeholder='User Name'
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })} 
          underlineColorAndroid={'#ef589c'} />


          <TextInput 
          style={styles.textinput} 
          placeholderTextColor="gray"
          placeholder='Password'
          autoCorrect={false} 
          secureTextEntry={this.state.rememberpassword}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })} 
          underlineColorAndroid={'#ef589c'} />


            <View style={{ flexDirection: 'column'}}>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                onValueChange={this.toggleSwitch}
                value={!this.state.rememberpassword}
                />
                <Text> Remember Password</Text>
            </View>
            </View>


          <View style={{margin: 7}}/>
          
          {/* <TouchableOpacity style={styles.button}> */}
          <Button onPress={(e) => this.userSignIn(e)} color='#ef589c' title={this.state.route}/>
                <Text style={{fontSize: 16, color: '#fff'}} onPress={(e) => this.toggleRoute(e)}>{alt}</Text>
          {/* </TouchableOpacity> */}
      
      </ScrollView> 
        );
    }
}

const styles = StyleSheet.create({
    regform: {
      padding: 20,
    },
    header: {
        fontSize: 50,
        color: '#ef589c',
        paddingBottom: 10,
        marginBottom: 40,
      // borderBottomColor: '#ef589c',
      // borderBottomWidth: 1
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#000',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
});
