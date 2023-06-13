import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Stack from './src/navigation/Stack'
import Orientation from 'react-native-orientation-locker'
const App = () => {
  useEffect(() => {
    Orientation.lockToLandscape(); // Unlock the screen when component unmounts
  }, []);
  return (
    <Stack />
  )
}

export default App

const styles = StyleSheet.create({})