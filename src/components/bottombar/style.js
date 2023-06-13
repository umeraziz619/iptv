import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    sectionLeftBottomBar: {
        height: "22%",
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(6, 21, 18, 0.35)',
        flexDirection:"row",
        justifyContent:'space-evenly',
        alignItems:'center',
      },
      sectionLeftBottomBarText:{
        color:"#ffffff"
      },
      sectionLeftBottomBarIcon:{
        backgroundColor:'white',
        width:"20%",
        borderRadius:10,
        alignSelf:'center',
        paddingLeft:"4%",
      },
});

export default styles;


