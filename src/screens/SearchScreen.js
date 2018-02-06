import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
//import { connect } from 'react-native';
import { 
    Icon, 
    Header, 
    SearchBar, 
    Button
 } from 'react-native-elements'; // 0.19.0
import { connect } from "react-redux";
import * as actions from "../actions";
import "@expo/vector-icons"; // 6.2.2

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
      mapLoaded: false,
      region: {
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
      }
    }

    componentDidMount() {
        this.setState({ mapLoaded: true });
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }

    // onButtonPress = () => {
    //     this.props.fetchJobs(this.state.region), () => {
    //         this.props.navigation.navigate('deck');
    //     };
    // }

    render() {
        if (!this.state.mapLoaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <SearchBar
                    round
                    //onChangeText={someMethod}
                    //onClearText={someMethod}
                    placeholder='Type a city...' 
                    />
                <MapView 
                    region={this.state.region}
                    style={{ flex: 1 }} 
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute', 
        bottom: 20,
        left: 0,
        right: 0
    }
}
export default connect(null, actions)(SearchScreen);