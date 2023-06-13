import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#101721',
  },
  leftSection: {
    marginLeft: 20,
    flex: 0.9,
  },
  leftHeader: {
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 5,
    alignSelf: 'center',
  },
  searchbox: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    justifyContent: 'space-around',
  },
  textInput: {
    width: '80%',
    color: 'white',
    height: 40,
    fontWeight: '400',
    fontSize: 15,
    padding: 3,
  },
  leftFlatListContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    lineHeight: 1,
    borderBottomColor: 'white',
    marginBottom: 10,
    borderBottomWidth: 0.2,
    borderColor: 'white',
    padding:15,
  },
  chaneelName: {
    color: 'white',
    fontSize: 15,
    fontWeight:'500',
  },
  chaneelNumber: {
    color: 'white',
    fontSize: 17,
  },
  rightSection: {
    flex: 2,
    borderColor: 'white',
    flexDirection: 'row',
    height: '100%',
  },
  rightSectionTopText: {
    color: 'white',
    alignSelf: 'center',
  },
  chaneelrenderContainer: {
    flex:1,
    width:120,
    height:100,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(14, 14, 14, 0.3)',
  },
  image:{
    height:80,
    width:80,
  },
  ActivityIndicator:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default styles;
