import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { Colors } from './../constants/Colors'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
  
  return (
    <View>
       <View>
         <Image source={require('./../assets/images/react-logo.png')}
         style={styles.forimage} />
       </View>
       <View style={styles.textcontainer}>
        <Text style={styles.textfor}>Hello All My Friends</Text>
        <Text style={styles.textfor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, blanditiis sequi, earum esse adipisci iure, mollitia natus unde in necessitatibus harum. Officiis, eos non accusamus quia quis fugit provident commodi.</Text>
       <TouchableOpacity>
         <Text style={styles.btn} onPress={onPress}>
            Login
         </Text>
       </TouchableOpacity>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
    forimage:{
        width:100,
        height:100,
        alignSelf:'center',
        marginTop:100,
        marginBottom:10,
        borderRadius:100,
        borderWidth:2,
        borderColor:Colors.PRIMARY,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },
    textcontainer:{
        backgroundColor:'#fff'
    },
    textfor:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        padding:3,
        marginTop:5,
        marginLeft:10,
        marginBottom:10,
        color:'#99c2ff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },
    btn:{
        backgroundColor:Colors.PRIMARY,
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        padding:10,
        marginTop:5,
        marginLeft:10,
        marginBottom:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius:10,
        width:200,
        alignSelf:'center',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }
    
})