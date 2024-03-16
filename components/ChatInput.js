import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const ChatInput = () => {
  return (
     <>
     <View style={[styles.container]}>
        <View style={[styles.left]} >
            <View>
                <Text style={[styles.icon]}>🥰</Text>
            </View>
            <TextInput style={[styles.textInput]} multiline />
            <Icon name="paperclip" style={[styles.icon,{marginRight:10}]} />
            <Icon name="camera" style={[styles.icon,{marginRight:5}]}  />
        </View>
        <View style={{marginLeft:-6,marginRight:5,backgroundColor:'green',height:48,width:48,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:50}}>
        <Icon name="microphone" style={[styles.icon,{fontSize:24,color:'#fff'}]}  />

        </View>

     </View>
     </>
  )
}

const styles = StyleSheet.create({
    container : {
        display:'flex',
        justifyContent:'space-between',
        height:50,
        // backgroundColor:'#ccc',
        // position:'absolute',
        left:0,
        // top:20,
       marginTop:10,
       bottom:10,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'flex-end',
        borderRadius:10,
  
    },
    left :{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        width:'83%',
        backgroundColor:'#fff',
        borderRadius:20,
        padding:5,
        height:'100%',
        // marginHorizontal:6,
        borderColor:'#ccc',
        borderWidth:.5,
        borderStyle:'solid',
        
        marginRight:13
        
    },
    icon :{
        fontSize:25,
        color:'gray'
    },
    textInput : {
        fontSize:18,
        color:'#000',
        borderRadius:10,
        width:200,
        height:40,
 
       
    }
})

export default ChatInput
