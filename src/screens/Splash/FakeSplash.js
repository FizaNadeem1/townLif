import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import SplashStyle from '../../assets/styles/SplashStyle/SplashStyle'
import AppColors from '../../assets/colours/AppColors'
import axios from 'axios'
import AppContext from '../../context/AppContext'

const FakeSplash = ({ navigation }) => {  

  const { baseUrl } = useContext(AppContext);
 
  // useEffect(async()=>{  
  //   const token=await AsyncStorage.getItem('token');
  //   try{
  //     await axios.post(`${baseUrl}/verify?id=${Id}`, {}, {
  //       headers: { Authorization: `Bearer ${token}` }
  //     }).then(async function (response) { 
  //       if(response.message)
  //       navigation.replace('City'); 

  //     })
  //     .catch(function (response) {
  //       //handle error
  //       console.log(response);
  //     });
  //   }catch(error){

  //   }

  // },[])
  return (
    <View style={[SplashStyle.container]}>
      <StatusBar backgroundColor={AppColors.white} barStyle={'dark-content'} />
      <TouchableOpacity onPress={() => {
        navigation.navigate('AuthOptions')
      }}>
        <Text style={[SplashStyle.text]}>TownLift</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FakeSplash