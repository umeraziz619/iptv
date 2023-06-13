import {
  ActivityIndicator,
  Animated,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import BottomBar from '../../components/bottombar';
const Iptvhome = ({
  animationDuration = 5000,
  height = 250,
  width = 300,
  borderRadius = 10,
}) => {
  const [animatedWidth] = useState(new Animated.Value(300));
  const navigation = useNavigation();
  const [animate, setAnimate] = useState(false);
  const [hideBottomBar, setHideBottomBar] = useState(true);
  const handlePress = () => {
    setAnimate(true);
    Animated.timing(animatedWidth, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start(() => {
      // Animation completed, reset the values
      setHideBottomBar(true);
      setAnimate(false);
      animatedWidth.setValue(300);
    });
  };
  useEffect(() => {
    const setUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData !== null) {
          const {username, password, uri} = JSON.parse(userData);
          const apiUrl = `${uri}/api.php?op=channels&username=${username}&password=${password}&action=get_live_categories`;
          const response = await axios.get(apiUrl);
          const list = response.data;
          // Store the list data in AsyncStorage
          await AsyncStorage.setItem('chaneelList', JSON.stringify(list));
          // console.log(list)
        } else {
          console.log('User data not found.');
        }
      } catch (error) {
        console.log('Failed to retrieve user data:', error);
      }
    };
    setUserData();
  }, []);
  return (
    <LinearGradient colors={['#070721', '#030511',]} style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.sectionMain}>
      <LinearGradient
            style={styles.sectionLeft}
            colors={['#35D29D', '#3A63D5']}>
        <TouchableOpacity style={styles.sectionLeftLinear} onPress={()=>navigation.navigate("livetv")}>
          
            <Icon name="tv-outline" size={100} color="#ffffff" />
            <Text style={styles.sectionLeftText}>LIVE TV</Text>
            {!animate ? (
              <BottomBar handlePress={handlePress} />
            ) : (
              <View style={{position: 'absolute', bottom: 0}}>
                <ActivityIndicator color="#ffffff" />
                <Text style={styles.updatingText}>Updating</Text>
              </View>
            )}
            </TouchableOpacity>
          {animate && (
            <Animated.View
            style={[
              styles.animationContainer,
              {height: height, width: animatedWidth},
            ]}></Animated.View>
            )}
            </LinearGradient>
        <View style={styles.sectionRight}>
          <View style={styles.sectionRightTop}>
            <LinearGradient
              colors={['#DC3155', '#F49841']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.sectionTopboxes}>
              <Icon name="play-circle-outline" size={70} color="#ffffff" />
              <Text style={styles.sectionRightTopText}>MOVIES</Text>
              <BottomBar />
            </LinearGradient>
            <LinearGradient
              colors={['#9B3CB2', '#746DCA', '#5296DD']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.sectionTopboxes}>
              <Icon name="film-outline" size={70} color="#ffffff" />
              <Text style={styles.sectionRightTopText}>Series</Text>
              <BottomBar />
            </LinearGradient>
          </View>
          <View style={styles.sectionRightBottom}>
            <TouchableOpacity style={styles.sectionRightBottomButton}>
              <Icon
                name="book-outline"
                size={30}
                color="#ffffff"
                style={styles.Icon}
              />
              <Text style={styles.sbButtonText}>LIVE WITH EPG</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionRightBottomButton}>
              <Icon
                name="radio-outline"
                size={30}
                color="#ffffff"
                style={styles.Icon}
              />
              <Text style={styles.sbButtonText}>MULTI SCREEN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionRightBottomButton}>
              <Icon
                name="trending-up-outline"
                size={30}
                color="#ffffff"
                style={styles.Icon}
              />
              <Text style={styles.sbButtonText}>CATCH UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Expiration 2 July</Text>
        <Text style={styles.footerText}>Buy Premium Version</Text>
        <Text style={styles.footerText}>Logged in : Umer Aziz</Text>
      </View>
    </LinearGradient>
  );
};

export default Iptvhome;
