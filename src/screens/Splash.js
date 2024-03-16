import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Splash = () => {

    const navigation = useNavigation();

     useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Login")
            checkLogin();
        },2000)
       
    },[])

    const checkLogin = async ()=>{
        const storage = await AsyncStorage.getItem("@auth");
        if(storage !== null){
            navigation.navigate("Main")
             
        }else{
            navigation.navigate("Login");
        }
    }

  return (
     <>
     <StatusBar barStyle={'default'} backgroundColor={'purple'} />
     <View style={[styles.container]}>
        <Text style={[styles.logo]}>
           {`Firebase Chat\n App`}
        </Text>
     </View>
     </>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'purple',
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        fontSize:30,
        color:'#fff',
        textAlign:'center'
    }
})

export default Splash

 
