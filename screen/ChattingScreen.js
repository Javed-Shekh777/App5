// ChatScreen.js

import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';
import ChatInfo from '../components/ChatInfo';
import ChatInput from '../components/ChatInput';
import ChatBody from '../components/ChatBody';
 

const ChattingScreen = () => {
  

  return (
     <>
     <View style={[styles.container]}>
      <ChatInfo />

 <ChatBody />
      {/* <ChatInput /> */}
     </View>
     
     </>
  );
};



const styles = StyleSheet.create({
  container : {
    display:'flex',
    flex:1,
    position:'relative',
    
  }
})


export default ChattingScreen;

 