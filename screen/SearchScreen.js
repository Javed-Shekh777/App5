import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {StatusBar, Text, View,  TextInput, StyleSheet, Pressable,ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Chat from '../components/Chat';
import Status from '../components/Status';
import UpdateScreen from './UpdateScreen';
import Calls from '../components/Calls';
// import 

const SearchScreen = () => {

    const navigation = useNavigation()
    const route = useRoute();
    const [routeName,setRouteName] = useState("");
    console.log(routeName);

    useEffect(()=>{
        setRouteName(route.params ? route.params?.parentRouteName : "");
    })

  return (
    <>

      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View>
      <View style={[styles.search]} >
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            style={{
              fontSize: 30,
              marginRight: 10,
              color: '#000',
              marginLeft: -10,
            }}
          />
        </Pressable >
        <TextInput style={[{color:'#000',fontSize:18,width:'95%',borderRadius:10}]} focusable={true} cursorColor={'#000'}  placeholder='Search...' />

      </View>


      {routeName === "Chat" && (
       <>
      <Chat />
      <Chat />
      <Chat />

       </>
      )}

      {
        routeName === "Update" && (
            <>
            <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={[styles.statusBottom]}>


       <Status />
       
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
        </ScrollView>
        
            </>
        )
      }


      {routeName === 'Call' && (
        <>
        <ScrollView>
        <Calls />

        </ScrollView>
        </>
      )}

</View>
    </>
  );
};

const styles = StyleSheet.create({
    search:{
        height:50,
        width:'95%',
        alignSelf:'center',
        marginVertical:10,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'rgba(0,0,13,0.1)',
        alignItems:'center',
        // gap:,
        paddingHorizontal:30,
        borderRadius:20
    },
    statusBottom: {
        display: 'flex',
        padding: 20,
    
      },
})

export default SearchScreen;
