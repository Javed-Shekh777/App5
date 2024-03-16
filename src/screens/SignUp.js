import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import auth from '@react-native-firebase/auth';
 
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  

  const navigation = useNavigation();

  const handleSubmitButton = async () => {
   

    if (!name) return Alert.alert('⚠️ Warning', 'Please fill Name');

    if (!email) return Alert.alert('⚠️ Warning', 'Please fill Email');

    if (!password) return Alert.alert('⚠️ Warning', 'Please fill Password');

    if (!mobile) return Alert.alert('⚠️ Warning', 'Please fill Mobile');

    if (password !== confirmpassword)
      return Alert.alert('⚠️ Warning', 'Password must be matched!');

    try {
      // const userId = uuid.v4();
      const {user} = await auth().createUserWithEmailAndPassword(email,password);
    

      if (user) {
        firestore()
          .collection('users')
          .doc(`${user.uid}`)
          .set({
            name: name,
            email: user.email,
            password: password,
            mobile: mobile,
            userId: user.uid,
          })
          .then(res => {
            Alert.alert('🥰 Registration', 'Sucessfully Registered!!');
            navigation.navigate('Login');
          });
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error);
      setConfirmPassword('');
      setEmail('');
      setMobile('');
      setName('');
      setPassword('');
    }
  };

  return (
    <>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.container]}>
          <Text style={[styles.title]}>Sign Up</Text>
          <TextInput
            placeholder="Enter name"
            style={[styles.input]}
            value={name}
            onChangeText={txt => setName(txt)}
          />
          <TextInput
            placeholder="Enter email"
            keyboardType="email-address"
            style={[styles.input]}
            value={email}
            onChangeText={txt => setEmail(txt)}
          />

          <TextInput
            placeholder="Enter mobile"
            keyboardType="number-pad"
            style={[styles.input]}
            value={mobile}
            onChangeText={txt => setMobile(txt)}
          />
          <TextInput
            placeholder="Enter password"
            keyboardType="visible-password"
            style={[styles.input]}
            value={password}
            onChangeText={txt => setPassword(txt)}
          />

          <TextInput
            placeholder="Enter confirm password"
            keyboardType="visible-password"
            style={[styles.input]}
            value={confirmpassword}
            onChangeText={txt => setConfirmPassword(txt)}
          />

          <TouchableOpacity style={[styles.btn]} onPress={handleSubmitButton}>
            <Text style={[styles.btnText]}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={[styles.orLogin]}
            onPress={() => navigation.goBack('Login')}>
            Or Login
          </Text>
        </View>
      </SafeAreaView>
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
    marginBottom: 30,
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
    fontWeight: 700,
    textDecorationLine: 'underline',
    color: '#000',
  },
});

export default SignUp;
