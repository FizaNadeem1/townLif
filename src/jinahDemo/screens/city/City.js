import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import AppContext from '../../../context/AppContext';
import axios from 'axios';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AppColors from '../../../assets/colours/AppColors';
import FontStyle from '../../../assets/styles/FontStyle';
import GradientStatusbar from '../../../components/GradientHeader/GradientStatusbar';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import ReactNativeModal from 'react-native-modal';
import PhoneAuthStyle from '../../../assets/styles/AuthStyle/PhoneAuthStyle';
import GradientLongButton from '../../../components/GradientLongButton';
import { Dropdown } from 'react-native-element-dropdown';
import CityStyle from '../../../assets/styles/CityStyle';

const City = ({ navigation }) => {
  //            **************                    USE STATES      *****************
  const { baseUrl, token } = useContext(AppContext)
  const flatListRef = useRef(null);
  const [allCities, setallCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [visible, setVisible] = useState(false)
  const [city, setCity] = useState('')
  const [division, setDivision] = useState([])
  const [selectedDivision, setSelectedDivision] = useState('')
  const [updateVisible, setUpdateVisible] = useState(false)
  const [saveId, setSaveId] = useState('')

  console.log("city apcontext", baseUrl, token)
  // FUNCTIONS
  const renderItem = item => {
    return (
      <View style={{
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Text style={{
          flex: 1,
          fontSize: 16,
        }}>{item.name}</Text>
        {/* {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )} */}
      </View>
    );
  };
  const hideModal = () => setVisible(false)
  const hideUpdateModal = () => setUpdateVisible(false)
  const getAllCities = async () => {
    await axios({
      method: 'post',
      url: `${baseUrl}/allAvailableCities`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      },
    })
      .then(function (response) {
        console.log('respose get city vala', response.data);
        if (response.data.message === "data found successfuly") {
          setallCities(response.data.data)
          setIsLoading(false)
        } else {
          alert("No city found");
        }
      })
      .catch(function (response) {
        //handle error
        console.log("catch error", response);
      });

  }
  const createNew = async () => {
    const formdata = new FormData();
    formdata.append('name', city);
    formdata.append('division', selectedDivision);
    console.log("request+++++++add city ++++++++", city, selectedDivision)
    await axios({
      method: 'post',
      url: `${baseUrl}/addCity`,
      data: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      },
    })
      .then(function (response) {
        console.log('respose add city vala', response.data); 
        if (response.data.save === true) {
          setVisible(false)
          setallCities(response.data.data)
          setCity('')
          setSelectedDivision('')
        } else {
          alert("Try again after few moments");
        }
      })
      .catch(function (response) {
        //handle error
        console.log("catch error", response);
      });

  }
  const getdivisions = async () => {
    await axios({
      method: 'post',
      url: `${baseUrl}/allAvailableDivisions`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      },
    })
      .then(function (response) {
        console.log('respose get division vala', response.data.data);
        if (response.data.message === "data found successfuly") {
          setDivision(response.data.data)
        } else {
          alert("No division found");
        }
      })
      .catch(function (response) {
        //handle error
        console.log("catch error", response);
      });

  }

  const updateData=async ()=>{
    const formdata = new FormData();
    formdata.append('cityName', city);
    formdata.append('division', selectedDivision);
    formdata.append('cityId', saveId);
    console.log("request++++++++update vali+++++++",city,selectedDivision)
    await axios({
      method: 'post',
      url: `${baseUrl}/updateCity`,
      data: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }, 
    })
      .then(async function (response) {
        console.log('respose update city vala', response.data);
        if (response.data.save === true) {
          setCity('')
          setSelectedDivision('')
          setSaveId(' ')
          setUpdateVisible(false)
          setallCities(response.data.data)
        } else {
          alert("Try again later");
        }
      })
      .catch(function (response) {
        //handle error 
        console.log("catch error", response);
      });

  }
  const handleDelete=async(item)=>{
    const formdata = new FormData();
    formdata.append('cityName', item.name);
    formdata.append('division', item.division._id);
    formdata.append('cityId', item._id);
    console.log("request++++++++delete vali+++++++", item)
    await axios({
      method: 'post',
      url: `${baseUrl}/deleteCity`,
      data: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      },
    })
      .then(async function (response) {
        console.log('respose delete city vala', response.data);
        if (response.data.success  === true) {
          setallCities(response.data.data)
        } else {
          alert("Try again later");
        }
      })
      .catch(function (response) {
        //handle error
        console.log("catch error", response);
      });

  }
  useEffect(() => {
    getdivisions()
  }, [])
  useEffect(() => {
    getAllCities()
  }, [])
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getAllCities();
  //   }, 5000); // Refresh data every 5 seconds (adjust as needed)
  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, [getAllCities]);
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        colors={['rgba(121, 232, 232, 0.1)', 'rgba(129, 140, 250, 0.1)',]}
        style={{
          flex: 0.2,
          // opacity: 0.1,
        }}>
        <View style={[CityStyle.mainContainer,{
          flexDirection: 'row',
        }]}>
          <Text style={[CityStyle.headerText]}>Cities</Text>
          <TouchableOpacity
            onPress={() => {
              setVisible(true)
            }}
            style={{
              position: 'absolute',
              right: hp('3%')
            }}
          >
            <Ionicons name='add-circle-sharp' size={wp('12%')} colors={AppColors.primary} />
          </TouchableOpacity>

        </View>
      </LinearGradient>
      {allCities.length != 0 ?
        <FlatList
          style={{ marginTop: 10 }}
          showsVerticalScrollIndicator={false}
          data={allCities}
          renderItem={({ item }) => {
            return (
              <ScrollView>
              <View style={[CityStyle.flatlistMainContainer]}>
                <Text>{item.name}</Text>
                <Text>{item.division.name}</Text>
                <View>
                <TouchableOpacity onPress={()=>{
                  setCity(item.name)
                  setSelectedDivision(item.division._id )
                  setUpdateVisible(true)
                  setSaveId(item._id)
                }
                  }> 
                  <Text style={[CityStyle.touchableText]}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleDelete(item)}>
                  <Text style={[CityStyle.touchableText2]}>Delete</Text>
                </TouchableOpacity>
                </View>
              </View>
              </ScrollView>
            )
          }}   
          ref={flatListRef}
        />
        : (
          <View style={[CityStyle.mainContainer]}>
            <Text style={{ fontSize: wp('4%') }}>You have no cities yet</Text>
          </View>
        )}
      <ReactNativeModal
        visible={visible}
        coverScreen={true}
        style={{ margin: 0, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.2)' }}
        animationIn="slideInUp"
        animationOut="slideInDown"
        onDismiss={hideModal}
        onBackdropPress={hideModal}
        onBackButtonPress={hideModal}>
        <View style={{
          flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: hp('70%'),
          borderTopLeftRadius: wp('6%'), borderTopRightRadius: wp('6%')
        }}>
          <Text style={{ marginLeft: wp('-70%') }}>City</Text>
          <View style={[PhoneAuthStyle.textInputView]}>
            <TextInput placeholder='Enter city' placeholderTextColor={AppColors.black} onChangeText={(val) => setCity(val)} style={[PhoneAuthStyle.textInputSize]} value={city} />
          </View>
          <Text style={{ marginLeft: wp('-64%') }}>Division</Text>
          <View style={[PhoneAuthStyle.textInputView]}>
            <Dropdown
              style={{
                marginLeft: wp('-4%'),
                height: hp('7%'),
                width: wp('85%'),
                backgroundColor: 'white',
                borderRadius: wp('2%'),
                padding: wp('1%'),
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 2,
              }
              }
              placeholderStyle={{
                fontSize: wp('5%'),
                marginHorizontal: wp('4%')
              }}
              selectedTextStyle={{
                fontSize: wp('4%'),
                color: AppColors.black, marginHorizontal: wp('4%')
              }}
              inputSearchStyle={{
                height: 40,
                fontSize: 16,
              }}
              iconStyle={{
                width: 20,
                height: 20,
              }}
              data={division}
              search
              maxHeight={300}
              labelField="name"
              valueField="_id"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={selectedDivision}
              onChange={item => {
                console.log("inside dropdown", item)
                setSelectedDivision(item._id);
              }}
              renderItem={renderItem}
            />

          </View>
          <GradientLongButton title='Create' navigation={navigation} handleSignUp={() => createNew()} />

        </View>
      </ReactNativeModal>

      <ReactNativeModal
        visible={updateVisible}
        coverScreen={true}
        style={{ margin: 0, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.2)' }}
        animationIn="slideInUp"
        animationOut="slideInDown"
        onDismiss={hideUpdateModal}
        onBackdropPress={hideUpdateModal}
        onBackButtonPress={hideUpdateModal}>
        <View style={[CityStyle.dropdownMainView]}>
          <Text style={{ marginLeft: wp('-70%') }}>City</Text>
          <View style={[PhoneAuthStyle.textInputView]}>
            <TextInput placeholder='Enter city' placeholderTextColor={AppColors.black} onChangeText={(val) => setCity(val)} style={[PhoneAuthStyle.textInputSize]} value={city} />
          </View>

          <Text style={{ marginLeft: wp('-64%') }}>Division</Text>
          <View style={[PhoneAuthStyle.textInputView]}>
            <Dropdown
              style={[CityStyle.dropdownStyle]}
              placeholderStyle={[CityStyle.dropdownPlaceholder]}
              selectedTextStyle={{
                fontSize: wp('4%'),
                color: AppColors.black, marginHorizontal: wp('4%')
              }}
              inputSearchStyle={{
                height: 40,
                fontSize: 16,
              }}
              iconStyle={{
                width: 20,
                height: 20,
              }}
              data={division}
              search
              maxHeight={300}
              labelField="name"
              valueField="_id"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={selectedDivision}
              onChange={item => {
                console.log("inside dropdown", item)
                setSelectedDivision(item._id);
              }}
              renderItem={renderItem}
            />
          </View>
          <GradientLongButton title='Update' navigation={navigation} handleSignUp={() => updateData()} />
        </View>
      </ReactNativeModal>


    </View>


  );
};
export default City;
