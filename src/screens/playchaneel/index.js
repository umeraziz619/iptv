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
import VideoSection from '../../components/videocomponent';
const Playchaneel = ({route, navigation}) => {
  const {chaneelCategory, index, mystream_id} = route.params;
  const flatListRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const [stream_id, setstream_id] = useState(mystream_id);
  const [selectedItemIndex, setSelectedItemIndex] = useState(index);
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const {username, password, uri} = userData || {};
  const [isFullScreen, setIsFullScreen] = useState(false);
  // Resize the screen based on state changing
  console.log('The Stream ID will: ' + stream_id);
  const handleFullScreen = () => {
    if (isFullScreen) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(!isFullScreen);
    }
  };
  //Using the SWR to fetching the data and validing
  const {
    data: chaneel,
    error,
    isValidating,
  } = useSWR(
    `${uri}/api.php?op=channels&username=${username}&password=${password}&action=get_live_streams&category_id=${chaneelCategory}`,
    fetcher,
    {initialData: [], revalidateOnMount: true},
  );
  // useEffetct the fetch the user data that we stored in async storage
  useEffect(() => {
    const getChaneelList = async () => {
      const storedUserData = await AsyncStorage.getItem('userData');
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    };
    getChaneelList();
  }, []);
  // Triggired the back button
  useEffect(() => {
    const handleBackPress = () => {
      if (isFullScreen) {
        setIsFullScreen(false);
        return true;
      }
      return false;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [isFullScreen]);
  // This useEffect wiwll scroll to the particular index that user was clicked on the previous screen
  useEffect(() => {
    if (chaneel && index !== undefined && flatListRef.current) {
      flatListRef.current.scrollToIndex({index, animated: true});
    }
  }, [chaneel, isFullScreen, index]);
  // This useEffect will run when stream_id state changes

  // Render items of that flatList in LeftSIde
  const renderItem = ({item, index}) => {
    let handleCategoryPress = () => {
      setSelectedItemIndex(index);
      setstream_id(item.stream_id);
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
            style={styles.steam_iconimage}
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
          <View style={{backgroundColor: 'gray', height: 0.5}}></View>
        </View>
      </TouchableOpacity>
    );
  };
  const isLoading = isValidating && (!chaneel || chaneel.length === 0);
  return (
    <View style={styles.container}>
      <StatusBar hidden={isFullScreen && true} />
      {<View style={[styles.header, isFullScreen && styles.none]}></View>}
      <View style={styles.mainSection}>
        {isLoading ? (
          <ActivityIndicator
            color={COLORS.pure_white}
            style={styles.ActivityIndicator}
            size="large"
          />
        ) : (
          <View style={[styles.leftSection, isFullScreen && styles.none]}>
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
                length: 47, // Adjust the item height (70) as per your item's height
                offset: 47 * index,
                index,
              })}
            />
          </View>
        )}
        <VideoSection
          handleFullScreen={handleFullScreen}
          isFullScreen={isFullScreen}
          stream_id={stream_id}
          uri={uri}
          username={username}
          password={password}
        />
      </View>
    </View>
  );
};

export default Playchaneel;
