import {StyleSheet} from 'react-native';
import COLORS from '../../theme/COLORS';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.playChaneelScreenBackground,
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
    color: COLORS.white,
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
    backgroundColor: COLORS.searchBackgroundColor,
    borderRadius: 8,
    justifyContent: 'space-around',
    marginBottom:14,
  },
  separator:{
    height: 1,
    backgroundColor: 'gray',
  },
  textInput: {
    width: '80%',
    color: COLORS.white,
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
    borderBottomColor: COLORS.white,
    marginBottom: 10,
    borderBottomWidth: 0.2,
    borderColor: COLORS.white,
    padding:7,
  },
  chaneelName: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight:'500',
  },
  chaneelNumber: {
    color: COLORS.white,
    fontSize: 17,
  },
  rightSection: {
    flex: 2,
    borderColor: COLORS.white,
    flexDirection: 'row',
    height: '100%',
  },
  rightSectionTopText: {
    color: COLORS.white,
    alignSelf: 'center',
  },
  chaneelrenderContainer: {
    width:90,
    height:90,
    margin:10,
  },
  selectedItem: {
    backgroundColor: COLORS.indexSelectedBackground,
  }
});

export default styles;
