import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import AuthOptStyle from '../../assets/styles/AuthStyle/AuthOptStyle'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AppColors from '../../assets/colours/AppColors';

const AuthOptions = ({navigation}) => {
  return (
    <View style={[AuthOptStyle.container]}>
      <StatusBar backgroundColor={AppColors.white} barStyle={'dark-content'} />
      <Text style={[AuthOptStyle.mainText]}>TownLift</Text>
      <View style={[AuthOptStyle.containerView]}>
      <TouchableOpacity style={[AuthOptStyle.touchableView]}>
        <Image source={require('../../assets/images/google-color-icon.png')} style={[AuthOptStyle.googleImg]}/>
      <Text style={[AuthOptStyle.blackText]}>  Continue With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('PhoneAuth')
      }}
      style={[AuthOptStyle.touchableView]}>
        <View style={[AuthOptStyle.iconContainer]}>
        <FontAwesome6 name='phone' size={wp('3%')} color={AppColors.white}/>
        </View>
      <Text style={[AuthOptStyle.blackText]}>  Continue With Phone</Text>
      </TouchableOpacity>
      </View>
      {/* <View style={[AuthOptStyle.loginView]}>
      <Text style={[AuthOptStyle.simpleText]}>Already have an account?</Text>
      <TouchableOpacity>
      <Text style={[AuthOptStyle.colredText]}>Login</Text>
      </TouchableOpacity>
      </View>
      <View style={[AuthOptStyle.signupView]}>
      <Text style={[AuthOptStyle.simpleText]}>You need to create new account?</Text>
      <TouchableOpacity>
      <Text style={[AuthOptStyle.colredText]}>Sign Up</Text>
      </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default AuthOptions