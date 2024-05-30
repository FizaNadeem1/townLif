import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppColors from '../assets/colours/AppColors'
import PhoneAuthStyle from '../assets/styles/AuthStyle/PhoneAuthStyle'
import LinearGradient from 'react-native-linear-gradient'

const GradientLongButton = ({title,navigation,
  // handleSignUp,
  navigateTo}) => {
  return (
    <TouchableOpacity onPress={()=>{
      // handleSignUp()
      navigation.navigate(navigateTo)
    }}>
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      colors={[AppColors.gradient3, AppColors.gradient4,]} 
      style={[PhoneAuthStyle.touchableOpacity]}>
        
        <Text style={[PhoneAuthStyle.touchableText]}>{title}</Text>

    </LinearGradient>
    </TouchableOpacity>
  )
}

export default GradientLongButton