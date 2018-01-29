import React, {Component} from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
          <Text>HomeScreen</Text>
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

export default HomeScreen;