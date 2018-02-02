import React, { Component } from "react";
import { View } from "react-native";
import { 
  List,
  ListItem,
  Icon, 
  Button,
  SearchBar,
  Header,
  Card,
  Text
  } from "react-native-elements"; // 0.19.0
import "@expo/vector-icons"; // 6.2.2
import "redux"; // 3.7.2

class ProfileScreen extends Component {
  //////////////////////////////////////////////////////////////////////////////////
  // Properties automatically referred to by react-navigation navigators
  static navigationOptions = ({ navigation }) => ({
    //tabBarVisible: false,
    title: "My Profile",
    tabBarLabel: "My Profile",
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
        backgroundColor=''
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),
    
    // right header button
    headerRight: (
      <Button
        navigate={navigation.navigate}
        medium
        icon={{ name: "edit" }}
        backgroundColor= '#3d434c'
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),

    drawerIcon: ({ tintColor }) => (
      <Icon type="MaterialCommunityIcons" name="user" size={25} color={tintColor} />
      
    )
  });


  //////////////////
  render() {
    return (
      <View>
            <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'SEARCH RESULTS', style: { color: '#fff' } }}
              rightComponent={{ icon: 'search', color: '#fff' }}
            />

      <Card title="Name: John Doe">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
        
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="Occupation: Hair Stylist"
        
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
      <Card title="Name: Becky Boot">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>JB</Text>
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="Occupation: Hair Stylist"
        
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
      <Card title="Name: Bugs Benny">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>BB</Text>
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="Occupation: Hair Stylist"
        
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
      <Card title="Name: Space Jam">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>SJ</Text>
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="Occupation: Hair Stylist"
        
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
      <Card title="Name: Michael Jordan">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>MJ</Text>
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="Occupation: Hair Stylist"
        
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
    </View>
    

    );
  }
}


// const list = [
//   {
//     title: 'Name: John Doe',
//     title: 'Occupation: Hair Stylist', 
//     title: 'Distance: 0.1 mile away',
//     icon: 'account-box'
//   },
//   {
//     title: 'Name: Becky Boot',
//     title: 'Occupation: Hair Stylist',
//     title: 'Distance: 0.3 miles away',
//     icon: 'account-box'
//   },
//   {
//     title: 'Name: Bugs Bunny',
//     title: 'Occupation: Hair Stylist',
//     title: 'Distance: 1.2 miles away',
//     icon: 'account-box'
//   },
//   {
//     title: 'Name: Space Jam',
//     title: 'Occupation: Hair Stylist',
//     title: 'Distance: 2.6 miles away',
//     icon: 'account-box'
//   },
//   {
//     title: 'Name: Michael Jordan',
//     title: 'Occupation: Hair Stylist',
//     title: 'Distance: 47 miles away',
//     icon: 'account-box'
//   },
// ]

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  },
  viewStyle: {
    flexDirection: 'center',
    flex: 1,
    height: 50,
    width: 50,
    alignItems: 'row'
  },
  textStyle: {
    alignItems: 'center',

  }
};

export default ProfileScreen;
