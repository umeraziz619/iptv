import {
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  View,
  ImageBackground,
} from 'react-native';
import React,{useEffect} from 'react';
import styles from './style';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../theme/COLORS';
const ListUsers = () => {
  useEffect(() => {
    Orientation.lockToLandscape(); // Unlock the screen when component unmounts
}, []);
  return (
    <ImageBackground
      style={styles.imagebackground}
      source={require('../../../assests/images/background.png')}>
      <StatusBar backgroundColor="#1C1515" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={require("../../../assests/images/iptvlogo2.png")} />
          <Text style={styles.textListUser}>List Users</Text>
          <TouchableOpacity style={styles.headerAddUserContainer}>
            <Icon name="person-add-outline" size={25} color={COLORS.pure_white} />
            <Text style={styles.headerAddUserText}>Add User</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addUser}>
        <Icon style={styles.icon} name="person-add-outline" size={45} color={COLORS.pure_white} />
        <Text style={styles.addnewUserText}>Add New User</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footertext}>By Using the Application, you agree to the</Text>
          <Text style={styles.textunderline}>Term of Services</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ListUsers;
