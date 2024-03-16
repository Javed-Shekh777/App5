 
import Status from '../components/Status'
import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { GestureDetector } from 'react-native-gesture-handler';
import Header from '../components/Header';
 

const UpdateScreen = ({navigation}) => {
  return (
    <>
 
 <Header />
     
      <View style={[styles.container]}>
        <View style={[styles.statusTop]}>
          <Text style={{fontSize: 20, color: '#000'}}>Status</Text>
          <Icon
            style={{fontSize: 20, color: '#000'}}
            name="ellipsis-vertical"
          />
        </View>

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
      <Status />
      <Status />
      <Status />
      <Status />
        </ScrollView>
      </View>
    

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    
    borderBottomColor:'#000',
    borderBottomWidth:1,
    borderBottomStyle:'solid',
  },
 

  statusTop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
  },
  statusBottom: {
    display: 'flex',
    padding: 20,

  },
  status: {
    display: 'flex',
    width: 100,
    alignItems: 'center',
    
    justifyContent: 'center',
  },
});
export default UpdateScreen;


 