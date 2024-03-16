import React from 'react';
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ChatScreen from '../screen/ChatScreen';

const Status = () => {
  return (
    <>
      

         


          <View style={[styles.status]}>
            <View style={[styles.statusImageWrapper]}>
              <Image
                style={[styles.statusImage]}
                source={{
                  uri: 'https://media.istockphoto.com/id/1354066820/photo/gavieiro-or-el-silencio-beach-cudillero-asturias-spain.jpg?s=612x612&w=0&k=20&c=X6Q0YT2ay8brfNjAeaK4nUqzyeR9yALH4TCIndsqtOY=',
                }}
              />
            </View>
            <View>
              <Text>Appy</Text>
            </View>
          </View>

          
        
    </>
  );
};

const styles = StyleSheet.create({
  
  statusImageWrapper: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  statusImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },

  
  statusBottom: {
    display: 'flex',
    paddingVertical: 15,
  },
  status: {
    display: 'flex',
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Status;
