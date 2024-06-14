import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors} from './../../constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons';

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
      <Tabs.Screen name='post'
         options={{
          tabBarLabel: 'POST',
          tabBarActiveTintColor : Colors.PRIMARY,
          tabBarIcon: ({ color}) => <MaterialCommunityIcons name="post-outline" size={24} color="black" />
          
        }}/>
        <Tabs.Screen name='friends'
         options={{
          tabBarLabel: 'Friends',
          tabBarActiveTintColor : Colors.PRIMARY,
          tabBarIcon: ({ color}) => <FontAwesome5 name="user-friends" size={24} color="black" />
          
        }}/>
        <Tabs.Screen name='map'
         options={{
          tabBarLabel: 'Map',
          tabBarActiveTintColor : Colors.PRIMARY,
          tabBarIcon: ({ color}) => <FontAwesome5 name="map-marked-alt" size={24} color="black" />
          
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