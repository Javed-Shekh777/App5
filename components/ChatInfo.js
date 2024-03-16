import React from 'react';
import {Image, StyleSheet, Text, View,TouchableOpacity, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDeisgn from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native';

const ChatInfo = () => {

  const navigation = useNavigation();

  const route = useRoute();
  console.log("Route is : ",route)

  return (
    <>
    <View style={[styles.container]}>
      <View style={[styles.left]}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >
        <AntDeisgn name="arrowleft" style={{fontSize:30,marginHorizontal:-3,color:'#fff'}} />

        </TouchableOpacity>
        <Image style={[styles.image]} source={{uri:"https://img.freepik.com/premium-photo/beautiful-colorful-valentine-s-day-heart-cloud-as-abstract-backgroundai-technology-generated-imag_1112-11207.jpg"}} />

       
        <View>
          <TouchableOpacity
          onPress={()=>navigation.navigate({
            name: 'UserInfo',
            params: { name:"Javed Shekh"},
            merge: true,
          })}
          >
          <Text style={[styles.bigText]}>Vivek</Text>
          <Text style={[styles.smallText]}>last seen today at 10:23 AM</Text>
          </TouchableOpacity>
         
        </View>
      </View>

      <View style={[styles.right]}>
        <TouchableOpacity>
        <Icon name="video-camera" style={[styles.icon]} />

        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name='phone' style={[styles.icon]}  />
          
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name="ellipsis-v" style={[styles.icon]}  />
          
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};


const styles = StyleSheet.create({
  container : {
    height:70,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'green',
    position:'relative',
    left:0,
    top:0
    },
  left : {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10

  },
  image : {
    height:40,
    width:40,
    borderRadius:50,
    marginHorizontal:6
  },
  right : {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginRight:10,
    gap:20,
    padding:10,
    
  },
  bigText : {
    color:'#fff',
    fontSize:16
  },
  smallText : {
    fontSize:13,
    color:'#fff'
  },
  icon:{
    fontSize:23,
    color:'#fff'
  }
})
export default ChatInfo;
