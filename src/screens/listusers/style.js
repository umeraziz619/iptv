import {StyleSheet} from 'react-native';
import COLORS from '../../theme/COLORS';

const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.loginscreenbackgroundshade,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image:{
    height:100,
    width:100,
  },
  header:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
addUser:{
    height:"30%",
    width:"100%",
    justifyContent:'center',
    alignItems:'center',
},
footer:{
    height:30,
    width:"100%",
     
      
    flexDirection:'row',
    justifyContent:'center',
  },
  textListUser:{
    color:COLORS.white,
    fontSize:23,
    fontWeight:'600',
  },
  headerAddUserContainer:{
    backgroundColor: COLORS.boxBackgroundColor,
    padding:8,
    flexDirection:'row',
    borderRadius:20,
    marginRight:8,
  },
  headerAddUserText:{
    marginLeft:10,
    color:COLORS.white,
    fontSize:17,
    alignSelf:"center",
  },
  addnewUserText:{
    color:COLORS.white,
    fontSize:25,
  },
  icon:{
    height:60,
    width:60,
    paddingLeft:6,
    paddingTop:2,
    borderRadius:50,
    backgroundColor: COLORS.boxBackgroundColor,
  },
  footertext:{
      letterSpacing:1,
    fontSize:13,
    color:COLORS.white,
  },
  textunderline:{
    marginLeft:3,
    fontSize:13,
    letterSpacing:1,
    fontWeight:'700',
    color:COLORS.white,
    textDecorationLine:'underline'
  }
});

export default styles;
