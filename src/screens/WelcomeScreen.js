import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

const remote = 'http://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/LIGHT-BLUE--tojpeg_1496152366596_x1.jpg';

class WelcomeScreen extends Component {

  render() {
    const resizeMode = 'cover';
    const text = 'Swipe to Start';

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