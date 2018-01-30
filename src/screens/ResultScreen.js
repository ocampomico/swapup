import React, {Component} from 'react';
import { View, Text } from 'react-native';

class ResultScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
          <Text>ResultScreen</Text>
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

export default ResultScreen;