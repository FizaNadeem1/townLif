import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import AppColors from '../assets/colours/AppColors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontStyle from '../assets/styles/FontStyle';
import Feather from 'react-native-vector-icons/Feather';
import CustomStatusbar from '../components/CustomStatusbar';

const Home = ({ navigation }) => {
  const [allProducts, setAllProducts] = useState([
    {
      title: 'Nike Air Force 1',
      price: '199.99',
      image: require('../assets/images/brownShows.png'),
    },
    {
      title: 'Nike Air Force 1',
      price: '199.99',
      image: require('../assets/images/whiteShoes.png'),
    },
    {
      title: 'Nike Air Force 1',
      price: '199.99',
      image: require('../assets/images/greyShoes.png'),
    },
    {
      title: 'Nike Air Force 1',
      price: '199.99',
      image: require('../assets/images/longShoes.png'),
    },
  ]);
  const categories = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Nike' },
    { id: 3, title: 'Adidas' },
    { id: 4, title: 'Converse' },
  ]
  const [selectedCategory, setSelectedCategory] = useState('')
  const ListFooterComponent = () => {
    return (
      <View style={styles.footerHeight}></View>
    )
  }
    return (
    <View
      style={styles.container}>
      <CustomStatusbar />
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}> Hi Dhiraj! </Text>
          <Text style={styles.greetings}> Good Morning!</Text>
        </View>
        <Image
          source={require('../assets/images/cubilarProfile.jpeg')}
          style={styles.dp}
        />
      </View>
      <View style={styles.header}>
        <TextInput placeholder="Search" style={styles.searchBar} />
        <Pressable style={styles.serachBtn}>
          <Feather
            name="search"
            size={wp('5')}
            color={AppColors.white}
          />
        </Pressable>
      </View>
      <View style={styles.mv_1}>
        <FlatList
          horizontal
          contentContainerStyle={{ flex: 1, width: '100%', justifyContent: 'space-between', marginTop: hp(2) }}
          data={categories}
          renderItem={({ item }) => {
            return <View style={{ flexDirection: 'row' }}>
              <Pressable onPress={() => setSelectedCategory(item.id)} style={[styles.category_item, selectedCategory == item.id ? styles.category_selected : styles.category]}>
                <Text style={[selectedCategory == item.id ? styles.selected_categoryText : styles.categoryText]}>{item.title}</Text>
              </Pressable>
            </View>
          }}
        />
      </View>
      <FlatList
        numColumns={2}
        data={allProducts}
        contentContainerStyle={{  width: '100%', justifyContent: 'space-between', marginTop: hp(2), gap: hp(1) }}
        columnWrapperStyle={{ gap: wp(3) }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListFooterComponent}
        renderItem={({ item }) => (
          <View style={styles.product_item}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductDetail', { item: item });
              }}>
              <Image
                source={item.image}
                style={styles.product_image}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <Text style={styles.product_title}>  {item.title}</Text>
            <Text style={styles.product_price}>  ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    flex: 1,
    paddingHorizontal: wp('6'),
    paddingTop: hp('6'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontFamily: FontStyle.boldFont,
    fontSize: wp('3'),
    color: AppColors.black,
  },
  greetings: {
    fontFamily: FontStyle.boldFont,
    fontSize: wp('4'),
    color: AppColors.black,
  },
  dp: { width: wp('9'), height: wp('9'), borderRadius: 100 },
  searchBar: {
    height: hp('6'),
    padding: wp('4'),
    width: wp('70'),
    marginTop: hp('1'),
    borderColor: AppColors.black,
    borderWidth: wp('0.1'),
    borderRadius: wp('1'),
  },
  serachBtn: {
    backgroundColor: AppColors.black,
    height: hp('6'),
    width: hp('5.5'),
    borderRadius: wp('2'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1'),

  },
  mv_1: {
    marginVertical: hp('2')
  },
  categoryText: {

    textAlign: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: AppColors.black,
  },
  selected_categoryText: {

    textAlign: 'center',
    textAlignVertical: 'center',
    color: AppColors.white,
    textAlign: 'center'
  },
  category_item: {
    width: wp('19'),
    height: hp('5'),
    borderRadius: wp('3'),
    borderWidth: wp('0.1'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {

    backgroundColor: AppColors.white,
    borderColor: AppColors.black

  },
  category_selected: {

    backgroundColor: AppColors.black,
    borderColor: AppColors.white
  },
  product_item: {
    width: wp('45'),
    height: hp('32'),
  },
  product_image: {
    width: wp('40'),
    height: hp('25'),
    borderRadius: wp('3'),
    backgroundColor: '#d3d3d3',
    opacity: 0.7,
    objectFit: 'contain'
  },
  product_title: {
    fontFamily: FontStyle.regularFont,
    color: AppColors.black,
    fontSize: wp('3.5'),
    marginTop: hp(1),
    marginHorizontal: wp(3)

  },
  product_price: {
    fontFamily: FontStyle.boldFont,
    color: AppColors.black,
    fontSize: wp('3.5'),
    lineHeight: 16,
    marginHorizontal: wp(3)

  },
  footerHeight:{
    height:hp(7)
  }
})
