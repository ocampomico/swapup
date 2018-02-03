import React, { Component } from "react";
import { View, Text } from "react-native";
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
import { connect } from "react-redux"; // 5.0.6
import "@expo/vector-icons"; 
import "redux";
import * as actions from "../actions";

class RefineSearchScreen extends Component {
  //////////////////////////////////////////////////////////////////////////////////
  // Properties automatically referred to by react-navigation navigators
  static navigationOptions = ({ navigation }) => ({
    title: "Refine Search",
    tabBarLabel: "Refine Search",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center"
    },
    
    // left header button
    headerLeft: (
      <Button
        navigate={navigation.navigate}
        medium
        icon={{ name: "arrow-back" }}
        backgroundColor='#000'
        onPress={() => navigation.navigate("search")}
      />
    ),
    drawerIcon: ({ tintColor }) => (
      <Icon type="MaterialCommunityIcons" name="user" size={25} color={tintColor} />
    )
  });

  componentWillMount() {
      this.props.navigation.navigate('result');
  }


  //////////////////
  render() {
    return (
      <View>
            <Card>      
                <SearchBar
                  lightTheme
                  round
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
            <View style={{ marginTop: 25 }}>
              <Text/>
            </View>
          
              <Button
                small
                rounded
                title='APPLY'
                backgroundColor= '#6fc69e'
                onPress={this.onButtonPress}
                //borderRadius= '87'
              /> 

            <View>
              <Text/>
            </View>             
              <Button
                small
                rounded
                title='CLEAR'
                backgroundColor= '#f08080'
                //borderRadius= '87'
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
    //borderRadius: 12
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

export default connect(null, actions)(RefineSearchScreen);
