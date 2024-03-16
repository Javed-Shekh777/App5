import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Key from 'react-native-vector-icons/FontAwesome5';
import Chats from 'react-native-vector-icons/Ionicons';
import Notification from 'react-native-vector-icons/Ionicons';
import Language from 'react-native-vector-icons/MaterialIcons';
import Help from 'react-native-vector-icons/MaterialIcons';

const Setting = () => {

  const route = useRoute()
  const navigation = useNavigation();

  return (
    <>
      <View>
        <View style={[styles.container_1]}>
          <View style={[styles.imageWrapper]}>
            <Image
              style={[styles.image]}
              source={{
                uri: 'https://img.freepik.com/premium-photo/beautiful-colorful-valentine-s-day-heart-cloud-as-abstract-backgroundai-technology-generated-imag_1112-11207.jpg',
              }}
            />
            <View style={[styles.userInfo]}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                }}>
                User Name
              </Text>
              <Text
                style={{
                  fontSize: 16,
                }}>
                description
              </Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '90%',
              width: '14%',
            }}>
            <Icon
              style={{fontSize: 30, color: 'green', textAlign: 'center'}}
              name="qrcode"
            />
          </View>
        </View>

        <View style={[styles.container_2]}>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('Account')}
          >
            <View style={[styles.outer]}>
              <Key style={[styles.icon]} name="key" />
              <View style={[styles.inner]}>
                <Text style={[styles.largeText]}>Account</Text>
                <Text style={[styles.smallText]}>
                  Security notifications, change number
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>navigation.navigate('Privacy')}
          >
            <View style={[styles.outer]}>
              <Icon style={[styles.icon]} name="lock" />
              <View style={[styles.inner]}>
                <Text style={[styles.largeText]}> Privacy</Text>
                <Text style={[styles.smallText]}>
                  {' '}
                  Block contacts, disappering messages
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=>navigation.navigate('Avatar')}

          >
            <View style={[styles.outer]}>
              <Icon style={[styles.icon]} name="user" />
              <View style={[styles.inner]}>
                <Text style={[styles.largeText]}> Avatar</Text>
                <Text style={[styles.smallText]}>
                  {' '}
                  Create, edit, profile photo
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=>navigation.navigate('Chats')}

          >
            <View style={[styles.outer]}>
              <Chats style={[styles.icon]} name="chatbox-ellipses" />
              <View style={[styles.inner]}>
                <Text style={[styles.largeText]}>Chats</Text>
                <Text style={[styles.smallText]}>
                  Theme, wallpapers, chat history
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=>navigation.navigate('Notifications')}

          >
            <View style={[styles.outer]}>
              <Notification style={[styles.icon]} name="notifications" />
              <View style={[styles.inner]}>
                <Text style={[styles.largeText]}>Notifications</Text>
                <Text style={[styles.smallText]}>
                  Message, group & call tones
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>navigation.navigate('Storage')}

          >
            <View style={[styles.outer]}>
              <Icon style={[styles.icon]} name="database" />
              <View style={[styles.inner]}>
                <Text style={[styles.largeText]}>Storage and data</Text>
                <Text style={[styles.smallText]}>
                  Network usage, auto-download
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>navigation.navigate('Language')}

          >
            <View style={[styles.outer]}>
              <Language style={[styles.icon]} name="language" />
              <View style={[styles.inner]}>
                <Text style={[styles.largeText]}>App language</Text>
                <Text style={[styles.smallText]}>
                  English (device's language)
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>navigation.navigate('Help')}

          >
            <View style={[styles.outer]}>
              <Help style={[styles.icon]} name="help-outline" />
              <View style={[styles.inner]}>
                <Text style={[styles.largeText]}>Help</Text>
                <Text style={[styles.smallText]}>
                  Help center, contact us, privacy policy
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container_1: {
    height: 95,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    width: '90%',
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 50,
    objectFit: 'cover',
  },

  // bottom style
  container_2: {
    display: 'flex',

    justifyContent: 'space-between',
  },
  outer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    height: 70,
    width: '100%',
    padding: 14,
    marginBottom: 4.8,
    gap: 25,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 23,
    color: 'gray',
    marginLeft: 10,
  },
  largeText: {
    fontSize: 17,
    color: '#000',
    alignSelf: 'flex-start',
  },
  smallText: {
    fontSize: 15,
    color: 'gray',
    alignSelf: 'flex-start',
  },
});

export default Setting;
