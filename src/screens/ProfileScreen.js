import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  Icon
} from 'react-native';
//import { Rating } from 'react-native-elements'; // 0.19.0

import "@expo/vector-icons"; // 6.2.2

const remote = 'https://images.maskworld.com/is/image/maskworld/bigview/john-doe-foam-latex-mask--mw-117345-1.jpg';

export default class ProfileScreen extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: "Home",
    tabBarLabel: "Home",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center"
    },
    
    // left header button
    headerLeft: (
      <Button
        navigate={navigation.navigate}
        medium
        icon={{ name: "menu" }}
        backgroundColor='#105'
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),
    drawerIcon: ({ tintColor }) => (
      <Icon type="entype" name="home" size={25} color={tintColor} />      
    )
  });
  render() {
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
    fontStyle: 'bold',
    textAlign:'center',
    width: 120,
  },
  navBarButton1: {
    color: 'blue',
    fontSize: 25,
    fontStyle:'bold',
    textAlign: 'center',
    width: 180,
  },
  navBar1: {
    flexDirection: 'row',
    height: 40,
    backGroundColor: 'white',
  },
  navBar2:{
    height: 100,
    backgroundColor: '#1EAAF5',
  },
});

<<<<<<< HEAD
AppRegistry.registerComponent('ProfileScreen', () => ProfileScreen);
=======
const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default connect(null, actions)(ProfileScreen);
>>>>>>> 9dddc68c3a026abae2a7b624b974485c7d5ff149
