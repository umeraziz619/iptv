import {
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginXtream = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('592094849');
  const [password, setPassword] = useState('985949499');
  const [url, setUrl] = useState('https://b1g.ooo');
  const navigation = useNavigation();

  const storeUserData = async (username, password, uri) => {
    try {
      const userData = { username, password, uri };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log('User data stored successfully.');
    } catch (error) {
      console.log('Failed to store user data:', error);
    }
  };

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        const { username, password, uri } = JSON.parse(userData);
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('URI:', uri);
      } else {
        console.log('User data not found.');
      }
    } catch (error) {
      console.log('Failed to retrieve user data:', error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);


  const loginHandle = async () => {
    const apiUrl = `${url}/api.php?username=${userName}&password=${password}&action=login`;
    console.log(apiUrl);
    await axios
      .get(apiUrl)
      .then(response => {
        console.log(response.data.user_info.status);
        if (response.status === 200 && response.data.user_info.status === 'Active') {
          storeUserData(userName, password, url);
          alert('Successfully Logged in ' + userName);
          navigation.navigate('iptvhome');
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <ImageBackground
      style={styles.imagebackground}
      source={require('../../../assests/images/background.png')}>
      <StatusBar backgroundColor="#1C1515" />
      <View style={styles.container}>
        <View style={styles.sectionone}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../assests/images/iptvlogo2.png')}
            />
          </View>
          <View style={styles.sectiononeButtons}>
            <TouchableOpacity style={styles.sectionbutton}>
              <Icon name="shield-checkmark-outline" size={20} color="#000" />
              <Text style={styles.buttonText}>CONNECT VPN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionbutton}>
              <Icon name="list-outline" size={20} color="#000" />
              <Text style={styles.buttonText}>LIST USERS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectiontwo}>
          <View style={styles.box}>
            <TextInput
              placeholder="Any Name"
              placeholderTextColor="#ffffff"
              style={styles.textInput}
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#ffffff"
              style={styles.textInput}
              onChangeText={text => setUserName(text)}
              value={userName}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#ffffff"
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <TextInput
              placeholder="http://url_here.com:port"
              placeholderTextColor="#ffffff"
              style={styles.textInput}
              onChangeText={text => setUrl(text)}
              value={url}
            />
            <TouchableOpacity style={styles.addUserButton} onPress={() => loginHandle()}>
              <Text style={styles.addUserText}>ADD USER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginXtream;
