import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

const remote = 'http://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/LIGHT-BLUE--tojpeg_1496152366596_x1.jpg';

class WelcomeScreen extends Component {

  render() {
    const resizeMode = 'cover';
    const text = 'Swipe to Start';

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={{ uri: remote }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;