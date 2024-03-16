import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PrivacyPolicy from 'react-native-vector-icons/MaterialCommunityIcons';
import Info from 'react-native-vector-icons/Feather'

const HelpScreen = () => {
  return (
    <>
      <View style={[styles.container]}>
        <TouchableOpacity>
        <View style={[styles.inner ]}>
          <PrivacyPolicy style={[styles.icon]} name="help-circle-outline" />
         
         <View  >
          <Text style={{color:'black',fontSize:16}}>Help center</Text>
          <Text>Get help, contact us</Text>

         </View>
        </View  >
        </TouchableOpacity>
      
        <TouchableOpacity>
        <View style={[styles.inner]}>
          <PrivacyPolicy style={[styles.icon]} name="file-document" />
          <Text style={{color:'black',fontSize:16}}>Terms and Privacy Policy</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.inner ]}>
          <Info style={[styles.icon]} name="info" />
          <Text style={{color:'black',fontSize:16}}>App info</Text>
        </View>
        </TouchableOpacity>
        
      </View>
    </>
  );
};


const styles = StyleSheet.create({
    container:{
        display:'flex',
      
           justifyContent:'space-between',
    },
    inner : {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
      marginHorizontal:20,
      paddingVertical:20,

    },
    icon:{
        fontSize:25,
        marginRight:15
    }
})
export default HelpScreen;
