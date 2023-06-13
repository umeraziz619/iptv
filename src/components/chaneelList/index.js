import useSWR from 'swr';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';

const ChaneeList = ({ chaneelCategory, userData, numColums }) => {
  const { username, password, uri } = userData;
  const fetcher = (...args) =>
    fetch(...args).then((res) => res.json());

  const { data: chaneel, error, isValidating } = useSWR(
    `${uri}/api.php?op=channels&username=${username}&password=${password}&action=get_live_streams&category_id=${chaneelCategory}`,
    fetcher,
    { initialData: [], revalidateOnMount: true }
  );

  useEffect(() => {}, [chaneel, isValidating, chaneelCategory]);

  const chaneelrender = ({ item }) =>
    item.stream_icon && (
      <View style={styles.chaneelrenderContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: item.stream_icon }}
          style={styles.image}
        />
      </View>
    );

  const isLoading = isValidating && (!chaneel || chaneel.length === 0);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#ffffff"
          style={styles.ActivityIndicator}
        />
      ) : (
        <FlatList
          data={chaneel}
          style={{ flexDirection: 'column' }}
          renderItem={chaneelrender}
          keyExtractor={(item) => item.stream_id.toString()}
          key={numColums.toString()} // Change the key prop when numColumns changes
          numColumns={numColums}
        />
      )}
    </View>
  );
};

export default ChaneeList;
