import { StyleSheet, Text,TouchableOpacity,TextInput,StatusBar, View,ImageBackground } from 'react-native'
import React,{useEffect} from 'react'
import styles from './style'
import Orientation from 'react-native-orientation-locker'
import COLORS from '../../theme/COLORS'
const SingleStream = () => {
  useEffect(() => {
    Orientation.lockToLandscape(); // Unlock the screen when component unmounts
}, []);
  return (
    <ImageBackground style={styles.imagebackground} source={require("../../../assests/images/background.png")}>
      <StatusBar backgroundColor="#1C1515" />
      <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.text}>Play Single Stream</Text>
            <TextInput placeholder='http://url_here.com:port/stream_name.extension' placeholderTextColor={COLORS.pure_white} style={styles.textInput}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.butonText}>PLAY</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default SingleStream

