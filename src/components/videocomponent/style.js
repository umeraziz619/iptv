import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101721',
  },
  gifLoading: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 0,
  },
  header: {
    height: 30,
  },
  mainSection: {
    flexDirection: 'row',
    flex: 1,
  },
  leftSection: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  none: {
    display: 'none',
  },
  ActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginTop: 7,
  },
  chaneelNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatListNumbersTop: {
    color: 'white',
    fontWeight: '500',
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  selectedItem: {
    backgroundColor: '#109cb5',
  },
  steam_iconimage: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  flatListNumbersBottom: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
    alignSelf: 'center',
  },
  cname: {
    color: 'white',
  },
  rightSection: {
    flex: 2,
  },
  touchablePlayer: {
    flex: 1,
    // marginLeft:"10%",
  },
  videoContainer: {
    flex: 1,
  },
  video: {
    width: 250,
    height: 150,
    backgroundColor: 'black',
  },
  chaneelName: {
    color: 'white',
    fontSize: 17,
    fontWeight: 500,
  },
  flatListChaneelNameContainer: {
    marginLeft: 10,
  },
});

export default styles;
