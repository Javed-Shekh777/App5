import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <>
      <ScrollView style={[styles.container]}>
        <View>
          <View style={[styles.inner, {marginTop: -15}]}>
            <TouchableOpacity>
              <View style={[styles.box]}>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Conversion tones</Text>
                  <Text>Play sounds for incoming and outgoing messages.</Text>
                </View>
                <View>
                  <Switch
                    trackColor={{false: 'gray', true: 'green'}}
                    thumbColor={isEnabled ? '#fff' : '#ccc'}
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.inner]}>
            <Text>Messages</Text>
            <View>
              <TouchableOpacity>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Notifications tone</Text>
                  <Text>Default ringtone(DoDa)</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Vibrate</Text>
                  <Text>Default</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Popup notifications</Text>
                  <Text>Not available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Light</Text>
                  <Text>White</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.box]}>
                  <View style={[styles.innerBox]}>
                    <Text style={[styles.mainText]}>
                      Use high priority notifications
                    </Text>
                    <Text>
                      Show previews of notifications at the top of the screen
                    </Text>
                  </View>
                  <View>
                    <Switch
                      trackColor={{false: 'gray', true: 'green'}}
                      thumbColor={isEnabled ? '#fff' : '#ccc'}
                      onValueChange={() => setIsEnabled(!isEnabled)}
                      value={isEnabled}
                      style={[styles.icon, {marginLeft: 45}]}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.box]}>
                  <View style={[styles.innerBox]}>
                    <Text style={[styles.mainText]}>
                      Reactions Notifications
                    </Text>
                    <Text>
                      show notifications for reactions to messages you send
                    </Text>
                  </View>
                  <View>
                    <Switch
                      trackColor={{false: 'gray', true: 'green'}}
                      thumbColor={isEnabled ? '#fff' : '#ccc'}
                      onValueChange={() => setIsEnabled(!isEnabled)}
                      value={isEnabled}
                      style={[styles.icon, {marginLeft: 45}]}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.inner]}>
            <Text>Groups</Text>
            <View>
              <TouchableOpacity>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Notifications tone</Text>
                  <Text>Default ringtone(DoDa)</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Vibrate</Text>
                  <Text>Default</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Popup notifications</Text>
                  <Text>Not available</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Light</Text>
                  <Text>White</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.box]}>
                  <View style={[styles.innerBox]}>
                    <Text style={[styles.mainText]}>
                      Use high priority notifications
                    </Text>
                    <Text>
                      Show previews of notifications at the top of the screen
                    </Text>
                  </View>
                  <View>
                    <Switch
                      trackColor={{false: 'gray', true: 'green'}}
                      thumbColor={isEnabled ? '#fff' : '#ccc'}
                      onValueChange={() => setIsEnabled(!isEnabled)}
                      value={isEnabled}
                      style={[styles.icon, {marginLeft: 45}]}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.box]}>
                  <View style={[styles.innerBox]}>
                    <Text style={[styles.mainText]}>
                      Reactions Notifications
                    </Text>
                    <Text>
                      show notifications for reactions to messages you send
                    </Text>
                  </View>
                  <View>
                    <Switch
                      trackColor={{false: 'gray', true: 'green'}}
                      thumbColor={isEnabled ? '#fff' : '#ccc'}
                      onValueChange={() => setIsEnabled(!isEnabled)}
                      value={isEnabled}
                      style={[styles.icon, {marginLeft: 45}]}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.inner]}>
            <Text>Calls</Text>
            <TouchableOpacity>
              <View style={[styles.innerBox]}>
                <Text style={[styles.mainText]}>Ringtone</Text>
                <Text>Default tingtone (298642289688659)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.innerBox]}>
                <Text style={[styles.mainText]}>Vibrate</Text>
                <Text>Default</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  inner: {
    padding: 22,
    display: 'flex',
    // marginBottom:10
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerBox: {
    display: 'flex',
    width: '70%',
    // backgroundColor:'red',
    // marginVertical:10
    marginVertical: 15,
  },
  text: {
    color: 'gray',
    fontSize: 14,
  },
  mainText: {color: '#000', fontSize: 16},
  icon: {color: 'gray', fontSize: 25, marginRight: 20},
});

export default NotificationsScreen;
