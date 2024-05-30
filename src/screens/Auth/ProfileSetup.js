import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GradientHeader from '../../components/GradientHeader/GradientHeader'
import AppColors from '../../assets/colours/AppColors'
import PhoneAuthStyle from '../../assets/styles/AuthStyle/PhoneAuthStyle'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GradientLongButton from '../../components/GradientLongButton'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'
import FontStyle from '../../assets/styles/FontStyle'
const ProfileSetup = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <GradientHeader title='Complete Profile' navigation={navigation} />
      <View style={[PhoneAuthStyle.container]}>
      <View style={{
          justifyContent: 'center', alignItems: 'center',
          borderColor: AppColors.primary, alignSelf: 'center',
          borderWidth: wp('0.5%'), height: wp('20%'), width: wp('20%'),
          borderRadius: 100, borderStyle: 'dashed'
        }}>
          <Entypo name='camera' size={wp('6%')} color={AppColors.primary} />
        </View>
        <Text style={[PhoneAuthStyle.imagetext]}>Choose A Beautiful Picture</Text>
        <Text style={{fontFamily:FontStyle.regularFont,fontSize:wp('3.2%')}}>Full Name</Text>
        <View style={[PhoneAuthStyle.textInputView]}>
          <TextInput placeholder='Enter name' placeholderTextColor={AppColors.black} style={{fontFamily:FontStyle.mediumFont,width:wp('65%')}}/>
             <View style={[PhoneAuthStyle.emailIconView]}>
            <Ionicons name='person-outline' size={wp('4%')} color={AppColors.primary} />
          </View>
        </View>
        <Text style={{fontFamily:FontStyle.regularFont,fontSize:wp('3.2%')}}>Email</Text>
        <View style={[PhoneAuthStyle.textInputView]}>
          <TextInput placeholder='Enter email' placeholderTextColor={AppColors.black} style={{fontFamily:FontStyle.mediumFont,width:wp('65%')}}/>   
          <View style={[PhoneAuthStyle.emailIconView]}>
            <MaterialCommunityIcons name='email-outline' size={wp('4%')} color={AppColors.primary} />
          </View>
        </View>
        <Text style={{fontFamily:FontStyle.regularFont,fontSize:wp('3.2%')}}>Password</Text>
        <View style={[PhoneAuthStyle.textInputView]}>
          <TextInput placeholder='Enter password' placeholderTextColor={AppColors.black}  style={{fontFamily:FontStyle.mediumFont,width:wp('65%')}}  />
          <View style={[PhoneAuthStyle.emailIconView]}>
            <SimpleLineIcons name='lock' size={wp('4%')} color={AppColors.primary} />
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>

        {isChecked ?
        <TouchableOpacity onPress={()=>{
          setIsChecked(false)
        }}>
          <AntDesign name='checksquareo' color={AppColors.primary} size={wp('5%')}/>
        </TouchableOpacity> 
         : 
         <TouchableOpacity onPress={()=>{
          setIsChecked(true)
         }}>
           <Ionicons name='square-outline'color={AppColors.primary} size={wp('5%')}/>
          </TouchableOpacity>
           }
        <Text style={{fontFamily:FontStyle.mediumFont,fontSize:wp('3.2%')}}>By Signing Up You Agree To Chiro Board Review{'\n'} <TouchableOpacity>
          <Text style={{borderBottomColor:AppColors.black,fontFamily:FontStyle.semiBoldFont,borderBottomWidth:wp('0.1%'),marginBottom:hp('5%')}}>Terms And Conditions.</Text></TouchableOpacity> </Text>
        </View>
        <GradientLongButton title='Verify Code' navigation={navigation} navigateTo='Dashboard' />
      </View>
    </View>
  )
}

export default ProfileSetup