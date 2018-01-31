import React, {Component} from 'react';
import { View, Text } from 'react-native';

class SearchScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
          <Text>SearchScreen</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default SearchScreen;








// import React, { Component } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { MapView } from 'expo';
// //import { connect } from 'react-native';
// import { Icon, Header, SearchBar } from 'react-native-elements';

// import "@expo/vector-icons";

// //import * as actions from '../actions';

// class SearchScreen extends Component { //modifying the tabbar
//     static navigationOptions = {
//         title: 'Map',
//         tabBar: {
//             icon: ({ tintColor }) => { //to apply to the icon when the user press on it
//                 return <Icon name="my-location" size={30} color={tintColor} />;
//             } 
//         }
//     }

//     state = {
//         mapLoaded: false,
//         region: {
//             longitude: -122,
//             latitude: 37,
//             longitudeDelta: 0.04,
//             latitudeDelta: 0.09
//         }
//     }

//     componentDidMount() {
//         this.setState({ mapLoaded: true });
//     }

//     onRegionChangeComplete = (region) => {
//         this.setState({ region });
//     }

//     // onButtonPress = () => {
//     //     this.props.fetchJobs(this.state.region), () => {
//     //         this.props.navigation.navigate('deck');
//     //     };
//     // }

//     render() {
//         if (!this.state.mapLoaded) {
//             return (
//                 <View style={{ flex: 1, justifyContent: 'center' }}>
//                     <ActivityIndicator size="large" />
//                 </View>
//             );
//         }
//         return (
//             <View style={{ flex: 1 }}>
//                   <Header
//                     leftComponent={{ icon: 'menu', color: '#fff' }}
//                     centerComponent={{ text: 'Search', style: { color: '#fff' } }}
//                     rightComponent={{ icon: 'search', color: '#fff' }}
//                   />
//                   <SearchBar
//                     round
//                     style={ styles.viewStyle }
//                     //onChangeText={someMethod}
//                     //onClearText={someMethod}
//                     placeholder='Type a city...' 
//                     />
//                 <MapView 
//                     region={this.state.region}
//                     style={{ flex: 1 }} 
//                     onRegionChangeComplete={this.onRegionChangeComplete}
//                 />
//             </View>
//         );
//     }
// }

// const styles = {
//     buttonContainer: {
//         position: 'absolute', 
//         bottom: 20,
//         left: 0,
//         right: 0
//     }
// }
// export default SearchScreen;
