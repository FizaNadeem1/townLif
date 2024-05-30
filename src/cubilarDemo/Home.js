import { View, Text, ScrollView, Image, TextInput, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppColors from '../assets/colours/AppColors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import FontStyle from '../assets/styles/FontStyle'
import Feather from 'react-native-vector-icons/Feather'

const Home = ({navigation}) => {
  const [allProducts, setAllProducts] = useState([
    { title: 'Nike Air Force 1', price: '199.99', image: require('../assets/images/brownShows.png') },
    { title: 'Nike Air Force 1', price: '199.99', image: require('../assets/images/whiteShoes.png') },
    { title: 'Nike Air Force 1', price: '199.99', image: require('../assets/images/greyShoes.png') },
    { title: 'Nike Air Force 1', price: '199.99', image: require('../assets/images/longShoes.png') },
  ])

  return (
    <ScrollView style={{backgroundColor:AppColors.white,flex:1,paddingHorizontal:wp('6'),paddingTop:hp('6')}}>
              <StatusBar translucent={true} backgroundColor='transparent' barStyle="dark-content" />

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems: 'center'}}>
            <View>
            <Text style={{fontFamily:FontStyle.boldFont,fontSize:wp('3'),color:AppColors.black}}>Hi Dhiraj!</Text>
            <Text style={{fontFamily:FontStyle.boldFont,fontSize:wp('4'),color:AppColors.black}}>Good Morning!</Text>
            </View>
            <Image source={require('../assets/images/cubilarProfile.jpeg')} style={{width:wp('9'),height:wp('9'),borderRadius:100}}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems: 'center'}}>
            <TextInput placeholder='Search' style={{height:hp('6'),padding:wp('4'),width:wp('70'),marginTop:hp('1'),borderColor:AppColors.black,borderWidth:wp('0.1'),borderRadius:wp('1')}}/>
            <Feather name='search' size={wp('5')} color={AppColors.white} style={{backgroundColor:AppColors.black,height:hp('5'),width:wp('11'),borderRadius:wp('2'),padding:wp('2.5')}}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems: 'center',marginVertical:hp('2')}}>
<Text style={{borderRadius:wp('3'),borderWidth:wp('0.1'),width:wp('14'),height:hp('4'),textAlign:'center',textAlignVertical:'center',backgroundColor:AppColors.black,color:AppColors.white}}>All</Text>
<Text style={{borderRadius:wp('3'),borderWidth:wp('0.1'),width:wp('19'),height:hp('4'),textAlign:'center',textAlignVertical:'center'}}>Nike</Text>
<Text style={{borderRadius:wp('3'),borderWidth:wp('0.1'),width:wp('19'),height:hp('4'),textAlign:'center',textAlignVertical:'center'}}>Adidas</Text>
<Text style={{borderRadius:wp('3'),borderWidth:wp('0.1'),width:wp('19'),height:hp('4'),textAlign:'center',textAlignVertical:'center'}}>Converse</Text>
        </View>
        <FlatList
        numColumns={2}
        data={allProducts}
        renderItem={({item})=>(
          <View style={{
            // shadowRadius: wp('3'),
            // borderRadius: wp('3'),
            // shadowOpacity: 0.01,
            width: wp('45'),
            height: hp('32'),
            // justifyContent: 'center',
            // alignItems: 'center', 
            // flexDirection: 'row',
            //  backgroundColor: getColorByIndex(index),
            // paddingHorizontal: wp('4'), 
            // marginRight: wp(''),
            marginLeft:wp('1.5'),
            marginVertical:hp('1')
          }}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('ProductDetail',{item:item})
            }}>
<Image source={item.image} style={{width:wp('40'),height:hp('25'),borderRadius:wp('3'),backgroundColor:'#d3d3d3',opacity:0.7}}/>
            </TouchableOpacity>
<Text style={{fontFamily:FontStyle.regularFont,color:AppColors.black,fontSize:wp('3.5'),padding:wp('4')}}>{item.title}</Text>
<Text style={{fontFamily:FontStyle.boldFont,color:AppColors.black,fontSize:wp('3.5'),paddingHorizontal:wp('4'),marginTop:hp('-2.5')}}>${item.price}</Text>
          </View>
        )}
        />
    </ScrollView>
  )
}

export default Home