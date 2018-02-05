import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

<<<<<<< HEAD
//Import the screens:
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ResultsScreen from './src/screens/ResultScreen';
import SearchScreen from './src/screens/SearchScreen';
import ServiceScreen from './src/screens/ServiceScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RefineScreen from './src/screens/RefineSearchScreen';


=======
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import SearchResultsScreen from './src/screens/SearchResultsScreen';

>>>>>>> origin/screens
export default class App extends React.Component {
  render() {
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
