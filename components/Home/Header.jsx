import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';

export default function Header() {
    const{user} = useUser();
  return (
    <View style={{
        marginTop:40,
        borderTopColor: 'gray',
        borderTopWidth: 1,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        paddingTop:5,
        borderRadius:10,
        marginLeft:3,
        marginRight:5,
        paddingBottom:3,
        paddingLeft:7
    }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Image source={{uri:user?.imageUrl}}
            style={styles.imagefor}
            />
            <View style={{
                marginLeft:10,
                
            }}>
            <Text
            style={{
                color:'black',
                fontSize:15,
                fontWeight:'bold'
            }}
            >Welcome From Bagan</Text>
            <Text style={{
                color:'black',
                fontSize:14,
                fontWeight:'bold'
            }}>{user?.fullName}</Text>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    imagefor:{
        width:50,
        height:50,
        borderRadius:50,
        borderWidth:2,
        borderColor:'#fff'
    }
})