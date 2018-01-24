import React, { Component } from "react";
import { View } from "react-native";
import { 
  List,
  ListItem,
  Icon, 
  Button,
  SearchBar,
  Header
  } from "react-native-elements"; // 0.19.0
import { connect } from "react-redux"; // 5.0.6
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
              
            <SearchBar
              round
              style={ styles.viewStyle }
              //onChangeText={someMethod}
              //onClearText={someMethod}
              placeholder='Type Here...' 
              />

            <View>
              <List>
                {
                  list.map((item, i) => (
                    <ListItem
                      key={i}
                      title={item.title}
                      leftIcon={{name: item.icon}}
                      onPress={() => console.log("Works!")}   
                      activeOpacity={0.7}                      
                    />
                  ))
                }
              </List>
            </View>
      </View>

    );
  }
}


const list = [
  {
    title: 'Name: John Doe' 
    /'Occupation: Hair Stylist' 
    /'Distance: 0.1 mile away',
    icon: 'account-box'
  },
  {
    title: 'Name: Becky Boot',
    title: 'Occupation: Hair Stylist',
    title: 'Distance: 0.3 miles away',
    icon: 'account-box'
  },
  {
    title: 'Name: Bugs Bunny',
    title: 'Occupation: Hair Stylist',
    title: 'Distance: 1.2 miles away',
    icon: 'account-box'
  },
  {
    title: 'Name: Space Jam',
    title: 'Occupation: Hair Stylist',
    title: 'Distance: 2.6 miles away',
    icon: 'account-box'
  },
  {
    title: 'Name: Michael Jordan',
    title: 'Occupation: Hair Stylist',
    title: 'Distance: 47 miles away',
    icon: 'account-box'
  },
]

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