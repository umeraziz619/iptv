import {StyleSheet, Text, View,} from 'react-native';
import React,{useState} from 'react';
import {VLCPlayer} from 'react-native-vlc-media-player';
const Player = () => {
  return (
    <View style={{flex: 1,}}>
      <VLCPlayer
        style={{flex:1,}}
        videoAspectRatio="16:9"
        resizeMode=""
        source={{uri:'http://techslides.com/demos/sample-videos/small.mp4'}}
      />
      <Text>Helo</Text>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({});
