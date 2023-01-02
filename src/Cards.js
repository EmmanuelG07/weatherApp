import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimensions';

export default function Cards({name, image, navigation}) {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} onPress={()=> navigation.push('Details', {name})}>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 5}}
      />
      <View style={{position: 'absolute', height: "100%", width: '100%'}}>
        <Text
          style={{
            fontSize: 25,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'aqua',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
