import { View, Text, TextInput, StatusBar } from 'react-native'
import React from 'react'
import AppColors from '../../assets/colours/AppColors'
import PhoneAuthStyle from '../../assets/styles/AuthStyle/PhoneAuthStyle'
import GradientLongButton from '../../components/GradientLongButton'
import GradientHeader from '../../components/GradientHeader/GradientHeader'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import GradientStatusbar from '../../components/GradientHeader/GradientStatusbar'

const OTPverification = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <GradientStatusbar/>
            <GradientHeader title='OTP Verification' navigation={navigation}/>
      <View style={[PhoneAuthStyle.container]}>
        <Text style={[PhoneAuthStyle.simpleText]}>Enter a 4 digit OTP we have sent on your{'\n'}
          *GIVEN NUMBER*</Text>
        <View style={[PhoneAuthStyle.textInputView, { justifyContent: 'center' }]}>
          <TextInput placeholder='1234' placeholderTextColor={AppColors.black} />
        </View>
        <GradientLongButton title='Verify Code' navigation={navigation} navigateTo='ProfileSetup' />
      </View>
    </View>
  )
}

export default OTPverification