import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Body from './../../components/Friend/body'

const friends = () => {
  return (
    <View>
      <View style={{width:'100%',height:90,backgroundColor:'white',shadowColor:'gray'}}>
        <Text style={{marginTop:50,marginLeft:5,fontSize:23,fontWeight:'bold'}}>Friends</Text>
      </View>
      <ScrollView>
      <Body/>
      </ScrollView>

    </View>
  )
}

export default friends