import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101721',
  },
  headerContainer:{

  },
  leftSection: {
    marginLeft: 20,
    flex: 1,
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
    marginRight:20,
  },
  icon: {
    marginLeft: 5,
    alignSelf: 'center',
  },
  goBack:{
    marginRight:20,
  },
  searchbox: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    justifyContent: 'space-around',
    marginBottom:14,
  },
  textInput: {
    width: '80%',
    color: 'white',
    height: 40,
    fontWeight: '400',
    fontSize: 15,
    padding: 3,
    backgroundColor: 'transparent',
  },
  leftFlatListContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    lineHeight: 1,
    borderBottomColor: 'white',
    marginBottom: 10,
    borderBottomWidth: 0.2,
    borderColor: 'white',
    padding:7,
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
    width:90,
    height:90,
    margin:10,
  },
  selectedItem: {
    backgroundColor: 'green',
  }
});

export default styles;
