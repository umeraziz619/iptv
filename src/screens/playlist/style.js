import {StyleSheet} from 'react-native';
import COLORS from '../../theme/COLORS';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    height: '75%',
    width: '90%',
    backgroundColor: COLORS.playlistBackgroundColor,
    borderRadius: 20,
    justifyContent: 'center',
  },
  itemContainer: {
    height: '100%',
    width: '68%',
  },
  nameContainer: {
    marginTop: '3%',
    flexDirection: 'row',
  },
  nameText: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: '500',
    marginRight: '4%',
  },
  input: {
    borderWidth: 1,
    width: '50%',
    height: 40,
    fontSize: 17,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    fontWeight: '600',
    padding: 10,
  },
  iptvText: {
    textAlign: 'center',
    width: '80%',
    color: COLORS.white,
    fontSize: 30,
    fontWeight: '500',
  },
  playListContainer: {
    marginTop: '3%',
    flexDirection: 'row',
  },
  playListText: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: '500',
  },
  optionContainermain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
    marginLeft: '5%',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  optionSelected: {
    backgroundColor: COLORS.optionSelectedBackground,
    shadowColor: COLORS.black,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  optionText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 5,
    padding: 10,

  },
  optionTextSelected: {
    fontWeight: 'bold',
  },
  filePickerContainer:{
    marginTop:"2%",
    flexDirection:'row',
  },
  fileUriText:{
    marginTop:6,
    fontSize:19,
    fontWeight:'500',
    color:COLORS.white,
  },
  browseButton:{
    backgroundColor:COLORS.browsebuttonBackground,
    padding:12,
    marginLeft:"20%",
    borderRadius:10,
  },
  browseText:{
    color:COLORS.white,
    fontSize:17,
    alignSelf:'center',
    fontWeight:'500',
  },
  buttonContainer:{
    justifyContent:'center',
    flexDirection:'row',
    height:"15%",
    marginTop:10,
    marginRight:30,
  },
  User:{
    backgroundColor:COLORS.userBackgroundColor,
    marginRight:4,
    width:"30%",
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:10,
    flexDirection:'row'
  },
  UserText:{
    fontSize:20,
    fontWeight:'500',
    color:COLORS.white
  }
});

export default styles;
