import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AppColors from '../../assets/colours/AppColors'
import FontStyle from '../../assets/styles/FontStyle'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import axios from 'axios'
import AppContext from '../../context/AppContext'
import { Neomorph } from 'react-native-neomorph-shadows-fixes';


const Dashboard = ({navigation}) => {
    const { baseUrl } = useContext(AppContext);

    const [shopList, setShopList] = useState([{
        shopName: 'Family Mart Wapda Town', deliveryFee: `Delivery Fee 30Rs\n 15 - 30 min`, isFavourite: false, isRated: false, rattingCount: '4.95'
    }, {
        shopName: 'Family Mart Wapda Town', deliveryFee: `Delivery Fee 30Rs\n 15 - 30 min`, isFavourite: false, isRated: false, rattingCount: '4.95'
    }, {
        shopName: 'Family Mart Wapda Town', deliveryFee: `Delivery Fee 30Rs\n 15 - 30 min`, isFavourite: false, isRated: false, rattingCount: '4.95'
    }, {
        shopName: 'Family Mart Wapda Town', deliveryFee: `Delivery Fee 30Rs\n 15 - 30 min`, isFavourite: false, isRated: false, rattingCount: '4.95'
    }, {
        shopName: 'Family Mart Wapda Town', deliveryFee: `Delivery Fee 30Rs\n 15 - 30 min`, isFavourite: false, isRated: false, rattingCount: '4.95'
    }, {
        shopName: 'Family Mart Wapda Town', deliveryFee: `Delivery Fee 30Rs\n 15 - 30 min`, isFavourite: false, isRated: false, rattingCount: '4.95'
    }, {
        shopName: 'Family Mart Wapda Town', deliveryFee: `Delivery Fee 30Rs\n 15 - 30 min`, isFavourite: false, isRated: false, rattingCount: '4.95'
    }])
    const renderItem = (data) => {
        return (
           
            <View style={{ height: hp('23%'), width: wp('95'), alignSelf: 'center', marginBottom: hp('2'), borderRadius: wp('4'), backgroundColor: AppColors.white }}>
                {/* <Neomorph 
                inner
                      darkShadowColor={AppColors.primary} // <- set this
                      lightShadowColor={AppColors.white} // <- this
                      swapShadows
                      style={{shadowRadius: 2,
                        borderRadius: wp('1.5'),
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: hp('10%'),
                        width: wp('96%'),
                        backgroundColor: AppColors.primary,
                        paddingHorizontal: 14,
                        flex: 1,}}
                      > */}
                    <Image source={require('../../assets/images/shop.png')} style={{ height: hp('12'), width: wp('95'), borderTopLeftRadius: wp('4'), borderTopRightRadius: wp('4'), alignSelf: 'center' }} />
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal: wp('2'),paddingRight:wp('3')}}>
                <Text style={{  color: AppColors.black, marginTop: wp('2'), fontFamily: FontStyle.mediumFont }}>{data.shopName}</Text>
                <TouchableOpacity onPress={()=>{
                            navigation.navigate('ShopDetailScreen',{data:data})
                            }}>
                    <Entypo
                name="chevron-thin-right"
                color={AppColors.black}
                size={wp('4')}
                style={{}}
              />
                        </TouchableOpacity>
</View>
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
                {/* </Neomorph> */}
            </View>
           
        )
    }
    const fetchAllShops=async()=>{
        //   const token=await AsyncStorage.getItem('token');
    try{
      await axios.post(`${baseUrl}/getShops`, {}, {
        // headers: { Authorization: `Bearer ${token}` }
      }).then(async function (response) { 
        if(response.status)
        setShopList(response.data)

      })
      .catch(function (response) {
        //handle error
        console.log("response error",response);
      });
    }catch(error){
        console.log("catch error",error);

    }
    }
    useEffect(()=>{
        fetchAllShops()
    },[])
    return (
        <View style={{ marginBottom: hp('4') }}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', height: hp('24'), flexDirection: 'row', paddingHorizontal: wp('9'), paddingTop: wp('8') }}>
                <Image source={require('../../assets/images/shop.png')} style={{ height: wp('20'), width: wp('20'), borderRadius: wp('100'), }} />
                <View>
                    <Text style={{ paddingHorizontal: wp('2'), color: AppColors.black, marginTop: wp('2'), fontFamily: FontStyle.regularFont }}>Good Morning🖐</Text>
                    <Text style={{ paddingHorizontal: wp('2'), color: AppColors.black, marginTop: wp('2'), fontFamily: FontStyle.mediumFont }}>Brian Robinson</Text>
                </View>
            </View>
            <Text style={{ paddingHorizontal: wp('4'), color: AppColors.black, fontFamily: FontStyle.mediumFont, fontSize: wp('7') }}>Popular Near You</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={shopList}
                renderItem={({ item }) => (renderItem(item))}
            />
        </View>
    )
}

export default Dashboard