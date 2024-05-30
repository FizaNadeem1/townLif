import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AppColors from '../../assets/colours/AppColors'
import FontStyle from '../../assets/styles/FontStyle'

const ShopDetailScreen = (props, { navigation }) => {
    const { data } = props.route.params;

    return (
        <View>
            <View style={{ height: hp('41%'), width: wp('95'), alignSelf: 'center', marginBottom: hp('2'), borderRadius: wp('4'), backgroundColor: AppColors.white }}>
                <ImageBackground source={require('../../assets/images/shop.png')} style={{ height: hp('30'), width: wp('100'), borderTopLeftRadius: wp('4'), borderTopRightRadius: wp('4'), alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => {
                        props.navigation.goBack();
                    }}
                        style={{ backgroundColor: AppColors.white, position: 'absolute', top: hp('13'), left: wp('15'), borderRadius: 100, }}>
                        <Entypo
                            name="chevron-thin-left"
                            color={AppColors.black}
                            size={wp('9')}
                        />
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={{ paddingHorizontal: wp('2'), color: AppColors.black, marginTop: wp('2'), fontFamily: FontStyle.mediumFont }}>{data.shopName}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', paddingHorizontal: wp('2') }}>
                    <Text>{data.deliveryFee}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ backgroundColor: AppColors.grey, width: wp('6'), height: wp('6'), borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name={data.isFavourite ? 'heart' : 'hearto'} color={AppColors.green} size={wp('4%')} />
                        </TouchableOpacity>
                        <View style={{
                            backgroundColor: AppColors.grey, height: wp('6'), flexDirection: 'row', borderRadius: 100, marginHorizontal: wp('1'), paddingHorizontal: wp('1')
                            , justifyContent: 'space-between', alignItems: 'center'
                        }}>
                            <TouchableOpacity>
                                <AntDesign name={data.isRated ? 'star' : 'staro'} color={AppColors.yellow} size={wp('5%')} style={{ marginRight: wp('1') }} />
                            </TouchableOpacity>
                            <Text>{data.rattingCount}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={{fontFamily:FontStyle.mediumFont,fontSize:wp('5'),marginHorizontal:wp('4'),color:AppColors.black,marginBottom:hp('2')}}>Your Previous Orders</Text>
            <View style={{height:hp('57')}}>
            <View style={{ flexDirection: 'row',height:hp('12') ,justifyContent:'space-between',
             borderRadius: wp('2'),alignItems: 'center',backgroundColor:AppColors.white, 
             paddingHorizontal: wp('2')
             ,marginHorizontal:wp('3')  
             }}>
                <View >
                    <Text>Order#12910</Text>
                    <Text style={{backgroundColor:AppColors.green,color:AppColors.white,textAlign:'center',textAlignVertical:'center',fontSize:wp('8'),fontFamily:FontStyle.mediumFont,width:wp('21'),height:hp('5'),borderRadius:wp('2')}}>24</Text>
                    <Text>March 2024</Text>
                </View>
                <View style={{width:wp('50'),justifyContent:'space-between',backgroundColor:AppColors.white,height:hp('10')}}>
                    <Text style={{fontFamily:FontStyle.regularFont,fontSize:wp('3.4')}}>{data.shopName}</Text>
                    <Text style={{lineHeight:wp('4.7'),fontFamily:FontStyle.mediumFont,color:AppColors.black,fontSize:wp('3')}}>House 324 Block C-2 Wapda Town Gujranwala</Text>
                </View>
                <View >
                    <TouchableOpacity onPress={()=>{
                        props.navigation.navigate('OrderDetail')
                    }}>
                    <Entypo
                        name="chevron-thin-right"
                        color={AppColors.black}
                        size={wp('6')}
                    />
                    </TouchableOpacity>

                </View>
            </View>
            </View>
            <TouchableOpacity style={{backgroundColor:AppColors.primary,width:wp('100'),height:hp('10'),justifyContent:'center',alignItems:'center',position:'absolute',bottom:0}}>
                <Text style={{fontFamily:FontStyle.mediumFont,color:AppColors.white,fontSize:wp('5')}}>Start New Order</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ShopDetailScreen