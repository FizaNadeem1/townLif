import { View, Text, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import PhoneAuthStyle from '../../../assets/styles/AuthStyle/PhoneAuthStyle';
import AppColors from '../../../assets/colours/AppColors';
import GradientLongButton from '../../../components/GradientLongButton';
import GradientStatusbar from '../../../components/GradientHeader/GradientStatusbar';
import GradientHeader from '../../../components/GradientHeader/GradientHeader';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from '../../../context/AppContext';

const SignUp = ({ navigation }) => {
  const { baseUrl } = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignUp = async() => {
    const formdata = new FormData();
    formdata.append('password', password);
    formdata.append('name', name);
    formdata.append('email', email);

    await axios({
      method: 'post',
      url: `${baseUrl}/jinahSignup`,
      data: formdata,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(async function (response) {
        if (response.data.save === true) {
          console.log('respose signup vala', response.data);
          const uId = response.data.newUser._id;
          console.log('type of', typeof uId);
          // console.log("asyncSignup",AsyncStorage.setItem('user', uId))

          if (response.data.newUser === "A user with the same email already exists.") {
            console.log("USer already exist")
            alert("USer already exist")
          } else {
            console.log("signup res token", response.data.token)
           await AsyncStorage.setItem('token', response.data.token);
            navigation.replace('City');

          }
        } else {
          alert("Account not created");
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <View style={{ flex: 1 }}>
      <GradientStatusbar />
      <GradientHeader title='Sign In' navigation={navigation} />
      <View style={[PhoneAuthStyle.container]}>
        <Text>Full Name</Text>
        <View style={[PhoneAuthStyle.textInputView]}>
          <TextInput placeholder='Enter name' placeholderTextColor={AppColors.black} onChangeText={(val) => setName(val)} style={[PhoneAuthStyle.textInputSize]} value={name}/>
          <View style={[PhoneAuthStyle.emailIconView]}>
            <Ionicons name='person-outline' size={wp('4%')} color={AppColors.primary} />
          </View>
        </View>
        <Text>Email</Text>
        <View style={[PhoneAuthStyle.textInputView]}>
          <TextInput placeholder='Enter email' placeholderTextColor={AppColors.black} onChangeText={(val) => setEmail(val)} style={[PhoneAuthStyle.textInputSize]} value={email}/>
          <View style={[PhoneAuthStyle.emailIconView]}>
            <MaterialCommunityIcons name='email-outline' size={wp('4%')} color={AppColors.primary} />
          </View>
        </View>

        <Text>Password</Text>
        <View style={[PhoneAuthStyle.textInputView]}>
          <TextInput placeholder='Enter password' placeholderTextColor={AppColors.black} onChangeText={(val) => setPassword(val)} style={[PhoneAuthStyle.textInputSize]} value={password}/>
          <View style={[PhoneAuthStyle.emailIconView]}>
            <SimpleLineIcons name='lock' size={wp('4%')} color={AppColors.primary} />
          </View>
        </View>

        <GradientLongButton title='Sign up' navigation={navigation} handleSignUp={() => handleSignUp()} />
      </View>
    </View>
  )
}

export default SignUp