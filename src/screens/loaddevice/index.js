import {Text,TouchableOpacity,StatusBar, View,ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import COLORS from '../../theme/COLORS'
const Loaddevice = () => {
  return (
    <ImageBackground style={styles.imagebackground} source={require("../../../assests/images/background.png")}>
      <StatusBar backgroundColor="#1C1515" />
      <View style={styles.container}>
        <View style={styles.box}>
        <TouchableOpacity style={styles.touchableOpacity}>
            <Icon name="videocam-outline" size={60} color={COLORS.pure_white} />
            <Text style={styles.text}>VIDEO LIBRARY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
            <Icon name="musical-notes-outline" size={60} color={COLORS.pure_white} />
            <Text style={styles.text}>MUSIC LIBRARY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
            <Icon name="document-outline" size={60} color={COLORS.pure_white} />
            <Text style={styles.text}>PLAY LOCAL FILE</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Loaddevice

