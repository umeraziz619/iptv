import {StyleSheet} from 'react-native';
import COLORS from '../../theme/COLORS';
const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.loginscreenbackgroundshade,
    flexDirection: 'row',
  },
  sectionone: {
    height: '100%',
    width: '50%',
  },
  sectiontwo: {
    height: '100%',
    width: '50%',
    justifyContent:'center',
    alignItems:'center',
  },
  imageContainer: {
    height: '70%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  sectiononeButtons: {
    flexDirection: 'row',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
  },
  sectionbutton: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    height: 50,
    backgroundColor: COLORS.pure_white,
    margin: 5,
    width: 150,
    flexDirection: 'row',
    borderRadius: 20,
  },
  box: {
    borderRadius: 25,
    height: '90%',
    width: '92%',
    backgroundColor: 'rgba(234, 245, 251, 0.2)',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'rgba(234, 245, 251,0.1)',
    width: '85%',
    fontSize: 17,
    fontWeight: '400',
    borderRadius: 10,
    color: COLORS.pure_white,
    padding: 9,
  },
  addUserButton: {
    backgroundColor:COLORS.pure_white,
    padding:15,
    borderRadius:15,
    borderWidth:1,
  },
  addUserText:{
    fontSize:15,
    fontWeight:'700',
  }
});

export default styles;
