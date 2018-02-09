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
  CheckBox,
  Divider
  } from "react-native-elements"; 
import "@expo/vector-icons"; 
import "redux";

class RefineSearchScreen extends Component {
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
              centerComponent={{ text: 'REFINE SEARCH', style: { color: '#fff' } }}
              rightComponent={{ icon: 'search', color: '#fff' }}
            />

            <Card>
                           
                <SearchBar
                  lightTheme
                  //onChangeText={someMethod}
                  //onClearText={someMethod}
                  placeholder='Search Location' 
                  />
                <CheckBox
                  title='Top Rated'
                  //checked={this.state.checked}
                />
                <CheckBox
                  title='Popluar Search'
                  //checked={this.state.checked}
                />
                <CheckBox
                  title='Nearst to Fartherst'
                  //checked={this.state.checked}
                />
 
            </Card> 
          
              <Button
                styles={styles.buttonContainer}
                large
                title='APPLY'
                backgroundColor= '#6fc69e'
                borderRadius= '87'
              />
              <Divider style={{ backgroundColor: 'lightTheme'}} />
              
              <Button
                large
                title='CLEAR'
                backgroundColor= '#f08080'
                borderRadius= '87'
              />
            
      </View>

    );
  }
}

const styles = {
  buttonContainer: {
    position: 'center',
    bottom: 87,
    left: 10,
    right: 10,
    borderRadius: 12
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

export default RefineSearchScreen;
