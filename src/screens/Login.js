import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Loader from '../components/Loader';
import auth from '@react-native-firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [visible,setVisible] = useState(false);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const login = async ()=>{
    if (!email) return Alert.alert("⚠️ Warning","Please fill Email") 
    
    if (!password) return Alert.alert("⚠️ Warning","Please fill Password");


    try {
      setVisible(true);

      const { user } = await auth().signInWithEmailAndPassword(email, password);

      
      if (user) {
        const uid = user.uid;
        // Retrieve user data from Firebase Realtime Database
       const data =  await firestore().collection(`users`).doc(`${user.uid}`).get();

        
        
       
       const stringiFy = await JSON.stringify(data?._data);
       gotoNext(stringiFy);
      setVisible(false);

      }
       

        
    } catch (error) {
      setVisible(false);
      Alert.alert('❌ Error', "Error in Login API");
    }


  }
 

  const gotoNext =async (data)=>{

    const store = await AsyncStorage.setItem("@auth",data);

    const gh = await AsyncStorage.getItem("@auth");
    console.log("\n\n GGG : ",JSON.parse(gh));

     

  }

  return (
    <>
      
        <View style={[styles.container]}>
          <Text style={[styles.title]}>Login</Text>
           
          <TextInput
            placeholder="Enter email"
            keyboardType="email-address"
            style={[styles.input]}
            value={email}
            onChangeText={(txt)=>setEmail(txt)}
          />

           
          <TextInput
            placeholder="Enter password"
            keyboardType="visible-password"
            style={[styles.input]}
            value={password}
            onChangeText={(txt)=>setPassword(txt)}
          />

          

          <TouchableOpacity style={[styles.btn]} 
          onPress={login}
          >
            <Text style={[styles.btnText]}>Login</Text>
          </TouchableOpacity>
          <Text style={[styles.orLogin]} onPress={()=>navigation.navigate("SignUp")}>Or Sign Up</Text>
      

      <Loader visible={visible} />

          
        </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 600,
    marginBottom: 90,
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 0.5,
    paddingLeft: 20,
    fontSize: 17,
  },
  btn: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'purple',
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  orLogin: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 20,
    fontWeight:700,
    textDecorationLine: 'underline',
    color: '#000',
  },
});

export default Login;
