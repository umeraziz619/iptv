import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
      Orientation.lockToLandscape(); // Unlock the screen when component unmounts
  }, []);
  return (
    <LinearGradient
      colors={['#04D2D9', '#306DFC']}
      style={styles.linearGradient}>
      <Text
        style={styles.iptvText}>
        IPTV
      </Text>
      <View style={styles.container}>
        <View style={styles.itemcontainer}>
          <TouchableOpacity style={styles.largeItem} onPress={()=>{navigation.navigate("PlayList")}}>
            <Icon name="list-outline" size={30} color="#2E71FB" />
            <Text style={styles.text}>LOAD YOUR PLAYLIST OR FILE/URL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeItem} onPress={()=>navigation.navigate("loadDevice")}>
            <Icon name="folder-outline" size={30} color="#2E71FB" />
            <Text style={styles.text}>LOAD YOUR DATA FROM DEVICE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeItem} onPress={()=>navigation.navigate("loginxtream")}>
            <Icon name="server-outline" size={30} color="#2E71FB" />
            <Text style={styles.text}>LOGIN WITH XtREAM CODES API</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeItem} onPress={()=>navigation.navigate("singlestream")}>
            <Icon name="tv-outline" size={30} color="#2E71FB" />
            <Text style={styles.text}>PLAY SINGLE STREAM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.largeItem,{width:"22%"}]} onPress={()=>navigation.navigate("listusers")}>
            <Icon name="people-outline" size={30} color="#2E71FB" />
            <Text style={styles.text}>List Users</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home;


