import { View, Text } from 'react-native'
import React from 'react'
import AppColors from '../../assets/colours/AppColors'
import FontStyle from '../../assets/styles/FontStyle'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GradientHeader from '../../components/GradientHeader/GradientHeader'


const OrderDetail = ({ navigation }) => {
    return (
        <View style={{flex:1, height: hp('100')}}>
            <GradientHeader title='' navigation={navigation} />

            <View style={{
                flexDirection: 'row',  justifyContent: 'space-between',
                borderRadius: wp('2'), alignItems: 'center', backgroundColor: AppColors.white,
                paddingHorizontal: wp('2')
                //  ,marginHorizontal:wp('3')  
            }}>
                <View  style={{backgroundColor: AppColors.gradient2}}>
                    <Text>Order#12910</Text>
                    <Text style={{ backgroundColor: AppColors.green, color: AppColors.white, textAlign: 'center', textAlignVertical: 'center', fontSize: wp('8'), fontFamily: FontStyle.mediumFont, width: wp('21'), height: hp('5'), borderRadius: wp('2') }}>24</Text>
                    <Text>March 2024</Text>
                </View>
                
                <View style={{ width: wp('50'), justifyContent: 'space-between', backgroundColor: AppColors.gradient1, height: hp('10') }}>
                    <Text>Family Mart Wapda Town</Text>
                    <Text style={{ lineHeight: wp('4.7') }}>House 324 Block C-2 Wapda Town Gujranwala</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderDetail