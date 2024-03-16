// import React from 'react'
// import { Text, View } from 'react-native'
// import Calls from '../components/Calls'

// const CallScreen = () => {
//   return (
    
//     <>

//     <Calls />
//     </>
//   )
// }

// export default CallScreen



import React from 'react';
import {  Text, View, StyleSheet, ScrollView} from 'react-native';
import IconLink from 'react-native-vector-icons/Feather';
import Calls from '../components/Calls';
import Header from '../components/Header';



const CallScreen = () => {
  return (
    <>
    <Header />
    <ScrollView>

      <View style={[styles.container]}>
        <View style={[styles.callTop]}>
          <View style={[styles.share]}>
            <IconLink name="link-2" style={[styles.shareIcon]} />
          </View>
          <View>
            <Text style={[styles.shareLargeText]}>Create call link</Text>
            <Text>Share a link for your WhatsApp call</Text>
          </View>
        </View>
        <Text style={[styles.recent]}>Recents</Text>
         
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />
         <Calls />


        

         

      </View>
    </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
   
  },
  callTop: {
    display: 'flex',

    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
  },
  
  share: {
    height: 60,
    width: 60,
    backgroundColor: 'green',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 20,
  },
  shareIcon: {
    fontSize: 25,
    color: '#fff',
  },
  shareLargeText: {
    fontSize: 18,
    color: '#000',
  },
  recent: {
    fontSize: 17,
    color: '#000',
    marginBottom:10,
    marginLeft:10

  },
  

  
});

export default CallScreen;
