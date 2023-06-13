import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
const PlayList = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };
  useEffect(() => {
    Orientation.lockToLandscape(); // Lock the screen to landscape mode

    return () => {
      Orientation.unlockAllOrientations(); // Unlock the screen when component unmounts
    };
  }, []);
  return (
    <LinearGradient
      colors={['#04D2D9', '#306DFC']}
      style={styles.linearGradient}>
      <Text style={styles.iptvText}>IPTV</Text>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>PlayList Name:</Text>
            <TextInput style={styles.input} placeholder="Any Name" place />
          </View>
          <View style={styles.playListContainer}>
            <Text style={styles.playListText}>PlayList Type: </Text>
          
          <View style={styles.optionContainermain}>
            <TouchableOpacity style={[styles.optionContainer,selectedOption === 'option1' && styles.optionSelected,]} onPress={() => handleOptionSelect('option1')}>
              <Text style={[styles.optionText,selectedOption === 'option1' && styles.optionTextSelected,]}>File</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionContainer,selectedOption === 'option2' && styles.optionSelected,]} onPress={() => handleOptionSelect('option2')}>
              <Text style={[styles.optionText, selectedOption === 'option2' && styles.optionTextSelected,]}>M3U URL</Text>
            </TouchableOpacity>
          </View>
         </View>
         <View style={styles.filePickerContainer}>
          <Text style={styles.fileUriText}>FILE/URI</Text>
          <TouchableOpacity style={styles.browseButton}>
              <Text style={styles.browseText}>BROWSE</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.User}>
          <Icon name="person-add-outline" size={25} color="#ffffff" />
            <Text style={styles.UserText}>Add User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.User}>
          <Icon name="people-outline" size={25} color="#ffffff" />
            <Text style={styles.UserText}>List Users</Text>
          </TouchableOpacity>
         </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default PlayList;
