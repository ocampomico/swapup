import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { 
  List,
  ListItem,
  Icon, 
  Button,
  SearchBar,
  Header
  } from "react-native-elements"; // 0.19.0
import AutoSuggest from "react-native-autosuggest";
import { connect } from "react-redux"; // 5.0.6
import * as actions from "../actions";
import "@expo/vector-icons"; // 6.2.2
import "redux"; // 3.7.2

class HomeScreen extends Component {
  //////////////////////////////////////////////////////////////////////////////////
  // Properties automatically referred to by react-navigation navigators
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
        backgroundColor='#000'
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),
    drawerIcon: ({ tintColor }) => (
      <Icon type="entype" name="home" size={25} color={tintColor} />      
    )
  });

  onButtonPress = () => {
    this.props.navigation.navigate('result');
  }

  //////////////////
  render() {
    return (
      <View>       
            {/* <SearchBar
              round
              style={ styles.viewStyle }
              //onChangeText={someMethod}
              //onClearText={someMethod}
              placeholder='Type Here...' 
              /> */}

             <AutoSuggest
                containerStyles={{ marginTop: 10, padding: 5, width: 450 }}
                otherTextInputProps={{ editable: true }}
                textInputStyles={{
                  width: 300,
                  paddingLeft: 10,
                  fontSize: 12,
                  backgroundColor: '#808080',
                  height: 40,
                }}
                onChangeText={selection => console.log(`you selected ${selection}`)}
                clearBtn={null /* myOptionalCustomClearBtn */}
                terms={[
                  'Hair Stylist',
                  'Photographer',
                  'Artist',
                  'Chef',
                  'Coach',
                  'Graphic Designer',
                  'Babysitter',
                  'Lawn Care',
                  'Tutor',
                  'Musician',
                ]}
                placeholder="Search a Service"
                placeholderTextColor="darkgrey"
              />
                <ScrollView>
            <View>
              <List>
                {
                  list.map((item, i) => (
                    <ListItem
                      key={i}
                      title={item.title}
                      leftIcon={{name: item.icon}}
                      onPress={() => this.onButtonPress()}              
                      activeOpacity={0.7}                      
                    />
                  ))
                }
              </List>
            </View>
            </ScrollView>
      </View>

    );
  }
}


const list = [
  {
    title: 'Hair Stylist',
    icon: 'content-cut'
  },
  {
    title: 'Photographer',
    icon: 'camera'
  },
  {
    title: 'Artist',
    icon: 'brush'
  },
  {
    title: 'Chef',
    icon: 'cake'
  },
  {
    title: 'Coach',
    icon: 'timer'
  },
  {
    title: 'Graphic Designer',
    icon: 'rate-review'
  },
  {
    title: 'Babysitter',
    icon: 'child-care'
  },
  {
    title: 'Lawn Care',
    icon:'group'
  },
  {
    title: 'Tutor',
    icon: 'book'
  },
  {
    title: 'Musician',
    icon: 'library-music'
  },
  {
    title: 'Teacher',
    icon: 'library-music'
  },
  {
    title: 'Makeup Artist',
    icon: 'library-music'
  },
  {
    title: 'Nail Artist',
    icon: 'library-music'
  }
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

export default connect(null, actions)(HomeScreen);
