import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

class WelcomeScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
          <Text>Welcome to SwapUp!</Text>
          <Image 
            style={{ width: 100, height: 100, marginTop: 25, marginBottom: 15 }}
            source={require('../../assets/swap.png')} 
          />
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

export default WelcomeScreen;