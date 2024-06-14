  import { View, Text,StyleSheet, Image,Dimensions } from 'react-native'
  import React from 'react'
  import Swiper from 'react-native-swiper';

  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

  const images = [
    'https://imgs.search.brave.com/oS_w08rSefUtf0ouXWDYa3vfbfPs4gCYxKX-xGddGcw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcy/MDA1NTA5L3Bob3Rv/L2JlYXV0aWZ1bC12/aWV3LW9mLWJhZ2Fu/LW15YW5tYXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPThk/S01uVzhVbVU2WFFi/UDZDWmNXcDRRd25T/Vk9vU2hLVk9kVC1i/VXJlVTQ9',
    'https://imgs.search.brave.com/TghwX8jcQYaSu_NMoTS9rEBmpH34ayHEPcjFBQnvw9I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI4LzY3LzQy/LzM2MF9GXzEyODY3/NDI3M19BUDVnYlpP/STByd3RjYXZVa3l1/b2Q0QWs4WmFXdm9h/dy5qcGc',
    'https://imgs.search.brave.com/KpeJgvi6TwyZeWV0HaRRxY0oSBu8UAf_1l3nDBFdHxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQxOTEx/MjMuanBn',
  ];

  export default function Slider() {
    const Slide = ({ uri }) => (
      <View style={styles.slide}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    );
    return (
      <View>
 <View style={{
        marginTop:1,
        height:150,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        backgroundColor:'white',
        shadowColor:'#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        borderRadius:1,
        marginLeft:3,
        marginRight:5,
      }}>

      <Swiper showsPagination={true} loop={true} autoplay={true}>
        {images.map((uri, index) => (
          <Slide key={index} uri={uri} />
        ))}
      </Swiper>
      </View>
      <View contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
              <Text style={styles.item}>Popular pagoda</Text>
              <Text style={styles.item}>Olds pagoda</Text>
              <Text style={styles.item}>Largest Pagoda</Text>
              <Text style={styles.item}>Temple</Text>
              <Text style={styles.item}>UnKnow Pagoda</Text>
              <Text style={styles.item}>I Advance Pagoda</Text>
            </View>
          </View>
      </View>
     
      
    )
  }
  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      width:'100%',
      height:100,
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    image: {
      width: SCREEN_WIDTH,
      height: '100%',
      borderRadius: 10,
      resizeMode: 'cover',
    },
    scrollView: {
      
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor:'white',
    },
    container: {
      borderTopColor: 'gray',
      borderTopWidth: 1,
      backgroundColor:'#e6e6e6',
      paddingLeft:10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingVertical:2,
      gap: 5,
    },
    item: {
      paddingVertical: 2,
      fontSize: 12,
      paddingHorizontal: 5,
      margin: 1,
      height: 30,
      borderRadius: 10,
      backgroundColor: '#e6e6e6',
      textAlignVertical: 'center',
    },
  });