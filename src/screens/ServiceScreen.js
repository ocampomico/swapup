import React, {Component} from 'react';
import { View, Text } from 'react-native';

class ServiceScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
          <Text>ServiceScreen</Text>
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

export default ServiceScreen;