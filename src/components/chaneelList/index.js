import useSWR from 'swr';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const ChaneeList = ({ chaneelCategory, userData, numColumns }) => {
  const { username, password, uri } = userData;
  const navigation = useNavigation();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: chaneel,
    error,
    isValidating,
  } = useSWR(
    `${uri}/api.php?op=channels&username=${username}&password=${password}&action=get_live_streams&category_id=${chaneelCategory}`,
    fetcher,
    { initialData: [], revalidateOnMount: true }
  );

  useEffect(() => {}, [chaneel, isValidating, chaneelCategory]);

  const chaneelrender = ({ item, index }) => (
    <TouchableOpacity
      style={styles.chaneelrenderContainer}
      onPress={() => {
        let mystream_id = item.stream_id;
        handlePress(index,mystream_id);
      }}
    >
      {item.stream_icon ? (
        <Image
          resizeMode="contain"
          source={{ uri: item.stream_icon }}
          style={styles.image}
        />
      ) : (
        <Text style={{ color: 'white', textAlign: 'center' }}>{item.name}</Text>
      )}
    </TouchableOpacity>
  );

  const isLoading = isValidating && (!chaneel || chaneel.length === 0);
  const handlePress = (index,mystream_id) => {
    navigation.navigate('playchaneel', { chaneelCategory, index,mystream_id });
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#ffffff"
          style={styles.ActivityIndicator}
        />
      ) : (
        <FlatList
          data={chaneel}
          renderItem={chaneelrender}
          keyExtractor={(item) => item.stream_id.toString()}
          key={numColumns.toString()} // Change the key prop when numColumns changes
          numColumns={numColumns}
        />
      )}
    </View>
  );
};

export default ChaneeList;
