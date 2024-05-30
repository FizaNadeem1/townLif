import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FakeSplash from './src/screens/Splash/FakeSplash';
import AuthOptions from './src/screens/Auth/AuthOptions';
import PhoneAuth from './src/screens/Auth/PhoneAuth';
import OTPverification from './src/screens/Auth/OTPverification';
import ProfileSetup from './src/screens/Auth/ProfileSetup';
import SignUp from './src/jinahDemo/screens/auth/SignUp';
import { AppProvider } from './src/context/AppContext';
import City from './src/jinahDemo/screens/city/City';
import Login from './src/jinahDemo/screens/auth/Login';
import Dashboard from './src/screens/Dashboard/Dashboard';
import ShopDetailScreen from './src/screens/ShopDetail/ShopDetailScreen';
import OrderDetail from './src/screens/Order/OrderDetail';
import Home from './src/cubilarDemo/Home';
import ProductDetail from './src/cubilarDemo/ProductDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shop from './src/cubilarDemo/Shop';
import Cart from './src/cubilarDemo/Cart';
import Profile from './src/cubilarDemo/Profile';
import AppColors from './src/assets/colours/AppColors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={({route,navigation})=>({
          tabBarActiveTintColor:AppColors.yellow,
          tabBarInactiveTintColor:AppColors.grey,
          tabBarHideOnKeyboard: 'true',
          tabBarStyle: (() => {
            const routeName = navigation.getState().routes[navigation.getState().index].name;
            if (routeName === 'Home' && navigation.getState().routes[0].state) {
              const nestedRouteName = navigation.getState().routes[0].state.routes[navigation.getState().routes[0].state.index].name;
              if (nestedRouteName === 'ProductDetail') {
                return { display: 'none' };
              }
            }
            return {};
          })(),
          tabBarIcon:({focused})=>{
            let iconSize=wp('6')
            if (route.name === 'Home') {
              return (
                  <Entypo  name='home' color={focused?AppColors.yellow:AppColors.grey} size={iconSize} />
              )}else if(route.name==='Shop'){
                return(
                  <Entypo name='shop' color={focused?AppColors.yellow:AppColors.grey} size={iconSize} />
                )
              }else if(route.name==='Cart'){
                return(
                  <Entypo name='shopping-cart' color={focused?AppColors.yellow:AppColors.grey} size={iconSize} />
                )
              }else if(route.name==='Profile'){
                return(
                  <MaterialIcons name='person' color={focused?AppColors.yellow:AppColors.grey}  size={iconSize}/>
                )
              }
        }
        })}
        >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
        {/* <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name="Splash" component={FakeSplash} options={{ headerShown: false }}/>
          <Stack.Screen name="AuthOptions" component={AuthOptions} options={{ headerShown: false }} />
          <Stack.Screen name="PhoneAuth" component={PhoneAuth} options={{ headerShown: false }} />
          <Stack.Screen name="OTPverification" component={OTPverification} options={{ headerShown: false }} />
          <Stack.Screen name="ProfileSetup" component={ProfileSetup} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="ShopDetailScreen" component={ShopDetailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="City" component={City} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
        </Stack.Navigator> */}
      </NavigationContainer>
     </AppProvider>
  )
}


export default App;
