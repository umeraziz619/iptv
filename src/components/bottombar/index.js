import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
const BottomBar = ({handlePress}) => {
  return (
    <View style={styles.sectionLeftBottomBar}>
      <Text style={styles.sectionLeftBottomBarText}>
        Last Update: 30 secs ago
      </Text>
      <TouchableOpacity style={styles.sectionLeftBottomBarIcon} onPress={handlePress}>
      <Icon
        name="repeat-outline"
        size={30}
        color="#000000"
        />
        </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
