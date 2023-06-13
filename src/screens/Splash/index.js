import {View, StatusBar, Image, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = () => {
  const navigation = useNavigation();
  setTimeout( async() => {
    const userData =  await AsyncStorage.getItem('userData');
    if (userData != null) {
      navigation.navigate('Home');
    }else{
      navigation.navigate('Home');
    }
  }, 5000);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00AAE1" />
      <Image
        style={styles.image}
        source={require('../../../assests/images/iptvlogo2.png')}
      />
      <ActivityIndicator
        size={'large'}
        color={'white'}
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default Splash;
