import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Header from './../../components/Profile/header'
import Body from './../../components/Profile/body'

export default function profile() {
  return (
    <View>
      <ScrollView>
      <Header/>
      <Body/>
      </ScrollView>
    </View>
  )
}