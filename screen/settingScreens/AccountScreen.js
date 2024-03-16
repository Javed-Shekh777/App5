import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Verify from 'react-native-vector-icons/MaterialIcons';
import Info from 'react-native-vector-icons/MaterialCommunityIcons'


const  AccountScreen = () => {
  return (
    <>
      <View style={[styles.container]}>
        <TouchableOpacity>
        <View style={[styles.inner ]}>
          <Info style={[styles.icon]} name="security" />
          <Text style={{color:'#000',fontSize:17}}>Security notifications</Text>
        </View  >
        </TouchableOpacity>
      
        <TouchableOpacity>
        <View style={[styles.inner]}>
          <Info style={[styles.icon]} name="account-key" />
          <Text style={{color:'#000',fontSize:17}}>Passkeys</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.inner ]}>
          <Info style={[styles.icon]} name="email" />
          <Text style={{color:'#000',fontSize:17}}>Email address</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={[styles.inner ]}>
          <Verify style={[styles.icon]} name="verified" />
          <Text style={{color:'#000',fontSize:17}}>Two-step verification</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.inner ]}>
          <Info style={[styles.icon]} name="chandelier" />
          <Text style={{color:'#000',fontSize:17}}>Chage number</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.inner ]}>
          <Info style={[styles.icon]} name="file-document" />
          <Text style={{color:'#000',fontSize:17}}>Request account info</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.inner ]}>
          <Info style={[styles.icon]} name="account-plus" />
          <Text style={{color:'#000',fontSize:17}}>Add account</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.inner ]}>
          <Info style={[styles.icon]} name="delete" />
          <Text style={{color:'#000',fontSize:17}}>Delete account</Text>
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
export default AccountScreen;
