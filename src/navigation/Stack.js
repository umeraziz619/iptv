import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import PlayList from '../screens/playlist';
import Loaddevice from '../screens/loaddevice';
import SingleStream from '../screens/singlestream';
import ListUsers from '../screens/listusers';
import LoginXtream from '../screens/loginxtrem';
import Iptvhome from '../screens/iptvhome';
import Livetv from '../screens/livetv';
import Playchaneel from '../screens/playchaneel';
import Player from '../screens/player';
const Stack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="PlayList"
          options={{headerShown: false}}
          component={PlayList}
        />
        <Stack.Screen
          name="loadDevice"
          options={{headerShown: false}}
          component={Loaddevice}
        />
        <Stack.Screen
          name="singlestream"
          options={{headerShown: false}}
          component={SingleStream}
        />
        <Stack.Screen
          name="listusers"
          options={{headerShown: false}}
          component={ListUsers}
        />
        <Stack.Screen
          name="loginxtream"
          options={{headerShown: false}}
          component={LoginXtream}
        />
        <Stack.Screen
          name="iptvhome"
          options={{headerShown: false}}
          component={Iptvhome}
        />
        <Stack.Screen
          name="livetv"
          options={{headerShown: false}}
          component={Livetv}
        />
        <Stack.Screen
          name="playchaneel"
          options={{headerShown: false}}
          component={Playchaneel}
        />
        <Stack.Screen
        name='player'
        options={{headerShown:false}}
        component={Player}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;

const styles = StyleSheet.create({});
