import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styles from './style';
import Video from 'react-native-video';
const Player = () => {

  return (
    <View style={styles.container}>
        <Video
          source={{uri: 'https://b1g.ooo/live/592094849/985949499/321519.ts'}}
          style={styles.video}
          controls={true}
          resizeMode="cover"
        />
    </View>
  );
};

export default Player;
