import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
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
    return (
      <View style={styles.viewStyle}>
          <Text>ProfileScreen</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default connect(null, actions)(ProfileScreen);