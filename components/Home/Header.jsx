import { View, Text, Image,StyleSheet, TextInput,ScrollView } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function Header() {
    const{user} = useUser();
    return (
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Welcome From Bagan</Text>
            <Image source={{ uri: user?.imageUrl }} style={styles.imageFor} />
          </View>
         
        </View>
      );
}
const styles = StyleSheet.create({
    mainContainer: {
      marginTop: 40,
      borderTopWidth: 1,
      backgroundColor: '#0099ff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
      marginLeft: 3,
      marginRight: 5,
    },
    imagefor:{
        width:35,
        height:35,
        borderRadius:50,
        borderWidth:2,
        borderColor:'#fff'
    },
    headerContainer: {
      flexDirection: 'row',
      marginLeft: 7,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 5,
    },
    headerText: {
      color: '#ffe033',
      fontSize: 20,
      fontWeight: 'bold',
    },
    imageFor: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    
  });