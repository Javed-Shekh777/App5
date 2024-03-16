import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ellipse from 'react-native-vector-icons/FontAwesome6';
import {useNavigation, useRoute} from '@react-navigation/native';
import Model from './Model';

const Header = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const [routeName, setRouteName] = useState('');

  const click = rName => {
    rName ? setRouteName(rName) : setRouteName('');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.headerTop]}>
          <Text style={{fontSize: 30, color: '#fff'}}>WhatsApp</Text>
          <View style={[styles.headerIcons]}>
            <Pressable accessibilityLabel="button" 
             onPress={()=>{
              navigation.navigate('Camera', { parentRouteName: route.name });
            }
              }
            >
              <Feather name="camera" style={[styles.headerIcon]} />
            </Pressable>
            <Pressable 
            onPress={()=>{
              navigation.navigate('Search', { parentRouteName: route.name });
            }
              }
            >
              <Feather name="search" style={[styles.headerIcon]} />
            </Pressable>
            <Pressable
              onPress={() => {
                click(route.name);
              }}>
              <Ellipse name="ellipsis-vertical" style={[styles.headerIcon]} />
            </Pressable>
          </View>
        </View>

        <View style={[styles.headerBottom]}>
          <Pressable
            style={({pressed}) => [
              {
                borderBottomColor: pressed ? '#00ee12' : 'none',
                borderBottomWidth: pressed ? 4 : 0,
                borderBottomStyle: pressed ? 'solid' : 'none',
              },
              styles.touchable,
              {width: '16%', marginRight: -15},
            ]}>
            <Feather name="users" size={25} color="#ccc" />
          </Pressable>

          <Pressable
            style={({pressed}) => [
              {
                borderBottomColor: pressed ? '#00ee12' : 'none',
                borderBottomWidth: pressed ? 4 : 0,
                borderBottomStyle: pressed ? 'solid' : 'none',
              },
              styles.touchable,
            ]}
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Text style={[styles.headerBottomText,{
              color : route.name === 'Chat'? '#fff':'#ccc'
            }]}>Chats</Text>
          </Pressable>

          <Pressable
            style={({pressed}) => [
              {
                borderBottomColor: pressed ? '#00ee12' : 'none',
                borderBottomWidth: pressed ? 4 : 0,
                borderBottomStyle: pressed ? 'solid' : 'none',
              },
              styles.touchable,
            ]}
            onPress={() => {
              navigation.navigate('Update');
            }}>
            <Text style={[styles.headerBottomText,{
              color : route.name === 'Update'? '#fff':'#ccc'
            }]}>Updates</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate('Call');
            }}
            style={({pressed}) => [
              {
                borderBottomColor: pressed ? '#00ee12' : 'none',
                borderBottomWidth: pressed ? 4 : 0,
                borderBottomStyle: pressed ? 'solid' : 'none',
              },
              styles.touchable, 
            ]}>
            <Text style={[styles.headerBottomText,{
              color : route.name === 'Call'? '#fff':'#ccc'
            }]}>Calls</Text>
          </Pressable>
        </View>
      </View>

      {routeName === 'Chat' && (
        <View style={[styles.model_1]}>
          <Modal
            hardwareAccelerated={true}
            animationType="fade"
            transparent={true}
            onRequestClose={() => {
              setRouteName('');
            }}>
            <View style={[styles.modelInner, styles.model_1]}>
              <TouchableOpacity style={[styles.tochable]}>
                <Text style={[styles.text]}>New group</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tochable]}>
                <Text style={[styles.text]}>New broadcast</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tochable]}>
                <Text style={[styles.text]}>Linked devices</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tochable]}>
                <Text style={[styles.text]}>Starred messages</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tochable]}>
                <Text style={[styles.text]}>Payments</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>{
                click("");
                navigation.navigate("Setting")
              }}
               style={[styles.tochable]}>
                <Text style={[styles.text]}>Settings</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      )}

      {routeName === 'Update' && (
        <>
        
        <View style={[styles.model_1]}>
          <Modal
            hardwareAccelerated={true}
            animationType="fade"
            transparent={true}
            onRequestClose={() => {
              setRouteName('');
            }}>
            <View style={[styles.modelInner, styles.model_1]}>
            <TouchableOpacity
              onPress={()=>{
                click("");
                navigation.navigate("Setting")
              }}
               style={[styles.tochable]}>
                <Text style={[styles.text]}>Settings</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        </>
      )}



{routeName === 'Call' && (
        <>
        
        <View style={[styles.model_1]}>
          <Modal
            hardwareAccelerated={true}
            animationType="fade"
            transparent={true}
            onRequestClose={() => {
              setRouteName('');
            }}>
            <View style={[styles.modelInner, styles.model_1]}>
            <TouchableOpacity
             onPress={()=>{
              click("");
              navigation.navigate("Setting")
            }}
               style={[styles.tochable]}>
                <Text style={[styles.text]}>Settings</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        </>
      )}



    </>
  );
};



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 15,
    backgroundColor: 'green',
    position: 'relative',
  },
  headerTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  headerBottom: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -15,
  },
  headerBottomText: {
    fontSize: 17,
    color: '#ccc',
  },
  headerIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 25,
    marginRight:-10
  },
  headerIcon: {
    fontSize: 24,
    color: '#fff',
    verticalAlign: 'middle',
    textAlign: 'center',
    width: 30,
    height: 30,
  },
  touchable: {
    height: '100%',
    padding: 5,
    width: '32%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //// Model --- 1 css

  model_1: {
    // height: 300,
    borderRadius: 20,
    width: 200,
    display: 'flex',
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 1000,
    right: 5,
    top: 70,
  },
  modelInner: {
    height: '95',
    width: '95',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'column'
     
  },
  tochable: {
    width: 180,
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'center',
    marginVertical:5,
    height: 45,
  },
  text: {
    color: '#000',
    fontSize: 18,
  },
});

export default Header;
