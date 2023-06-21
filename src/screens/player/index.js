import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styles from './style';
import Video from 'react-native-video';
const VideoPlayer = () => {

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const videoStyle = isFullscreen ? styles.fullscreenVideo : styles.video;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleFullscreen}>
        <Video
          source={{uri: 'https://b1g.ooo/live/592094849/985949499/321519.ts'}}
          style={videoStyle}
          controls={false}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlayer;
