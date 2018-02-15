import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { MapView } from 'expo';
//import { connect } from 'react-native';
import { Icon, Header, SearchBar, Button } from 'react-native-elements'; // 0.19.0
import { connect } from "react-redux";
import * as actions from "../actions";
import "@expo/vector-icons"; // 6.2.2

class ProfileScreen extends Component {
  //////////////////////////////////////////////////////////////////////////////////
  // Properties automatically referred to by react-navigation navigators
  static navigationOptions = ({ navigation }) => ({
    //tabBarVisible: false,
    title: "Profile",
    tabBarLabel: "Profile",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center"
    },
    
    headerLeft: (
      <Button
        navigate={navigation.navigate}
        medium
        icon={{ name: "menu" }}
        backgroundColor='#000'
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),

    drawerIcon: ({ tintColor }) => (
      <Icon type="entypo" name="user" size={25} color={tintColor} />
    )
  });


  render() {
    const remote = 'https://stroops.com/wp-content/uploads/2016/11/placeholder-profile-male-500x500.png';
    const resizeMode = 'cover';
    const text = 'John Doe';

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'left',
            top: 0,
            left:0 ,
            width: '100%',
            height: '50%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={{ uri: remote }}
          />
        </View>
        <View
          style={{
            backgroundColor: 'transparent',
            justifyContent: 'top',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              fontStyle: 'italic',
            }}
          >
            {text}
          </Text>
        </View>
         <View style={styles.navBar}>
          <Text style={styles.navBarButton}>7 Exchanges </Text>
          <View style={styles.borderSeparator}/>
          <Text style={styles.navBarButton}>8k Following </Text>
           <View style={styles.borderSeparator}/>
          <Text style={styles.navBarButton}>12k Followers</Text>
        </View>
        <View style={styles.navBar1}>
        <Text style={styles.navBarButton1}> SKILL </Text>
        <View style={styles.borderSeparator}/>
        <Text style={styles.navBarButton1}> LOOKING FOR </Text>
        </View>
         <View style={styles.navBar1}>
        <Text style={styles.navBarButton1}> CHAPEL GOER </Text>
        <View style={styles.borderSeparator}/>
        <Text style={styles.navBarButton1}> CAR WASHER </Text>
        </View>
        <View style={styles.navBar2}>
 <Button onPress={this._onPress} title="SWAPUP" color="#FFFFFF"  size={40} accessibilityLabel="Tap on Me"/>
        </View>
      </View>
    
    );
  }
}
const styles = StyleSheet.create({
    navBar: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#1EAAF5'
  },
  borderSeparator: {
    borderRightWidth: 4,
  },
   navBarButton: {
    color: '#FFFFFF',
    fontSize: 20,
    //fontStyle: 'bold',
    textAlign:'center',
    width: 120,
  },
  navBarButton1: {
    color: 'blue',
    fontSize: 25,
    //fontStyle:'bold',
    textAlign: 'center',
    width: 180,
  },
  navBar1: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'white',
  },
  navBar2:{
    height: 100,
    backgroundColor: '#1EAAF5',
  },
});

export default connect(null, actions)(ProfileScreen);