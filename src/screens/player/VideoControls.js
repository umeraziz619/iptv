import {View,TouchableOpacity,Text,Slider} from 'react-native'
const VideoControls = ({ duration, currentTime, onSeek, onPlayPress, onPausePress }) => {
    const formattedDuration = formatTime(duration);
    const formattedCurrentTime = formatTime(currentTime);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
  
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={isPlaying ? onPausePress : onPlayPress}>
          <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
  
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onSlidingComplete={onSeek}
        />
  
        <Text>{formattedCurrentTime}/{formattedDuration}</Text>
      </View>
    );
  };

export default VideoControls
  