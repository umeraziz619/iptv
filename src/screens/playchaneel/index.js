import React, {useEffect, useState, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import useSWR from 'swr';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../../theme/COLORS';
import Video from 'react-native-video'
const Playchaneel = ({route}) => {
  const {chaneelCategory, index} = route.params;
  const flatListRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(index);
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const {username, password, uri} = userData || {};

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
        {item.stream_icon?
          <Image
            style={{height: 40, width: 40, marginLeft: 10}}
            source={{uri: item.stream_icon}}
          /> : <Icon name="tv" color={COLORS.pure_white} style={{marginLeft: 10}} size={30}/>
        }
        <View style={styles.flatListChaneelNameContainer}>
          <Text style={styles.cname}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  if (!chaneel) {
    return (
      <View
        style={[
          styles.container,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <ActivityIndicator color={COLORS.pure_white} size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.mainSection}>
        <View style={styles.leftSection}>
          <View style={styles.chaneelNameContainer}>
            <TouchableOpacity>
              <Icon name="chevron-back-outline" size={30} color={COLORS.pure_white} />
            </TouchableOpacity>
            <Text style={styles.chaneelName}>Albania</Text>
            <TouchableOpacity>
              <Icon name="chevron-forward-outline" size={30} color={COLORS.pure_white} />
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
        <View style={styles.rightSection}>
        <TouchableOpacity style={styles.touchablePlayer}>
        <Video
          source={{uri: 'https://b1g.ooo/live/592094849/985949499/673326.ts'}}
          controls={false}
          style={styles.video}
          repeat={true}
          resizeMode="contain"
        />
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Playchaneel;
