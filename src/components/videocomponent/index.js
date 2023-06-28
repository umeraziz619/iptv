import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text,ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';
import styles from './style';

const VideoSection = ({ handleFullScreen, isFullScreen, stream_id, uri, username, password }) => {
  const [isBuffering, setIsBuffering] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (stream_id) {
      // Logic to start playing the new stream_id
      // You can add your video player control logic here
      console.log('New stream_id:', stream_id);
      setIsError(false); // Reset the error state when a new stream_id is set
    }
  }, [stream_id]);

  const handleVideoError = () => {
    setIsError(true);
  };

  return (
    <View style={styles.rightSection}>
      <TouchableOpacity
        style={styles.touchablePlayer}
        activeOpacity={1}
        onPress={handleFullScreen}
        
        disabled={isFullScreen && true}
      >
        {isError ? (
          <ActivityIndicator />
        ) : (
          <>
            <Video
              source={{
                uri: `${uri}/live/${username}/${password}/${stream_id}.ts`,
              }}
              controls={false}
              style={[
                isFullScreen == false && styles.video,
                isFullScreen && { width: '100%', height: '100%' },
              ]}
              repeat={true}
              resizeMode="cover"
              onLoadStart={() => setIsBuffering(true)}
              onBuffer={() => setIsBuffering(true)}
              onReadyForDisplay={() => setIsBuffering(false)}
              onError={handleVideoError} // Handle video playback errors
            />
            {isBuffering && (
              <FastImage
                source={require('../../../assests/images/loading.gif')}
                style={styles.gifLoading}
                resizeMode={FastImage.resizeMode.contain}
                animated={true}
              />
            )}
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default VideoSection;
