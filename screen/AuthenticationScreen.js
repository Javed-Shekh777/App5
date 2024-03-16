import { useNavigation } from '@react-navigation/native'
import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View,StatusBar, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';




const AuthenticationScreen = () => {
    const navigation  = useNavigation();
    const [phoneNumber,setPhoneNumber] = useState("");

   
    console.log(phoneNumber)
    const signIn = async () => {
        try {
            console.log("gg ")
          const confirmation = await auth().signInWithPhoneNumber("+91 6307354106");
          console.log("Auth : ",confirmation);
          if(confirmation){
            Alert.alert("Successfully OTP generated...");
           // navigation.navigate("Chat")
          }
        //   On successful confirmation, navigate to OTP verification screen or handle the verification code.
        } catch (error) {
          console.log('Phone authentication error:', error);
          // Handle error, such as displaying an error message to the user.
        }
      };


    
  return (
     <>
      {/* <StatusBar barStyle={'default'} backgroundColor='#ccc'   />  */}

     <View style={[styles.container]}>
        <View style={{alignSelf:'center',marginVertical:10}}>
            <Text style={{color:'#000',fontSize:17}}>Enter your phone number</Text>
        </View>
        <View style={{marginVertical:10,marginBottom:20}}>
            <Text style={{color:"#000"}}>WhatsApp will send an SMS message to verify your</Text>
            <Text style={{color:"#000",textAlign:'center'}}>phone number <Text style={{color:"aqua"}}>'Whats my number ?'</Text></Text>
        </View>

        <View style={{padding:5,width:'60%',borderBottomColor:'#ccc',borderBottomWidth:2}}>
            <Text style={{textAlign:'center',fontSize:17}}>India</Text>
        </View>
        <View style={{display:'flex',alignItems:'center',width:'62%',flexDirection:'row',justifyContent:'center' ,height:45,marginBottom:15}}>
            <Text style={{width:'15%',fontSize:16,borderBottomColor:'gray',borderBottomWidth:2,height:'90%',verticalAlign:'middle'}}>+ 91</Text>
            <TextInput autoComplete='tel-device' onChangeText={(text)=>setPhoneNumber(text)} autoFocus={true} inputMode='numeric' style={{color:"#000",fontSize:16,backgroundColor:'#fff',width:'80%',marginLeft:5,borderBottomColor:'#ccc',borderBottomWidth:2,height:'90%'}} placeholder='phone number' />
        </View>

        <Text style={{color:"#000",fontSize:16}}>Carrier SMS changes may apply</Text>


        <View style={{marginTop:180,backgroundColor:'pink',width:'20%',backgroundColor:'green',borderRadius:5}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Chat")}
            >
                <Text style={[{color:'#fff',fontSize:20,padding:5,textAlign:'center'}]}>NEXT</Text>
            </TouchableOpacity>
        </View>
     </View>
     </>
  )
}


const styles = StyleSheet.create({
    container : {
        display:'flex',
        flex:1,
        alignItems:'center'
    },

})
export default AuthenticationScreen

 