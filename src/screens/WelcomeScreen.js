import React, {Component} from 'react';
import { View, Text } from 'react-native';

class WelcomeScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
          <Text>WelcomeScreen</Text>
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