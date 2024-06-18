import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function body() {
  return (
    <View>
      <View style={styles.upperButtoncontainer}>
        <View style={styles.upperButton}>
            <Text style={{fontWeight:'bold',fontSize:13}}>Suggestinons</Text>
        </View>
        <View style={styles.upperButton}>
            <Text style={{fontWeight:'bold',fontSize:13}}>Your Friends</Text>
        </View>
        <View style={styles.upperButton}>
            <Text style={{fontWeight:'bold',fontSize:13}}>Close Friends</Text>
        </View>
      </View>

      <View  style={styles.friendAllContainer}>
      <Text style={{fontSize:17,fontWeight:'bold'}}>Friend Request</Text>
       <View style={styles.requestListContainer}>
            <View style={styles.requestfriendListImage}>
                <Image style={styles.image} src="https://imgs.search.brave.com/56OGSkLUSV-x1XT1crD63dQJPNxI6cODhIfe5jJzDpI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAyLzlh/LzczLzAyOWE3M2Y4/ZTVlMTJkNGE4YzA3/ZjEyZmZiY2YzNzYx/LmpwZw" />
            </View>
            <View style={styles.requestfriendList}>
               <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold',fontSize:17}}>Aung Aung</Text>
                <Text>4d</Text>
               </View>
               <View style={{display:'flex',flexDirection:'row',gap:10,paddingVertical:10}}>
                    <View style={{width:150,height:40,backgroundColor:'blue',borderRadius:10}}>
                        <Text style={{color:'white',fontWeight:'bold',textAlign:'center',marginVertical:10}}>Confirm</Text>
                    </View>
                    <View style={{width:100,height:40,backgroundColor:'gray',borderRadius:10}}>
                        <Text style={{color:'white',fontWeight:'bold',textAlign:'center',marginVertical:10}}>Delete</Text>
                    </View>
               </View>
            </View>
       </View>
       <View style={styles.requestListContainer}>
            <View style={styles.requestfriendListImage}>
                <Image style={styles.image} src="https://imgs.search.brave.com/56OGSkLUSV-x1XT1crD63dQJPNxI6cODhIfe5jJzDpI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAyLzlh/LzczLzAyOWE3M2Y4/ZTVlMTJkNGE4YzA3/ZjEyZmZiY2YzNzYx/LmpwZw" />
            </View>
            <View style={styles.requestfriendList}>
               <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold',fontSize:17}}>Kyaw Kyaw</Text>
                <Text>4d</Text>
               </View>
               <View style={{display:'flex',flexDirection:'row',gap:10,paddingVertical:10}}>
                    <View style={{width:150,height:40,backgroundColor:'blue',borderRadius:10}}>
                        <Text style={{color:'white',fontWeight:'bold',textAlign:'center',marginVertical:10}}>Confirm</Text>
                    </View>
                    <View style={{width:100,height:40,backgroundColor:'gray',borderRadius:10}}>
                        <Text style={{color:'white',fontWeight:'bold',textAlign:'center',marginVertical:10}}>Delete</Text>
                    </View>
               </View>
            </View>
       </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    upperButtoncontainer:{
        width:'100%',
        height:50,
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:10,
        gap:10,
        shadowColor:'gray',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.58,
        shadowRadius:16.00,
        elevation:20,
    },
    upperButton:{
        height:35,
        backgroundColor:'#d9d9d9',
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:10,
        shadowColor:'gray',
        borderRadius:30,
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.58,
        elevation:20,
    },
    friendAllContainer:{
        width:'100%',
        padding:10,
        shadowColor:'gray',
    },
    requestListContainer:{
        width:'100%',
        marginTop:10,
        height:90,
        backgroundColor:'#fff',
        display: 'flex',
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:1,
        gap:10,
        shadowColor:'gray',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.58,
        shadowRadius:16.00,
        elevation:20,
    },
    requestfriendListImage:{
        width:'24%',
        height:85,
        borderRadius:50,
        backgroundColor:'#fff',
    },
    image:{
        width:85,
        height:85,
        borderRadius:50,
        resizeMode:'cover',
    },
    requestfriendList:{
        width:'75%',
        height:'100%',
    }
})