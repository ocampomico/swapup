import firebase from "firebase";
import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Rating } from 'react-native-elements'; // Version can be specified in package.json
import { List, ListItem, Icon, Button, SearchBar, Header, Card, Text } from "react-native-elements"; // Version can be specified in package.json
import "@expo/vector-icons"; // Version can be specified in package.json
import "redux"; // Version can be specified in package.jsonexport 


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
  
  fetchSwapup(){
    const users = {results: []};
    const ref = firebase.database().ref();
  //my base url
  ref.child('users').once('value', function(snapshot) {
    snapshot.forEach(function(child) {
      users.results.push(child);
    })
  })
  }
  //////////////////
  render() {
    const hair = 'Hair Sylist';
    const photo = 'Photographer';
    const art = 'Artist';
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
            <Rating
            showRating
            type="star"
            fractions={1}
            startingValue={5}
            imageSize={30}
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 1,alignSelf: "center" }}
          />
     <Text>                     Occupation: this.itemsRef = firebaseApp.database().ref();</Text>
   
// listenForItems(itemsRef) {
//    itemsRef.on('value', (snap) => {
// get children as an array
//     var items = [];
//    snap.forEach((child) => {
//      items.push({
//      title: child.val().title,
//      _key: child.key
//      });
//      });
//      this.setState({
//       dataSource: this.state.dataSource.cloneWithRows(items)
//      });
//    });
 }

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
        <Text style={{ color: "white", fontSize: 28 }}>BB</Text>
      </View>
      <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={1.6}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 1,alignSelf: "center" }}
        />
      <Text>                     Occupation: {hair}</Text>
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
      <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={3.6}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 1,alignSelf: "center" }}
        />
      <Text>                     Occupation: {photo}</Text>
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
      <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={4.5}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 1,alignSelf: "center" }}
        />
      <Text>                     Occupation: {photo}</Text>
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
      <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={4.9}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 1,alignSelf: "center" }}
        />
       <Text>                     Occupation: {art}</Text>
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

