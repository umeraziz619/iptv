import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "backgroundColor: 'rgba(0, 0, 0, 0.7)",
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
    color:'white',
    fontSize:23,
    fontWeight:'600',
  },
  headerAddUserContainer:{
    backgroundColor: 'rgba(234, 245, 251, 0.2)',
    padding:8,
    flexDirection:'row',
    borderRadius:20,
    marginRight:8,
  },
  headerAddUserText:{
    marginLeft:10,
    color:'white',
    fontSize:17,
    alignSelf:"center",
  },
  addnewUserText:{
    color:'white',
    fontSize:25,
  },
  icon:{
    height:60,
    width:60,
    paddingLeft:6,
    paddingTop:2,
    borderRadius:50,
    backgroundColor: 'rgba(234, 245, 251, 0.2)',
  },
  footertext:{
      letterSpacing:1,
    fontSize:13,
    color:'white',
  },
  textunderline:{
    marginLeft:3,
    fontSize:13,
    letterSpacing:1,
    fontWeight:'700',
    color:'white',
    textDecorationLine:'underline'
  }
});

export default styles;
