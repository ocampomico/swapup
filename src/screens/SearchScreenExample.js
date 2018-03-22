import React, { Component } from 'react';
import { Icon, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
//import AssetExample from './components/AssetExample';

import "@expo/vector-icons"; // 6.2.2

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.18.5
import { GooglePlacesAutocomplete, } from 'react-native-google-places-autocomplete'; // 1.3.6

export default class App extends Component {
    // static navigationOptions = ({ navigation }) => ({
    //     //tabBarVisible: false,
    //     title: "Search Example",
    //     tabBarLabel: "Search Example",
    //     headerTitleStyle: {
    //       textAlign: "center",
    //       alignSelf: "center"
    //     },
        
    //     headerLeft: (
    //       <Button
    //         navigate={navigation.navigate}
    //         medium
    //         icon={{ name: "menu" }}
    //         backgroundColor='#000'
    //         onPress={() => navigation.navigate("DrawerOpen")}
    //       />
    //     ),
    
    //     headerRight: (
    //       <Button
    //         navigate={navigation.navigate}
    //         medium
    //         icon={{ name: "filter-list" }}
    //         backgroundColor='#000'
    //         onPress={() => navigation.navigate("refine")}
    //       />
    //     ),
    
    //     drawerIcon: ({ tintColor }) => (
    //       <Icon type="evilcons" name="search" size={25} color={tintColor} />
    //     )
    //   });
  
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
      <View style={styles.container}>
      <Text>Spurpy</Text>
       <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed="auto" // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      getDefaultValue={() => ''}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyDuzVnwXWMLVz0qDn_oWUBWx_WHd5Fe0iM',
        language: 'en', // language of the results
        types: '(cities)', // default: 'geocode'
      }}
      styles={{
        textInputContainer: {
          width: '100%',
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food',
      }}
      filterReverseGeocodingByTypes={[
        'locality',
        'administrative_area_level_3',
      ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[this.homePlace, this.workPlace]}
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      renderLeftButton={() => (
        <Icon name="ios-arrow-dropleft"/>
      )}
      renderRightButton={() => <Text>Custom text after the input</Text>}
    /> 
 
        {/* <Card title="Local Modules">
          <AssetExample />
        </Card> */}
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

// import React from 'react';
// import { View, Image } from 'react-native';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
// const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

// const GooglePlacesInput = () => {
//   return (
//     <GooglePlacesAutocomplete
//       placeholder='Search Cities'
//       minLength={2} // minimum length of text to search
//       autoFocus={false}
//       returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
//       listViewDisplayed='auto'    // true/false/undefined
//       fetchDetails={true}
//       renderDescription={row => row.description} // custom description render
//       onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
      
//       getDefaultValue={() => ''}
      
//       query={{
//         // available options: https://developers.google.com/places/web-service/autocomplete
//         key: 'AIzaSyDuzVnwXWMLVz0qDn_oWUBWx_WHd5Fe0iM',
//         language: 'en', // language of the results
//         types: '(cities)' // default: 'geocode'
//       }}
      
//       styles={{
//         textInputContainer: {
//           width: '100%'
//         },
//         description: {
//           fontWeight: 'bold'
//         },
//         predefinedPlacesDescription: {
//           color: '#1faadb'
//         }
//       }}
      
//       currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
//       currentLocationLabel="Current location"
//       nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
//       GoogleReverseGeocodingQuery={{
//         // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
//       }}
//       GooglePlacesSearchQuery={{
//         // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
//         rankby: 'distance',
//         types: 'food'
//       }}

//       filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
//       predefinedPlaces={[homePlace, workPlace]}

//       debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
//       renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
//       renderRightButton={() => <Text>Custom text after the input</Text>}
//     />
//   );
// }