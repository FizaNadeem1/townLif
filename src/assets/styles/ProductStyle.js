import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp, } from './functions/PerToDp';
import AppColors from '../colours/AppColors';
import FontStyle from './FontStyle';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';


const ProductStyle = StyleSheet.create({
  container: { backgroundColor: AppColors.white, flex: 1, paddingHorizontal: wp('4'), paddingTop: hp('4') },
imageStyle:{ backgroundColor: AppColors.grey, width: wp('90'),height:hp('39'),borderTopRightRadius:wp('4'),borderTopLeftRadius:wp('4'), flex: 1, paddingHorizontal: wp('4'), paddingTop: hp('4') },
iconContainer:{ flexDirection: 'row', width: wp('90'), justifyContent: 'space-between', alignItems: 'center', padding: wp('7') },
productDetailContainer:{ paddingHorizontal: wp('6'), marginTop: hp('31'), flex: 1 },
productTitle:{ fontFamily: FontStyle.boldFont, color: AppColors.black, fontSize: wp('3.5') },
productPrice:{ fontFamily: FontStyle.boldFont, color: AppColors.yellow, fontSize: wp('4') },
heading:{ fontFamily: FontStyle.semiBoldFont, color: AppColors.black, marginTop: hp('2') },
reviewText:{ fontFamily: FontStyle.mediumFont, color: AppColors.yellow, fontSize: wp('3.3') },
descriptionText:{ fontFamily: FontStyle.regularFont, marginTop: hp('1'), fontSize: wp('3.3') },
touchableView:{
    borderWidth: wp('0.1'), borderColor: AppColors.black, height: hp('2.1'), width: wp('4.8'), marginRight: wp('2'), justifyContent: 'center', alignItems: 'center',
  },
  sizeView:{ borderRadius: wp('3'), flexDirection: 'row', paddingHorizontal: wp('4'), marginBottom: wp('10'), borderWidth: wp('0.1'), width: wp('45'), height: hp('7'), justifyContent: 'space-between', alignItems: 'center' },
  longButton:{
    backgroundColor: AppColors.orange, width: wp('80%'),
    height: hp('6%'), justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2')
  },
  touchableText:{ fontFamily: FontStyle.semiBoldFont, color: AppColors.white, fontSize: wp('4') }
});
export default ProductStyle;
