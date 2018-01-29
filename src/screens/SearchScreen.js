import React, {Component} from 'react';
import { View, Text } from 'react-native';

class SearchScreen extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
          <Text>SearchScreen</Text>
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

export default SearchScreen;