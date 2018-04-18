import firebase from "firebase";
import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Rating } from 'react-native-elements'; // Version can be specified in package.json
import { List, ListItem, Icon, Button, SearchBar, Header, Card, Text } from "react-native-elements"; // Version can be specified in package.json
import "@expo/vector-icons"; // Version can be specified in package.json
import "redux"; // Version can be specified in package.jsonexport

type Props = {
  occupation:string, //the ocupation prop passed in by the parent screen
}

class ResultScreen extends Component {

  ////////////////////
  //Navigation Bar  //
  ////////////////////

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

  ////////////////
  //Constructor //
  ////////////////

  constructor(props){
    super(props);

    this.state = ({
      data:[],
    });
  }

  componentDidMount(){
    const {
      params
    } = this.props.navigation.state;
    this._fetchSwapup(params.occupation); 
  }

  async _fetchSwapup(occupation:string){
    
    //get the users unique id
    var userID = firebase.auth().currentUser.uid;

    //get the users path refference
    var usersPathRef = firebase.database().ref("users/" + userID);

    var thisRef = this;
    
    //get all of the values from the specific user
    usersPathRef.once('value', function(snapshot){
      var data = [];
      snapshot.forEach(child => {
        var c = child.val();
        if (c.occupation.toLowerCase() === occupation.toLowerCase()){
          data.push(c);
        }
      });
      
      //update pagte state
      thisRef.setState({
        data:data,
      });
    });

  }

  //////////////////
  render() {
   
    const {
      data,
    } = this.state;
    return (
      <ScrollView>
        <View>
          {data.map(function(item, index){

            //get the initials of the user
            var names = item.name.split(" ");
            var initials = "";
            for (var i = 0; i < names.length; i++){
              initials += names[i].charAt(0);
            }

            return <Card key={index} title={"Name: " + item.name}>
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
                }}>
                  <Text style={{ color: "white", fontSize: 28 }}>{initials}</Text>       
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
              <Text style={{textAlign:"center"}}>Occupation: {item.occupation}</Text>
              <Text style={{textAlign:"center"}}>City: {item.city}</Text>
              <Button
                rounded
                backgroundColor="#03A9F4"
                title="Distance: 0.1 mile away"
                onPress={() => console.log("Works!")}   
              />
            </Card>
          })}
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