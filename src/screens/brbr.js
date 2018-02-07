import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
} from 'react-native';
import { Rating } from 'react-native-elements'; // 0.19.0

import "@expo/vector-icons"; // 6.2.2

const remote = 'https://images.maskworld.com/is/image/maskworld/bigview/john-doe-foam-latex-mask--mw-117345-1.jpg';

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'cover';
    const text = 'John Doe';

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'left',
            top: 0,
            left:0 ,
            width: '100%',
            height: '50%',
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
            justifyContent: 'top',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              fontStyle: 'italic',
            }}
          >
            {text}
          </Text>
        </View>
      </View>
 
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);