import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../colours/AppColors';
import FontStyle from '../FontStyle';
// import { widthPercentageToDP as wp,heightPercentageToDP as hp, } from '../functions/PerToDp';


const PhoneAuthStyle = StyleSheet.create({
  container:{flex:1,backgroundColor:AppColors.white,
    borderTopLeftRadius:wp('7%'),borderTopRightRadius:wp('7%'),position:'absolute',
    top:hp('20%'),height:hp('100%'),
    padding:wp('8%'),paddingLeft:wp('8%')},
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  headerText: {
    color: AppColors.black,
    fontFamily: FontStyle.boldFont,
    fontSize: FontStyle.font12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  simpleText: {
    fontSize: wp('4%'),
    fontFamily: FontStyle.regularFont,
    color: AppColors.black,

  },
  iconContainerView: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: 100,
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: hp('3%')
  },
  textInputView: {
    flexDirection: 'row',
    width: wp('85%'),
    height: hp('7%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: wp('0.2%'),
    borderColor: AppColors.grey,
    borderRadius: wp('3%'),
    marginVertical: hp('1.3%'),
    opacity:0.9,
    paddingHorizontal:wp('4%')
  },
  textInputSize:{
    width:wp('60%')
  },
  emailIconView: {
    width: wp('9%'),
    height: wp('9%'),
    borderRadius: wp('3%'),
    backgroundColor: 'rgba(17, 146, 248, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
// opacity:0.4
  },
  touchableOpacity: {
    flexDirection: 'row',
    width: wp('85%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp('0.2%'),
    borderColor: AppColors.primary,
    borderRadius: wp('3%'),
    marginVertical: hp('1.3%'),
    // opacity:0.9,
    // paddingHorizontal:wp('4%')
  },
  touchableText: {
    color: AppColors.white,
    fontFamily: FontStyle.semiBoldFont,
    fontSize: wp('4.5%')
  },
  imagetext: {
    color:AppColors.primary,
    fontFamily:FontStyle.regularFont,
    alignSelf:'center',
    marginTop:hp('2%'),
    marginBottom:hp('5%')
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
  

});
export default PhoneAuthStyle;
