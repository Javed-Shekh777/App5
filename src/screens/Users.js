import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Users = () => {
  const [users, setUsers] = useState([]);

console.log("\n\n UUUUUUUUU : ",users);
  useEffect(() => {
    // getUsers();
  });

  const getUsers = async () => {

    const tempData = []
    const data = await AsyncStorage.getItem('@auth');
    const dd = await JSON.parse(data);

    firestore().collection('users').where('email', '!=', dd?.email).get()
    .then((res)=>{
        console.log("\n\n jj : ",res?.docs)
        if(res.docs != []){
            res.docs.map(item=>{
                tempData.push(item?._data);
            });
            console.log("\n\n TEmp : ",tempData);
            setUsers(tempData);
        }
    })
  };

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.header]}>
          <Text style={[styles.title]}>REACT NATIVE CHAT APP</Text>
        </View>
        <FlatList
        data={users}
         renderItem={({item})=>{
            return (
                <View style={[styles.userItem]}>
                    <Text>{item.name}</Text>
                </View>
            )
         }}
         />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  title: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 600,
  },
  userItem:{
    width:Dimensions.get('window').width-50,
    flexDirection:'row',
    height:60,
    borderWidth:0.5,
    backgroundColor:'pink',
    borderRadius:10,
    marginTop:20,
    alignSelf:'center'
  }
});

export default Users;
