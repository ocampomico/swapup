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

<<<<<<< HEAD
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

import { GOOGLE_FIREBASE_CONFIG } from "./src/constants/api_keys";
import RefineSearchScreen from "./src/screens/RefineSearchScreen";

=======
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import SearchResultsScreen from './src/screens/SearchResultsScreen';

>>>>>>> origin/screens
export default class App extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Upon loading app, initialize firebase
  componentWillMount() {
    // DTG - Debugging

    firebase.initializeApp(GOOGLE_FIREBASE_CONFIG);

    //console.log('App.js: Signing Out');
    AsyncStorage.removeItem('fb_token'); // Just used for testing to clear item
    //SecureStore.deleteItemAsync('fb_token'); // Just used for testing to clear item
    firebase.auth().signOut();
  }


//Main render method  
  render() {
<<<<<<< HEAD
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
            home: { screen: HomeScreen },
<<<<<<< HEAD
            refine: { screen: RefineScreen },
            swap: {
              screen: StackNavigator({ 
                search: { screen: SearchScreen }              
              })
            }
=======
            search: { screen: SearchScreen }
>>>>>>> origin/screens
        })
      }
    }, {
      navigationOptions: {
<<<<<<< HEAD
        tabBarVisible: true
=======
        tabBarVisible: false
>>>>>>> origin/screens
      },
      lazy: true
    });

    return (
<<<<<<< HEAD
      <View style={styles.container}>
          <MainNavigator />
      </View>
=======
        <View style={styles.container}>
          <MainNavigator />
        </View>
>>>>>>> origin/screens
=======
    //////////////////////////////////////////////////////////////////////////////
    // Inner StackNavigator for search results
    const Drawer = StackNavigator(
      {
        home: { screen: HomeScreen },
        search: { screen: SearchScreen },
        profile: { screen: ProfileScreen },
        refine: { screen: RefineSearchScreen },
        result: { screen: ResultScreen },
        signout: { screen: Signout }
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
            style={{ width: 100, height: 100, marginTop: 40, marginBottom: 15 }}
            source={require("./assets/icon.png")}
          />
        </View>

        <View>
          <Text h1 style={{ textAlign: "center", marginTop: 10 }}>
            MENU
          </Text>
          <Divider style={{ backgroundColor: "#000" }} />
          <DrawerItems {...props} />
        </View>
      </ScrollView>
    );


    //This calls maindrawer from MainNavigator --> needs to be called before mainNavigator
    const MainDrawer = DrawerNavigator({
      drawer: { screen: Drawer },
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
        main: { screen: MainDrawer }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        tabBarPosition: "bottom",
        swipeEnabled: true,
        lazy: true, 
        animationEnabled: false
      }
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator onNavigationStateChange={null} />
        </View>
      </Provider>
>>>>>>> fac924a10caf4d174de172a50f71b911e8da1ee8
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
<<<<<<< HEAD
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
=======
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> origin/screens
