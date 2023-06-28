import {StyleSheet} from 'react-native';
import COLORS from '../../theme/COLORS';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.loginscreenbackgroundshade,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {},
  box: {
    borderRadius: 25,
    height: '60%',
    width: '92%',
    backgroundColor: COLORS.boxBackgroundColor,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize:25,
    fontWeight:'600',
  },
  textInput: {
    backgroundColor: COLORS.inputBackgroundColor,
    width:"85%",
    fontSize:17,
    fontWeight:'400',
    borderRadius:10,
    color:COLORS.pure_white,
    padding:9,
    },
    button:{
        backgroundColor:COLORS.pure_white,
        padding:15,
        borderRadius:50,
    },
    butonText:{
        fontSize:17,
        fontWeight:'700',
    }
});

export default styles;
