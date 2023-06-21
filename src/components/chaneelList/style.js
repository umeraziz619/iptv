import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101721',
  },
  chaneelrenderContainer: {
    flex:1,
    width:100,
    maxWidth:100,
    height:100,
    marginLeft:10,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor: 'rgba(14, 14, 14, 0.3)',
  },
  image:{
    height:80,
    width:80,
    alignSelf:'center'
  },
  ActivityIndicator:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default styles;
