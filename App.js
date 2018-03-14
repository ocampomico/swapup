//Import the libraries/packages: 
import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  AsyncStorage,
  ScrollView,
  Text,
  Image
} from "react-native";
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  DrawerItems
} from "react-navigation";
import { Divider } from "react-native-elements";
import { Provider } from "react-redux";
import firebase from "firebase";
import store from "./src/store";

//Import the screens:
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ResultScreen from './src/screens/ResultScreen';
import SearchScreen from './src/screens/SearchScreen';
import ServiceScreen from './src/screens/ServiceScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RefineScreen from './src/screens/RefineSearchScreen';
import Signout from './src/screens/SignoutScreen';
import RefineSearchScreen from "./src/screens/RefineSearchScreen";
import UserCreate from './src/components/UserCreate';

import { GOOGLE_FIREBASE_CONFIG } from "./src/constants/api_keys";

export default class App extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Upon loading app, initialize firebase
  componentWillMount() {
    // DTG - Debugging

    firebase.initializeApp(GOOGLE_FIREBASE_CONFIG);

    //console.log('App.js: Signing Out');
    //AsyncStorage.removeItem('fb_token'); // Just used for testing to clear item
    //SecureStore.deleteItemAsync('fb_token'); // Just used for testing to clear item
    //firebase.auth().signOut();
  }

  hiddenComponent() {
    return null; 
  }


//Main render method  
  render() {
    //////////////////////////////////////////////////////////////////////////////
    // Inner StackNavigator for search results
    const Drawer = StackNavigator(
      {
        home: { screen: HomeScreen },
        search: { screen: SearchScreen },
        profile: { screen: ProfileScreen },
        refine: { screen: RefineSearchScreen },
        signout: { screen: Signout },
        result: { screen: ResultScreen }
      },
      {
        navigationOptions: {
          headerStyle: { backgroundColor: '#000' },
          headerBackTitleStyle: { color: "#FFF" },
          headerTitleStyle: { color: "#FFF" },
          headerTintColor: "#FFF"
        }
      }
    );

    //////////////////////////////////////////////////////////////////////////////
    // This component dictates the configuration of the drawer
    const customDrawerComponent = props => (
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            alignItems: "center",
            alignContent: "center"
          }}
        >
          <Image
            style={{ width: 100, height: 100, marginTop: 25, marginBottom: 15 }}
            source={require("./assets/swap.png")}
          />
        </View>

        <View>
          <Text h1 style={{ textAlign: "center", marginTop: 10 }}>
            MENU
          </Text>
          <Divider style={{ backgroundColor: "navy" }} />
          <DrawerItems {...props} />
        </View>
      </ScrollView>
    );

    //This calls maindrawer from MainNavigator --> needs to be called before mainNavigator
    const MainDrawer = DrawerNavigator({
      drawer: { screen: Drawer  },
      home: { screen: HomeScreen },
      search: { screen: SearchScreen },
      profile: { screen: ProfileScreen },
      signout: { screen: Signout }
    },
    {
      contentComponent: customDrawerComponent
    }
    );

    //Main navigator that will first show up on the screen
    const MainNavigator = TabNavigator({
        Welcome: { screen: WelcomeScreen },
        Auth: { screen: AuthScreen },
        create: { screen: UserCreate },
        main: { screen: MainDrawer }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        tabBarPosition: "bottom",
        swipeEnabled: false,
        lazy: true, 
        animationEnabled: true
      }
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator onNavigationStateChange={null} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});