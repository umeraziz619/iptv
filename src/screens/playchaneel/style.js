import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101721',
  },
  header:{
    height:30,
  },
  mainSection:{
    flexDirection:'row',
    flex:1,
  },
  leftSection:{
    flex:1,
  },
  flatListContainer:{
    flexDirection:'row',
    height:55,
    alignItems:'center',
    marginTop:10,
  },
  chaneelNameContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  flatListNumbersTop:{
    color:'white',
    fontWeight:'500',
  },
  selectedItem: {
    backgroundColor: 'green',
  },
  flatListNumbersBottom:{
    color:"white",
    fontWeight:'500',
  },
  cname:{
    color:'white',
  },
  rightSection:{
    flex:2,
  },
  touchablePlayer:{
    flex:1,
    // marginLeft:"10%",
  },
  video: {
    width: 250,
    height: 150,
  },
  chaneelName:{
    color:'white',
    fontSize:17,
    fontWeight:500,
  },
  flatListChaneelNameContainer:{
    marginLeft:10,
  },
  
});

export default styles;
