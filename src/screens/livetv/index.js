import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChaneeList from '../../components/chaneelList';

const Livetv = () => {
  const navigation = useNavigation();
  const [column, setColumn] = useState(4);
  const [hide, setHide] = useState(false);
  const [chaneelList, setChaneelList] = useState([]);
  const [selectedCategory, setselectedCategory] = useState(7016);
  const [userData, setUserData] = useState(null); // Add the userData state
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  useEffect(() => {
    const getChaneelList = async () => {
      try {
        const storedChaneelList = await AsyncStorage.getItem('chaneelList');
        if (storedChaneelList !== null) {
          const list = JSON.parse(storedChaneelList);
          setChaneelList(list);
          const userData = await AsyncStorage.getItem('userData');
          setUserData(JSON.parse(userData));
          setUserData(JSON.parse(userData));
        } else {
          console.log('Chaneel list not found in AsyncStorage.');
        }
      } catch (error) {
        console.log('Failed to retrieve chaneel list:', error);
      }
    };
    getChaneelList();
  }, []);

  const renderItem = ({item, index}) => {
    let handleCategoryPress = () => {
      setselectedCategory(item.category_id);
      setSelectedItemIndex(index);
      console.log(item.category_id);
    };
    const itemStyle = selectedItemIndex === index ? styles.selectedItem : {};
    return (
      <TouchableOpacity
        delayPressOut={0}
        delayPressIn={0}
        activeOpacity={0}
        style={[styles.leftFlatListContainer, itemStyle]}
        onPress={handleCategoryPress}>
        <Text style={styles.chaneelName}>{item.category_name}</Text>
        <Text style={styles.chaneelNumber}>{item.category_id}</Text>
      </TouchableOpacity>
    );
  };

  const handleHide = () => {
    setHide(!hide);
    console.log(hide);
    if (column === 4) {
      setColumn(5);
    }
    if (column === 5) {
      setColumn(4);
    }
  };
  return (
    <View  colors={['#04D2D9', '#306DFC']} style={styles.container}>
      <View
        style={{
          height: '8%',
          flexDirection: 'row',
          alignItems: 'center',
 
        }}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.logo}>IPTV SMARTERS</Text>
        <TouchableOpacity onPress={handleHide}>
          {hide ? (
            <Icon name="list-outline" size={30} color="#ffffff" />
          ) : (
            <Icon name="close" size={30} color="#ffffff" />
          )}
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor="#101721" />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={[
            styles.leftSection,
            hide ? {display: 'none'} : {display: 'flex'},
          ]}>
          {/* <View style={styles.leftHeader}></View> */}
          <View style={styles.searchbox}>
            <Icon name="search" size={30} color="#ffffff" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="Search Categories"
              placeholderTextColor="#ffffff"
            />
          </View>
          <FlatList
            data={chaneelList}
            renderItem={renderItem}
            keyExtractor={item => item.category_id.toString()}
          />
        </View>
        <View style={styles.rightSection}>
          {userData && (
            <ChaneeList
              chaneelCategory={selectedCategory}
              userData={userData}
              numColums={column}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Livetv;
