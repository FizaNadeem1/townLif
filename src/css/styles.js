import { StyleSheet } from "react-native";
import AppColors from "../assets/colours/AppColors";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  // home style
    container:{
        backgroundColor: AppColors.white,
        flex: 1,
        paddingHorizontal: wp('6'),
        paddingTop: hp('6'),
      }
})