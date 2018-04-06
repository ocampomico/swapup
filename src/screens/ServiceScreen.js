import React, { Component } from 'react';
import { View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import { Constants, MapView, Location, Permissions} from 'expo';
import { 
    Icon, 
    Header, 
    SearchBar, 
    Button,
 } from 'react-native-elements'; 
import { connect } from "react-redux"; 
import * as actions from "../actions";
import "@expo/vector-icons"; 
import "redux"; 

class SearchScreen extends Component {
    //////////////////////////////////////////////////////////////////////////////////
    // Properties automatically referred to by react-navigation navigators
    static navigationOptions = ({ navigation }) => ({
      //tabBarVisible: false,
      title: "Search By Service",
      tabBarLabel: "Search By Service",
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


export default connect(null, actions)(SearchScreen);