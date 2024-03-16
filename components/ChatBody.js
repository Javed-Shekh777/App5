// import React, {useState} from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// const ChatBody = () => {
//   const [bac, setback] = useState('');
//   const UserViewMessage = () => {
//     return (
//       <>
//         <View style={[userStyle.container, {backgroundColor: bac ? bac : ''}]}>
//           <TouchableOpacity onLongPress={() => setback('#ccc')}>
//             <View style={[userStyle.inner]}>
//               <Text style={[styles.text]}>User messages</Text>
//               <Text style={[userStyle.time]}>10:06 AM</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </>
//     );
//   };

//   const OtherViewMessage = () => {
//     return (
//       <>
//         <View style={[otherStyle.container]}>
//           <View style={[otherStyle.inner]}>
//             <Text style={[styles.text]}>other dfkjsi frfdrnfrd gdkgdk idhfudrbf dsfdsjf drf dofjd fp9dr fesufds fd gfrs fmessages
          
//             </Text>
//             {/* <View style={[otherStyle.time ]}>
//               <Text>10:06 AM</Text>
//             </View> */}
//           </View>
//           <Text style={[otherStyle.time]}>10:06 AM</Text>
//         </View>
         
//       </>
//     );
//   };

//   return (
//     <>
//       <View>
//         <UserViewMessage></UserViewMessage>
//         <OtherViewMessage></OtherViewMessage>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     color: '#000',
//     position:'relative'
//   },
// });

// const userStyle = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'lightgreen',
//     borderRadius: 10,
//     marginVertical: 8,
//     justifyContent: 'center',
//     marginLeft: '50%',
//     marginRight: 8,
//   },
//   inner: {
//     width: '90%',
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//     // justifyContent:'space-between',
//     flexDirection: 'row',
//     padding: 5,
//   },
//   time: {
//     color: 'gray',
//     alignSelf: 'flex-end',
//     fontSize: 13,
//     marginTop: 3,
//     position: 'absolute',
//     top: 8,
//     right: 0,
//   },
// });

// const otherStyle = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems:'flex-end',
//     marginVertical: 8,
//   },
//   inner: {
//     marginLeft: 10,
//     borderRadius: 10,
//     backgroundColor: 'lightgreen',
//     maxWidth: '75%',
//     position:'relative',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // flexDirection: 'row',
//     // padding: 5,
//     // gap: 8,
//   },
//   time: {
//     color: 'gray',
//     fontSize: 12,
    
     
//   },
// });

// export default ChatBody;




import React from 'react';
import { View, Text, ScrollView, StyleSheet,Pressable, SafeAreaView } from 'react-native';
import ChatInput from './ChatInput';
 

const ChatBody = () => {

    const messages = [
        { id: 1, text: 'Hello!', timestamp: '10:00 AM' },
        { id: 2, text: 'Hi there!', timestamp: '10:05 AM' },
        { id: 3, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 4, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 5, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 6, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 7, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 8, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 9, text: 'How are you?', timestamp: '10:10 AM' },
    
        { id: 10, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 11, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 12, text: 'How are you?', timestamp: '10:10 AM' },
         { id: 13, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 14, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 15, text: 'How are you?', timestamp: '10:10 AM' },
        { id: 16, text: 'How adfsfsfsrgdrg you?', timestamp: '10:10 AM' },
        { id: 17, text: 'How are fefefsfseeereess  f s tstrtessseffesyou?', timestamp: '10:10 AM' },
    
        // Add more messages as needed
      ];



    const UserViewMessage = () => {
            return (
              <>

              {messages.map((message) => (
               <Pressable
               key={message.id}
                style={[{ marginBottom:10,alignItems:'flex-end',display:'flex',justifyContent:'flex-end'}]}>
               

               

          <View  style={[userStyle.message,userStyle.main]}>
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.timestamp}>{message.timestamp}</Text>
          </View>
          </Pressable>

        ))}

              </>
            );
          };


    const OtherViewMessage = () => {
            return (
              <>
             {messages.map((message) => (
               <Pressable
               key={message.id}
                style={[{ marginBottom:10}]}>
          <View key={message.id} style={[otherStyle.message ]}>
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.timestamp}>{message.timestamp}</Text>
          </View>
          </Pressable>

        ))}
                
                 
              </>
            );
          };


 

  return (
    <>
     
       
      <ScrollView  style={styles.container}>
      <SafeAreaView style={styles.container}>
       <OtherViewMessage></OtherViewMessage>
       <UserViewMessage></UserViewMessage>
       <ChatInput />
       </SafeAreaView>
      </ScrollView>
     
     
    </>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position:'relative',
  },
  messageText: {
    fontSize: 16,
    color:'#000'
  },
  timestamp: {
    fontSize: 12,
    color: '#494848', 
    
    alignSelf: 'flex-end',
  },
   
});



const userStyle = StyleSheet.create({
    message: {
        maxWidth: '80%',
        position:'relative',
        top:0,
        right:0,
        backgroundColor: '#12cccc',
        borderRadius: 10,
        padding: 8,
        marginRight:10
      },
       
      
      
})


const otherStyle = StyleSheet.create({
    message: {
        marginBottom: 10,
        maxWidth: '80%',
        alignSelf: 'flex-start',
        backgroundColor: '#DCF8C6',
        borderRadius: 10,
        padding: 8,
        marginLeft:10
      },
       
       
})
export default ChatBody;
