import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Profile } from '../screen';
import Search from '../screen/search/Search';
import { Ionicons } from '@expo/vector-icons';
import {COLORS} from "../constants/index";
function BottomTabNavigation() {

    const Tab = createBottomTabNavigator();
    const screenOptions = {
        tabBarShawLable: false,
        tabBarHidenOnKeyboard: true,
        headerShown:false,
        tabBarStyle:{
            position:'absolute',
            bottom:0,
            right:0,
            left:0,
            elevation:0,
            height:70
        }
    }
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarIcon:({focused})=>{
                    return <Ionicons name={focused ? "home":"home-outline"}
                    size={24}
                    color={focused ? COLORS.prinary: COLORS.gray2}
                    />
                }
            }}
        ></Tab.Screen>
        <Tab.Screen 
            name='Search' 
            component={Search}
            options={{
                tabBarIcon:({focused})=>{
                    return <Ionicons name={"search-sharp"}
                    size={24}
                    color={focused ? COLORS.prinary: COLORS.gray2}
                    />
                }
            }}
        ></Tab.Screen>
        <Tab.Screen 
            name='Profile' 
            component={Profile}
            options={{
                tabBarIcon:({focused})=>{
                    return <Ionicons name={focused ? "person":"person-outline"}
                    size={24}
                    color={focused ? COLORS.prinary: COLORS.gray2}
                    />
                }
            }}
        ></Tab.Screen>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
