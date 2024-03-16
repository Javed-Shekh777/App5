import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from './ChatScreen';
import UpdateScreen from './UpdateScreen';
import CallScreen from './CallScreen';
import Header from '../components/Header';
import ChattingScreen from './ChattingScreen';
import SettingScreen from './SettingScreen';
import {TouchableOpacity, TextInput,Image,View,Text} from 'react-native';
import AntDeisgn from 'react-native-vector-icons/AntDesign';
import Ellipsis from 'react-native-vector-icons/FontAwesome5'
import SearchScreen from './SearchScreen';
import CameraScreen from './CameraScreen';
import UserInfoScreen from './UserInfoScreen';
import AccountScreen from './settingScreens/AccountScreen';
import PrivacyScreen from './settingScreens/PrivacyScreen';
import AvatarScreen from './settingScreens/AvatarScreen';
import ChatsScreen from './settingScreens/ChatsScreen';
import NotificationsScreen from './settingScreens/NotificationsScreen';
import StorageScreen from './settingScreens/StorageScreen';
import LanguageScreen from './settingScreens/LanguageScreen';
import HelpScreen from './settingScreens/HelpScreen';
import WelcomeScreen from './WelcomeScreen';
import AuthenticationScreen from './AuthenticationScreen';

const AllMenus = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* <Header /> */}
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          headerTintColor:'#fff',
          headerStyle:{
            backgroundColor:'green',
          }
        }}>
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Update" component={UpdateScreen} />
        <Stack.Screen name="Call" component={CallScreen} />

        <Stack.Screen name="ChattingScreen" component={ChattingScreen} />

        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={({navigation}) => ({
            headerShown: true,
            customAnimationOnGesture: true,
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerBackTitleStyle: {fontSize: 100},
             

            headerRight: () => (
              <TouchableOpacity>
                <AntDeisgn
                  name="search1"
                  style={{fontSize: 24, marginRight: 10, color: '#fff'}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen name="Search" component={SearchScreen} />

        <Stack.Screen name="Camera" component={CameraScreen} />

        <Stack.Screen
          name="UserInfo"
          component={UserInfoScreen}
          options={({navigation, route}) => ({
            headerShown: true ,
            customAnimationOnGesture: true,
            headerTintColor:  '#fff',
            headerStyle: {
              backgroundColor:  'green',
            },

            
              headerTitle: () => (  
                <>
                  <Image
                    style={[
                      {
                        height: 40,
                        width: 40,
                        borderRadius: 50,
                      marginLeft:-20,
                      backgroundColor:'red',
                      marginRight:10
                      },
                    ]}
                    source={{
                      uri: 'https://img.freepik.com/premium-photo/beautiful-colorful-valentine-s-day-heart-cloud-as-abstract-backgroundai-technology-generated-imag_1112-11207.jpg',
                    }}
                  />
                  <View>
                    <Text style={[{ color:'#fff',fontSize:20}]}>Vivek</Text>
                  </View>
                </> 
              ),
          

             
            headerRight: () => (
              <TouchableOpacity
                onPress={() => console.log('\n\n : ppp : ', route.params)}>
                <Ellipsis
                  name="ellipsis-v"
                  style={{fontSize: 22, marginRight: 10, color:'#fff'}}
                />
              </TouchableOpacity>
            ),
          })}
        />



        <Stack.Screen name='Account' component={AccountScreen}
         options={{headerShown:true}}
          />
        <Stack.Screen name='Privacy' component={PrivacyScreen} 
        options={{headerShown:true}} />
        <Stack.Screen name='Avatar' component={AvatarScreen}
         options={{headerShown:true}} />
        <Stack.Screen name='Chats' component={ChatsScreen} 
        options={{headerShown:true}} />
        <Stack.Screen name='Notifications' component={NotificationsScreen}
         options={{headerShown:true}} />
        <Stack.Screen name='Storage' component={StorageScreen}
         options={{headerShown:true}} />
        <Stack.Screen name='Language' component={LanguageScreen}
         options={{headerShown:true}} />
        <Stack.Screen name='Help' component={HelpScreen} 
        options={{headerShown:true}} />



        <Stack.Screen name='Welcome' component={WelcomeScreen}  />
        <Stack.Screen name='Authentication' component={AuthenticationScreen} />

      </Stack.Navigator>
    </>
  );
};

export default AllMenus;
