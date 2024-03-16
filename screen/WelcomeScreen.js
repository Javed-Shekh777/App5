import React from 'react'
import { Button, Image, Pressable, StyleSheet, Text, View ,StatusBar} from 'react-native'
import img from '../assets/Slice.png'
import { useNavigation } from '@react-navigation/native'
 

const WelcomeScreen = () => {
    const navigation  = useNavigation();
  return (
     <>
      {/* <StatusBar barStyle={'default'} backgroundColor='#ccc'   />  */}

     <View style={[styles.container]}>
        <Text style={[styles.mainText]}>Welcome to you</Text>
        <View style={[styles.imageWrapper]} >
            <Image style={[styles.image]} source={img} />
            {/* <View></View> */}
        </View>
        <View style={[{marginVertical:20,display:'flex',alignItems:'center'}]}>
            <Text>Read our <Text style={{color:'aqua'}}>Privacy Policy</Text>. Tap "Agree ans continue" to</Text>
            <Text>accept the <Text style={{color:'aqua'}}>Terms of Service</Text>.</Text>
        </View>
        <View style={[styles.btn]}>
             <Button onPress={()=>navigation.navigate('Authentication')} title='AGREE AND CONTINUE' color={'green'} accessibilityLabel='Agree and continue'  />
        </View>
     </View>
     </>
  )
}

const styles = StyleSheet.create({
    container : {
        display:'flex',
        flex:1
    },
    mainText : {
        fontSize:40,
        marginVertical:50,
        marginHorizontal:5,
        color:'green',
        alignSelf:'center'
    },
    imageWrapper:{
        width:'100%',
        height:400,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30
    },
    image:{
        height:'85%',
        width:'80%',
        borderRadius:50,
        backgroundColor:'pink'
    },
    text:{
        fontSize:16,
        color:'gray',
        marginVertical:20
    },
    btn:{
        width:'70%',
        alignSelf:'center'
    }

})

export default WelcomeScreen
