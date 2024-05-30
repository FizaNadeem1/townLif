import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../colours/AppColors';
import FontStyle from '../FontStyle';
// import { widthPercentageToDP as wp,heightPercentageToDP as hp, } from '../functions/PerToDp';


const AuthOptStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: AppColors.white
  },
  mainText: {
    color: AppColors.primary,
    fontFamily: FontStyle.boldFont,
    fontSize: FontStyle.font20
  },
  containerView: {
    bottom: hp('20%'),
    position: 'absolute'
  },
  touchableView: {
    flexDirection: 'row',
    width: wp('85%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp('0.2%'),
    borderColor: AppColors.grey,
    borderRadius: wp('3%'),
    marginBottom: hp('1.3%')
  },
  blackText: {
    color: AppColors.black,
    fontFamily: FontStyle.mediumFont
  },
  googleImg: {
    height: wp('5%'),
    width: wp('5%')
  },
  iconContainer: {
    borderRadius: 100,
    backgroundColor: AppColors.primary,
    height: wp('5%'),
    width: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginView: {
    flexDirection: 'row',
    bottom: hp('5.5%'),
    position: 'absolute'
  },
  signupView: {
    flexDirection: 'row',
    bottom: hp('2.5%'),
    position: 'absolute'
  },
  simpleText: {
    fontSize: FontStyle.font4point5,
    fontFamily: FontStyle.regularFont
  },
  colredText: {
    color: AppColors.primary,
    fontFamily: FontStyle.mediumFont,
    fontSize: FontStyle.font4point5
  },

});
export default AuthOptStyle;
