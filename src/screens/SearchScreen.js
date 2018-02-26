<<<<<<< HEAD
import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Rating } from 'react-native-elements'; // 0.19.0
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
    const hair = 'Hair Stylist';
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
      <Text>                     Occupation: {hair}</Text>
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
=======
import React, { Component } from 'react';
import { View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import { Constants, MapView, Location, Permissions} from 'expo';
//import { connect } from 'react-native';
import { 
    Icon, 
    Header, 
    SearchBar, 
    Button,
 } from 'react-native-elements'; // 0.19.0
import { connect } from "react-redux"; // 5.0.6
import * as actions from "../actions";
import "@expo/vector-icons"; // 6.2.2

import "redux"; // 3.7.2

class SearchScreen extends Component {
    //////////////////////////////////////////////////////////////////////////////////
    // Properties automatically referred to by react-navigation navigators
    static navigationOptions = ({ navigation }) => ({
      //tabBarVisible: false,
      title: "Search",
      tabBarLabel: "Search",
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: "center"
      },
      
      headerLeft: (
        <Button
          navigate={navigation.navigate}
          medium
          icon={{ name: "menu" }}
          backgroundColor='#000'
          onPress={() => navigation.navigate("DrawerOpen")}
        />
      ),
  
      headerRight: (
        <Button
          navigate={navigation.navigate}
          medium
          icon={{ name: "filter-list" }}
          backgroundColor='#000'
          onPress={() => navigation.navigate("refine")}
        />
      ),
  
      drawerIcon: ({ tintColor }) => (
        <Icon type="evilcons" name="search" size={25} color={tintColor} />
      )
    });
  /////////////
    state = {
    mapRegion: 
        { 
            latitude: 37.78825, 
            longitude: -122.4324, 
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421 
        },
    locationResult: null,
    location:  
        {   
          coords: 
            {   
                latitude: 37.78825, 
                longitude: -122.4324
            }
        },
        
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }
   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
 };

 onPress = () => {
  this.props.navigation.navigate('profile');
}

//  render() {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
//         onRegionChange={this._handleMapRegionChange}
//       >
//         <MapView.Marker
//           coordinate={{
//           latitude: 37.78825,
//           longitude: -122.4324,  
//           }}>
//             <View style={styles.radius}>
//               <View style={styles.marker} />
//             </View>
//           </MapView.Marker>
//         </MapView>
//     </View>
//   );
//   }
// }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
          //onRegionChange={this._handleMapRegionChange}
        >
          <MapView.Marker
            coordinate={this.state.location.coords}
            title="John Doe"
            description="Hair Stylist"
            onPress={() => this.onPress()}              
          />
        </MapView>
      
        {/* <Text>
          Location: {this.state.locationResult}
        </Text> */}
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 /2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default SearchScreen;
>>>>>>> def28863386123a813a8b7bf4d1f7c9c2fa3e3ac
