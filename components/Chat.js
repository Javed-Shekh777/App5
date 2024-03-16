import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Chat = () => {

    const navigation = useNavigation();

  return (
    <>
    <TouchableOpacity
    onPress={()=>{
        navigation.navigate("ChattingScreen")
        
    }
     }

    >

   
    <View style={[styles.container]} >
        <View  style={[styles.chatImageWrapper]}>
        <Image style={[styles.chatImage]} source={{uri : 'https://media.istockphoto.com/id/1354066820/photo/gavieiro-or-el-silencio-beach-cudillero-asturias-spain.jpg?s=612x612&w=0&k=20&c=X6Q0YT2ay8brfNjAeaK4nUqzyeR9yALH4TCIndsqtOY='}} />
        </View>

        <View style={[styles.chatInfo]}>
            <View>
                <Text style={[styles.chatInfoRightlargeText]}>Vivek Kumar</Text>
                <Text style={{color:'gray'}}>call kar sakte hai</Text>
            </View>
            <View style={[styles.chatInfoRight]}>
                <Text style={{color:'green'}}>10:19 AM </Text>
                <View style={{ 
                    height:20,
                    width:20,
                    backgroundColor:'pink',
                    alignSelf:'center',
                    borderRadius:50,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'green'
        }}>
                <Text  style={{color:'#fff',borderRadius:50,fontSize:13, textAlign:'center',marginLeft:3,marginBottom:2}}>3 </Text>

                </View>
            </View>

        </View>
    </View>
    </TouchableOpacity>

    </>
  )
}



const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        height:85,
        
       
    },
    chatImageWrapper : {
        height:60,
        width:60,
        borderRadius:50,
        marginRight:10
    },
    chatImage:{
        height:60,
        width:60,
        borderRadius:50
    },
    chatInfo:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:120
    },

    chatInfoRight:{
        justifyContent:'flex-end',
    },
    chatInfoRightlargeText:{
        fontSize:18,
        color:'#000'
    }
});
export default Chat
