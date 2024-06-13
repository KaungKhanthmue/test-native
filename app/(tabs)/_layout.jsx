import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Colors} from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
    }}>
        <Tabs.Screen name='home'
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor : Colors.PRIMARY,
          tabBarIcon: ({ color}) => <FontAwesome name="home" size={24} color={color} />
          
        }}/>
        <Tabs.Screen name='explore'
         options={{
          tabBarLabel: 'Eplore',
          tabBarActiveTintColor : Colors.PRIMARY,
          tabBarIcon: ({ color}) => <AntDesign name="search1" size={24} color="black" />
          
        }}/>
        <Tabs.Screen name='profile'
         options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor : Colors.PRIMARY,
          tabBarIcon: ({ color}) => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
          
        }}/>
    </Tabs>
  )
}