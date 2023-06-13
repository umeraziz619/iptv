import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

const NetflixCustomButton = ({
  animationDuration = 5000,
  height = 30,
  width = 130,
  borderRadius = 10,
}) => {
  const [animatedWidth] = useState(new Animated.Value(width));

  const handlePress = () => {
    Animated.timing(animatedWidth, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <View
        style={{
          height: height,
          width: width,
          borderRadius: borderRadius,
          backgroundColor: 'grey',
        }}
      />
      <Animated.View
        style={{
          height: height,
          width: animatedWidth,
          borderRadius: borderRadius,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <TouchableOpacity
        style={{
          height: height,
          width: width,
          borderRadius: borderRadius,
          backgroundColor: 'transparent',
        }}
        onPress={handlePress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black'}}>Next Episode</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NetflixCustomButton;
