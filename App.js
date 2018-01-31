import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

//Import the screens:
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ResultsScreen from './src/screens/ResultScreen';
import SearchScreen from './src/screens/SearchScreen';
import ServiceScreen from './src/screens/ServiceScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';


export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
            home: { screen: HomeScreen },
            profile: { screen: ProfileScreen },
            swap: {
              screen: StackNavigator({ 
                search: { screen: SearchScreen },
                results: { screen: ResultsScreen }
              })
            }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: true
      },
      lazy: true
    });
    return (
      <View style={styles.container}>
          <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
