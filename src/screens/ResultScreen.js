import React, { Component } from "react";
import { View, ScrollView } from "react-native";
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

class ResultScreen extends Component {
  //////////////////////////////////////////////////////////////////////////////////
  // Properties automatically referred to by react-navigation navigators
  static navigationOptions = ({ navigation }) => ({
    //tabBarVisible: false,
    title: "ResultScreen",
    tabBarLabel: "ResultScreen",
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
      <Icon type="MaterialCommunityIcons" name="user" size={25} color={tintColor} />
      
    )
  });

  //////////////////
  render() {
    return (
       <ScrollView>
      <View>

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
      <Text>                   Occupation: Hair Stylist</Text>
      <Button
        rounded
        backgroundColor="#03A9F4"
        title="Distance: 0.1 mile away"
        onPress={() => console.log("Works!")}   
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
      <Text>                   Occupation: Hair Stylist</Text>
      <Button
        rounded
        backgroundColor="#03A9F4"
        title="Distance: 0.3 miles away"
        onPress={() => console.log("Works!")}   
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
      <Text>                   Occupation: Hair Stylist</Text>
      <Button
        rounded
        backgroundColor="#03A9F4"
        title="Distance: 1.2 miles away"
        onPress={() => console.log("Works!")}   
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
      <Text>                   Occupation: Hair Stylist</Text>
      <Button
        rounded
        backgroundColor="#03A9F4"
        title="Distance: 2.6 miles away"
        onPress={() => console.log("Works!")}   
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
       <Text>                   Occupation: Hair Stylist</Text>
      <Button
        rounded
        backgroundColor="#03A9F4"
        title="Distance: 47 miles away"
        onPress={() => console.log("Works!")}   
        />
    </Card>
    </View>
     </ScrollView>

    );
  }
}

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
    justifyContent: "center",
    alignItems: "center"
  }
};

export default ResultScreen;