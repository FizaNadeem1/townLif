import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import PhoneAuthStyle from '../../assets/styles/AuthStyle/PhoneAuthStyle'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AppColors from '../../assets/colours/AppColors'

const AuthHeader = ({title,navigation}) => {
  return (
    <View style={[PhoneAuthStyle.headerView]}>
    <TouchableOpacity 
    onPress={()=>{
        navigation.goBack();
    }}
    style={[PhoneAuthStyle.iconContainerView]}>
      <SimpleLineIcons name='arrow-left' size={wp('3%')} colors={AppColors.black} />
    </TouchableOpacity>
    <Text style={[PhoneAuthStyle.headerText]}>
      {title}
    </Text>
  </View>
)
}

export default AuthHeader