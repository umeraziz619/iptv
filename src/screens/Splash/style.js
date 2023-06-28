import {StyleSheet} from 'react-native'
import COLORS from '../../theme/COLORS';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.splachbackground,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        marginTop:20,
        height:240,
        width:240,
        marginBottom:30,
    },
    activityIndicator:{
        marginBottom:"10%",
    }
})

export default styles;
