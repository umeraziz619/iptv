import {StyleSheet} from 'react-native'
import COLORS from '../../theme/COLORS';

const styles = StyleSheet.create({
    imagebackground:{
        flex:1,
    },
    container:{
        flex:1,
        backgroundColor:COLORS.loginscreenbackgroundshade,
        justifyContent:'center',
        alignItems:'center',    
    },
    linearGradient:{
       
    },
    box:{
        borderRadius:25,
        height:"80%",
        width:"60%",
        backgroundColor:COLORS.boxBackgroundColor,
    },
    touchableOpacity:{
        padding:3,
        marginTop:"3%",
        width:'85%',
        alignSelf:'center',
        flexDirection:'row',
        backgroundColor:COLORS.loginscreenbackgroundshade,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
    },
    text:{
        color:COLORS.white,
        fontSize:33                                                                     ,
        fontWeight:'500',
        marginLeft:"8%",
    }

})

export default styles;