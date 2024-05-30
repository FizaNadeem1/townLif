import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import AppColors from '../assets/colours/AppColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
const Cart = () => <Text>Cart</Text>
const Profile = () => <Text>Profile</Text>
const Shop = () => <Text>Shop</Text>

const Navigation = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route, navigation }) => ({
                    tabBarActiveTintColor: AppColors.yellow,
                    tabBarInactiveTintColor: AppColors.grey,
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
                    tabBarIcon: ({ focused }) => {
                        let iconSize = wp('6')
                        if (route.name === 'Home') {
                            return (
                                <Entypo name='home' color={focused ? AppColors.yellow : AppColors.grey} size={iconSize} />
                            )
                        } else if (route.name === 'Shop') {
                            return (
                                <Entypo name='shop' color={focused ? AppColors.yellow : AppColors.grey} size={iconSize} />
                            )
                        } else if (route.name === 'Cart') {
                            return (
                                <Entypo name='shopping-cart' color={focused ? AppColors.yellow : AppColors.grey} size={iconSize} />
                            )
                        } else if (route.name === 'Profile') {
                            return (
                                <MaterialIcons name='person' color={focused ? AppColors.yellow : AppColors.grey} size={iconSize} />
                            )
                        }
                    }
                })}
            >
                <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
                <Tab.Screen name="Shop" component={Shop} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Profile" component={Profile} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation