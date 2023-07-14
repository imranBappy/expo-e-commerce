import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/Checkout';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import SignupScreen from '../screens/SignupScreen';
import SignInScreen from '../screens/SignInScreen';
import ProductScreen from '../screens/ProductScreen';


const Stack = createStackNavigator();
function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false,
            }} name="Home" component={HomeScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />

        </Stack.Navigator>
    );
}




function ButtomTabs() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#088f8f',
                tabBarStyle: {
                    height: 60, bottom: 0, left: 0, right: 0, elevation: 50, backgroundColor: '#fff', borderTopWidth: 1,
                    shadowColor: 'gray',
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                    shadowOffset: {
                        height: 3,
                        width: 3
                    },
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                },
            }}
        >
            <Tab.Screen

                name="Home"
                component={StackNavigator}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        width: 100,
                        fontSize: 12,
                        paddingBottom: 5
                    },
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    // headerShown: false,
                    tabBarLabelStyle: {
                        width: 100,
                        fontSize: 12,
                        paddingBottom: 5

                    },
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    // headerShown: false,
                    tabBarLabelStyle: {
                        width: 100,
                        fontSize: 12,
                        paddingBottom: 5
                    },
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default ButtomTabs;