import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../colours/AppColors';
import FontStyle from '../FontStyle';

const SplashStyle = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:AppColors.white
  },
  text:{
    color:AppColors.primary,
    fontFamily:FontStyle.boldFont,
    fontSize:FontStyle.font20
  }
});
export default SplashStyle;
