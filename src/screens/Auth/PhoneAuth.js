import { View, Text, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AppColors from '../../assets/colours/AppColors'
import PhoneAuthStyle from '../../assets/styles/AuthStyle/PhoneAuthStyle'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GradientHeader from '../../components/GradientHeader/GradientHeader'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import GradientLongButton from '../../components/GradientLongButton'
import GradientStatusbar from '../../components/GradientHeader/GradientStatusbar'
const PhoneAuth = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <GradientStatusbar/>
      <GradientHeader title='Sign In' navigation={navigation}/>
    <View style={[PhoneAuthStyle.container]}>
      <Text style={[PhoneAuthStyle.simpleText]}>Phone Number</Text>
      <View style={[PhoneAuthStyle.textInputView]}>
        <TextInput placeholder='+92 3xxxxxxxxx' placeholderTextColor={AppColors.black}/>
        <View style={[PhoneAuthStyle.emailIconView]}>
        <FontAwesome6 name='phone' size={wp('4%')} color={AppColors.primary}/>
        </View>
      </View>
        <GradientLongButton title='Sent OTP' navigation={navigation} navigateTo='OTPverification'/>
    </View>
     </View>
  )
}

export default PhoneAuth