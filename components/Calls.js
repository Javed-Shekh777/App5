import React from 'react';
import {Image, Text, View, StyleSheet,  TouchableOpacity } from 'react-native';
import IconVideo from 'react-native-vector-icons/FontAwesome';
import IconLink from 'react-native-vector-icons/Feather';



const Calls = () => {
  return (
    <>
  

      <TouchableOpacity>

        <View style={[styles.callBottom]}>
          <View style={[styles.callBottomInfo]}>
            <View style={[styles.callImageWrapper]}>
              <Image
                style={[styles.callImage]}
                source={{
                  uri: 'https://media.istockphoto.com/id/1354066820/photo/gavieiro-or-el-silencio-beach-cudillero-asturias-spain.jpg?s=612x612&w=0&k=20&c=X6Q0YT2ay8brfNjAeaK4nUqzyeR9yALH4TCIndsqtOY=',
                }}
              />
            </View>

            <View>
              <Text style={[styles.callLargeInfoText]}>Vivek Kumar</Text>
              <Text>Febuary 18,8:05 AM</Text>
            </View>
          </View>

          
            <IconVideo name="video-camera" size={25} color={'green'} />
           
        </View>
        </TouchableOpacity>
       
        
      
    </>
  );
};

const styles = StyleSheet.create({
 
  callBottom: {
    display: 'flex',
   padding:15,
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    
  },
  
  callImageWrapper: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight:20
  },
  callImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },

  callBottomInfo:{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start'
  },
  callLargeInfoText:{
    fontSize:17,
    color:'#000'
  }
});

export default Calls;
