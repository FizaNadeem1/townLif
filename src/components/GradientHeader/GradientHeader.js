import { View, Text } from 'react-native'
import React from 'react'
import AppColors from '../../assets/colours/AppColors'
import PhoneAuthStyle from '../../assets/styles/AuthStyle/PhoneAuthStyle'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import AuthHeader from '../AuthHeader/AuthHeader'

const GradientHeader = ({title, navigation}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      colors={['rgba(121, 232, 232, 0.1)', 'rgba(129, 140, 250, 0.1)',]}
      style={{
        flex: 0.2,
        // opacity: 0.1,
      }}>
        <AuthHeader title={title} navigation={navigation}/>
    </LinearGradient>
  )
}

export default GradientHeader