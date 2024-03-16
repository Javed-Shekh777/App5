// import React from 'react'
// import { NavigationContainer} from '@react-navigation/native';
// import RootMenu from './RootMenu';
// import ChatInfo from './components/ChatInfo';
// import { StatusBar, StyleSheet, View } from 'react-native';
// import ChatHeader from './screen/ChattingScreen';
// import ChatInput from './components/ChatInput';
// import ChattingScreen from './screen/ChattingScreen';
// import WelcomeScreen from './screen/WelcomeScreen';
// import AuthenticationScreen from './screen/AuthenticationScreen';

// const App = () => {
//   return (
//      <>
//       <StatusBar barStyle={'default'} backgroundColor={'green'} /> 
//         <NavigationContainer>
//          <RootMenu />
//       </NavigationContainer> 


//  {/* <WelcomeScreen /> */}
 
//  {/* <AuthenticationScreen /> */}
 
     
 
     

      
//      </>
//   );
// }

// export default App

 
import AppNavigator from "./src/navigation/AppNavigator";
import firebase  from '@react-native-firebase/app';

const config = {
  databaseURL: "https://fir-chat-3d677-default-rtdb.firebaseio.com",
  projectId: "fir-chat-3d677",
}

firebase.initializeApp(config);

// const firebaseConfig = {
//   apiKey: "AIzaSyCZINnKgPttwte7E77pB18n68bozWZ8los",
//   authDomain: "fir-chat-3d677.firebaseapp.com",
 
//   storageBucket: "fir-chat-3d677.appspot.com",
//   messagingSenderId: "1072328279611",
//   appId: "1:1072328279611:web:d8f8d8b8a8496c778d7e1e",
//   measurementId: "G-J99890K86Z"
// };

 

const App  = ()=>{

  return (
    <>
    <AppNavigator />
    </>
  );
}


export default App;

 