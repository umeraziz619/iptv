import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    imagebackground:{
        flex:1,
    },
    container:{
        flex:1,
        backgroundColor:"backgroundColor: 'rgba(0, 0, 0, 0.7)",
        justifyContent:'center',
        alignItems:'center',    
    },
    linearGradient:{
       
    },
    box:{
        borderRadius:25,
        height:"80%",
        width:"60%",
        backgroundColor:"rgba(234, 245, 251, 0.2)",
    },
    touchableOpacity:{
        padding:3,
        marginTop:"3%",
        width:'85%',
        alignSelf:'center',
        flexDirection:'row',
        backgroundColor:"backgroundColor: 'rgba(0, 0, 0, 0.7)",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
    },
    text:{
        color:'white',
        fontSize:33                                                                     ,
        fontWeight:'500',
        marginLeft:"8%",
    }

})

export default styles;