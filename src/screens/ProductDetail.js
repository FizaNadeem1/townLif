import { View, Text, StatusBar, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppColors from '../assets/colours/AppColors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontStyle from '../assets/styles/FontStyle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import CustomStatusbar from '../components/CustomStatusbar';

const ProductDetail = (props) => {
  const { item } = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false)
  const [isRated, setIsRated] = useState(false)
  const [chooseColor, setChooseColor] = useState([
    { color: AppColors.black },
    { color: AppColors.yellow },
    { color: AppColors.blue },
    { color: AppColors.orange },

  ])
  return (
    <View style={{ backgroundColor: AppColors.white, flex: 1, paddingHorizontal: wp('4'), paddingTop: hp('4') }}>
      <CustomStatusbar />
      <ImageBackground source={item.image} resizeMode='cover' imageStyle={{ width: wp('93'), backgroundColor: AppColors.grey, height: hp('40'), borderTopRightRadius: wp('7'), borderTopLeftRadius: wp('7') }} >
        <View style={{ flexDirection: 'row', width: wp('90'), justifyContent: 'space-between', alignItems: 'center', padding: wp('7') }}>
          <TouchableOpacity onPress={() => {
            props.navigation.goBack()
          }}>
            <SimpleLineIcons name='arrow-left' size={wp('5%')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
            <AntDesign name={isFavourite ? 'heart' : 'hearto'} color={AppColors.black} size={wp('6%')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{ paddingHorizontal: wp('6'), marginTop: hp('31'), flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: FontStyle.boldFont, color: AppColors.black, fontSize: wp('3.5') }}>{item.title}</Text>
          <Text style={{ fontFamily: FontStyle.boldFont, color: AppColors.yellow, fontSize: wp('4') }}>${item.price}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => setIsRated(!isRated)}>
            <AntDesign name={isRated ? 'star' : 'staro'} color={AppColors.yellow} size={wp('5%')} style={{ marginRight: wp('1') }} />
          </TouchableOpacity>
          <Text style={{ fontFamily: FontStyle.mediumFont, color: AppColors.yellow, fontSize: wp('3.3') }}>4.5(15 Review)</Text>
        </View>
        <Text style={{ fontFamily: FontStyle.semiBoldFont, color: AppColors.black, marginTop: hp('3') }}>Details</Text>
        <Text style={{ fontFamily: FontStyle.regularFont, marginTop: hp('1'), fontSize: wp('3.3') }}>Nike Dri-Fit is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer.</Text>
        <Text style={{ fontFamily: FontStyle.semiBoldFont, color: AppColors.black, marginTop: hp('3') }}>Color:</Text>

        <FlatList
          data={chooseColor}
          numColumns={4}
          renderItem={({ item }) => (
            <TouchableOpacity style={{
              borderWidth: wp('0.1'), borderColor: AppColors.black, height: hp('2.1'), width: wp('4.8'), marginRight: wp('2'), justifyContent: 'center', alignItems: 'center',
            }}>

              <View style={{ backgroundColor: item.color, height: hp('1.6'), width: wp('4'), borderRadius: wp('0.7') }}></View>
            </TouchableOpacity>

          )}
        />

        <Text style={{ fontFamily: FontStyle.semiBoldFont, color: AppColors.black, marginTop: hp('3') }}>Size:</Text>
        <View style={{ borderRadius: wp('3'), flexDirection: 'row', paddingHorizontal: wp('4'), marginBottom: wp('10'), borderWidth: wp('0.1'), width: wp('45'), height: hp('7'), justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{}}>CHOOSE SIZE</Text>
          <SimpleLineIcons name='arrow-right' size={wp('3%')} />

        </View>

        <TouchableOpacity style={{
          backgroundColor: AppColors.orange, width: wp('80%'),
          height: hp('6%'), justifyContent: 'center',
          alignItems: 'center',
          borderRadius: wp('2')
        }}>
          <Text style={{ fontFamily: FontStyle.semiBoldFont, color: AppColors.white, fontSize: wp('4') }}>Buy Now</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </View>
  )
}

export default ProductDetail