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
    //tabBarVisible: false,
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
    )
  });

  onApplyPress = () => {
    this.props.navigation.navigate('result');
  }

  onClearPress = () => {
    this.props.navigation.navigate('refine');
  }

  //////////////////
  render() {
    return (
      <View>
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
                  title='Nearest to Farthest'
                  //checked={this.state.checked}
                />
 
            </Card> 

            <View style={{ marginTop: 25 }}>
              <Text/>
            </View>
            <View>
              <Button
                rounded
                medium
                title='APPLY'
                backgroundColor= '#6fc69e'
                onPress={() => this.onApplyPress()}              
              />

              {/* WILL SERVE AS DIVIDER */}
              <View>
                <Text/>
              </View>  

              <Button
                rounded
                medium
                title='CLEAR'
                backgroundColor= '#f08080'
                onPress={() => this.onClearPress()}              
              />
          </View>
            
      </View>

    );
  }
}

const styles = {
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