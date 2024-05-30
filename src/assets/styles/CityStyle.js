import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp, } from './functions/PerToDp';
import AppColors from '../colours/AppColors';
import FontStyle from './FontStyle';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';


const CityStyle = StyleSheet.create({
  dropdownStyle:{
    marginLeft: wp('-4%'),
    height: hp('7%'),
    width: wp('85%'),
    backgroundColor: 'white',
    borderRadius: wp('2%'),
    padding: wp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  dropdownMainView: {
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: hp('70%'),
    borderTopLeftRadius: wp('6%'), borderTopRightRadius: wp('6%')
  },
  dropdownPlaceholder: {
    fontSize: wp('5%'),
    marginHorizontal: wp('4%')
  },
  mainContainer:{ justifyContent: 'center', alignItems: 'center', flex: 1 },
  flatlistMainContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingHorizontal:wp('3%') },
  touchableText: {color:AppColors.gradient4,marginVertical:wp('2%')},
  touchableText2: {color:AppColors.gradient2},
  headerText:{
    color: AppColors.black,
    fontFamily: FontStyle.boldFont,
    fontSize: FontStyle.font12,
    textAlign: 'center'
  },
  font20: wp('20%'),
  font12: wp('7%'),
  font4point5:wp('4.5%')
});
export default CityStyle;
