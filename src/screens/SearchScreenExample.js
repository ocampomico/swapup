import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView } from 'expo';
import { Icon, Card, Button } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
import { connect } from "react-redux"; // 5.0.6
import * as actions from "../actions";
import "@expo/vector-icons"; 
import "redux"; 

class SearchScreenExample extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
    title: "Search By City",
    tabBarLabel: "Search By City",
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

workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};

render() {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight, flex: 10}}>
      <GooglePlacesAutocomplete
        placeholder="Search a city..."
        minLength={3} // minimum length of text to search
        autoFocus={true}
        returnKeyType={'search'} 
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        enablePoweredByContainer={false}
        renderDescription={row => row.description} // custom description render
        onPress={(data, details = null) => {
          console.log('data', data);
          console.log('details', details);
        }}
        getDefaultValue={() => {
          return ''; 
        }}
        query={{
          key: 'AIzaSyAGBXvAP3c7XzLZplXHEuTdmfD7wZJNHEQ',
          language: 'en', // language of the results
          "types" : ['(cities)'], // default: 'geocode'
        }}
        styles={{
           container: {
             backgroundColor: '#000000',
             flex: 1,
             justifyContent: 'center',
             alignItems: 'center'
           },
           listView: {
             backgroundColor: 'white',
             padding: 5,
             width: '80%'
           },
          textInputContainer: {
            backgroundColor: 'white',
            padding: 5,
            width: '80%'
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16
          },
          predefinedPlacesDescription: {
            color: '#1faadb'
          },
        }}
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current Location"
        nearbyPlacesAPI="GooglePlacesSearch" 
        GoogleReverseGeocodingQuery={{
          types: 'address'
        }}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          types: 'address',
        }}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]} 
      />
    </View>
  );
  }
};
export default connect(null, actions)(SearchScreenExample);