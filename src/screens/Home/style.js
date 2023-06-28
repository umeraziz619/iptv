import {StyleSheet} from 'react-native'
import COLORS from '../../theme/COLORS';
const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      height: '75%',
      width: '90%',
      backgroundColor: COLORS.playlistBackgroundColor,
      borderRadius: 20,
    },
    itemcontainer: {
      height: '100%',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginTop: '2%',
    },
    largeItem: {
      flexDirection: 'row',
      backgroundColor: COLORS.white,
      height: '24%',
      width: '45%',
      marginBottom: '3%',
      alignItems: 'center',
      paddingLeft: 10,
      borderRadius: 15,
    },
    text: {
      fontSize: 15,
      fontWeight: '700',
      marginLeft: 10,
    },
    iptvText:{
        textAlign: 'center',
        width: '80%',
        color: COLORS.white,
        fontSize: 30,
        fontWeight: '700',
    }
  });


export default styles;