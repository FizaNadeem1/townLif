import { View, Text, StatusBar, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppColors from '../assets/colours/AppColors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontStyle from '../assets/styles/FontStyle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import CustomStatusbar from '../components/CustomStatusbar';
import ProductStyle from '../assets/styles/ProductStyle';

const ProductDetail = (props) => {
  const { item } = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false)
  const [isRated, setIsRated] = useState(false)
  const chooseColor = [
    { color: AppColors.black },
    { color: AppColors.yellow },
    { color: AppColors.blue },
    { color: AppColors.orange },

  ]
  return (
    <View style={[ProductStyle.container]}>
      <CustomStatusbar />
      <ImageBackground
        source={item.image}
        resizeMode='cover'
        imageStyle={[ProductStyle.imageStyle]}
      >
        <View style={[ProductStyle.iconContainer]}>
          <TouchableOpacity onPress={() => {
            props.navigation.goBack()
          }}>
            <SimpleLineIcons
              name='arrow-left'
              size={wp('5%')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFavourite(!isFavourite)}
          >
            <AntDesign
              name={isFavourite ? 'heart' : 'hearto'}
              color={AppColors.black}
              size={wp('6%')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={[ProductStyle.productDetailContainer]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={[ProductStyle.productTitle]}>{item.title}</Text>
          <Text style={[ProductStyle.productPrice]}>${item.price}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => setIsRated(!isRated)}>
            <AntDesign
              name={isRated ? 'star' : 'staro'}
              color={AppColors.yellow}
              size={wp('5%')}
              style={{ marginRight: wp('1') }}
            />
          </TouchableOpacity>
          <Text style={[ProductStyle.reviewText]}>4.5(15 Review)</Text>
        </View>
        <Text style={[ProductStyle.heading]}>Details</Text>
        <Text style={[ProductStyle.descriptionText]}>Nike Dri-Fit is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer.</Text>
        <Text style={[ProductStyle.heading]}>Color:</Text>
        <FlatList
          data={chooseColor}
          numColumns={4}
          contentContainerStyle={{  marginTop: hp(2)}}
          renderItem={({ item }) => (
            <TouchableOpacity style={[ProductStyle.touchableView]}>
              <View style={{ backgroundColor: item.color, height: hp('1.6'), width: wp('4'), borderRadius: wp('0.7') }}></View>
            </TouchableOpacity>

          )}
        />
        <Text style={[[ProductStyle.heading]]}>Size:</Text>
        <View style={[ProductStyle.sizeView]}>
          <Text >CHOOSE SIZE</Text>
          <SimpleLineIcons
            name='arrow-right'
            size={wp('3%')}
          />

        </View>

        <TouchableOpacity style={[ProductStyle.longButton]}>
          <Text style={[ProductStyle.touchableText]}>Buy Now</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </View>
  )
}

export default ProductDetail