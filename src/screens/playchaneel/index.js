import React, {useEffect, useState, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import useSWR from 'swr';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../../theme/COLORS';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';
const Playchaneel = ({route, navigation}) => {
  const {chaneelCategory, index} = route.params;
  const flatListRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(index);
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const {username, password, uri} = userData || {};
  const [isLoading, setIsLoading] = useState(true);
  const [isBuffering, setIsBuffering] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  const {
    data: chaneel,
    error,
    isValidating,
  } = useSWR(
    `${uri}/api.php?op=channels&username=${username}&password=${password}&action=get_live_streams&category_id=${chaneelCategory}`,
    fetcher,
  );

  useEffect(() => {
    const getChaneelList = async () => {
      const storedUserData = await AsyncStorage.getItem('userData');
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    };
    getChaneelList();
  }, []);
  useEffect(() => {
    const handleBackPress = () => {
      if (isFullScreen) {
        handleFullScreen(); // Minimize the player instead of going back
        return true; // Prevent the default back button behavior
      }
      return false; // Allow the default back button behavior
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [isFullScreen]);

  useEffect(() => {
    if (chaneel && index !== undefined && flatListRef.current) {
      flatListRef.current.scrollToIndex({index, animated: true});
    }
  }, [chaneel, index]);

  const renderItem = ({item, index}) => {
    let handleCategoryPress = () => {
      setSelectedItemIndex(index);
      console.log(item.category_id);
    };
    const itemStyle = selectedItemIndex === index ? styles.selectedItem : {};
    return (
      <TouchableOpacity
        style={[styles.flatListContainer, itemStyle]}
        onPress={handleCategoryPress}>
        <View style={styles.flatListNumbersContainer}>
          <Text style={styles.flatListNumbersTop}>1999</Text>
          <Text style={styles.flatListNumbersBottom}>2</Text>
        </View>
        {item.stream_icon ? (
          <Image
            style={{height: 40, width: 40, marginLeft: 10}}
            source={{uri: item.stream_icon}}
          />
        ) : (
          <Icon
            name="tv"
            color={COLORS.pure_white}
            style={{marginLeft: 10}}
            size={30}
          />
        )}
        <View style={styles.flatListChaneelNameContainer}>
          <Text style={styles.cname}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={isFullScreen && true} />
      {/* <View style={styles.header}></View> */}
      <View style={styles.mainSection}>
        {
          <View style={[styles.leftSection, isFullScreen && {display: 'none'}]}>
            <View style={styles.chaneelNameContainer}>
              <TouchableOpacity>
                <Icon
                  name="chevron-back-outline"
                  size={30}
                  color={COLORS.pure_white}
                />
              </TouchableOpacity>
              <Text style={styles.chaneelName}>Albania</Text>
              <TouchableOpacity>
                <Icon
                  name="chevron-forward-outline"
                  size={30}
                  color={COLORS.pure_white}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              ref={flatListRef}
              data={chaneel}
              renderItem={renderItem}
              keyExtractor={item => item.stream_id.toString()}
              getItemLayout={(_, index) => ({
                length: 55, // Adjust the item height (70) as per your item's height
                offset: 55 * index,
                index,
              })}
            />
          </View>
        }
        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.touchablePlayer}
            onPress={handleFullScreen}>
            <Video
              source={{
                uri: `${uri}/live/${username}/${password}/356440.ts`,
              }}
              controls={false}
              style={[
                isFullScreen == false && styles.video,
                isFullScreen && {width: '100%', height: '100%'},
              ]}
              repeat={true}
              // resizeMode={isFullScreen ? 'cover' : 'contain'}
              resizeMode="cover"
              onLoadStart={() => setIsBuffering(true)}
              onBuffer={() => setIsBuffering(true)}
              onReadyForDisplay={() => setIsBuffering(false)}
            />
            {isBuffering && (
              // <ActivityIndicator
              //   size="large"
              //   color={COLORS.pure_white}
              //   style={styles.activityIndicator}
              // />
              <FastImage
                source={require('../../../assests/images/loading.gif')}
                style={{width: 50, height: 50, position: 'absolute', top: 0}}
                resizeMode={FastImage.resizeMode.contain}
                animated={true}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Playchaneel;
