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

const ChatsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <>
      <ScrollView style={[styles.container]}>
        <View>
          <View style={[styles.inner]}>
            <Text>Display</Text>
            <TouchableOpacity>
              <View style={[styles.box]}>
                <Icon style={[styles.icon]} name="light-mode" />
                <View>
                  <Text style={[styles.mainText]}>Theme</Text>
                  <Text>System default</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[styles.box]}>
                <Icon style={[styles.icon]} name="now-wallpaper" />
                <View>
                  <Text style={[styles.mainText]}>Wallpaper</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.inner]}>
            <Text>Chat settings</Text>
            <View>
              <TouchableOpacity>
                <View style={[styles.box]}>
                  <View style={[styles.innerBox]}>
                    <Text style={[styles.mainText]}>Enter is send</Text>
                    <Text>Enter key will send your message</Text>
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

              <TouchableOpacity>
                <View style={[styles.box]}>
                  <View style={[styles.innerBox]}>
                    <Text style={[styles.mainText]}>Media visibility</Text>
                    <Text>
                      show newly downloaded media in your device's gallery
                    </Text>
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

              <TouchableOpacity>
                <View style={[styles.box]}>
                  <View style={[styles.innerBox]}>
                    <Text style={[styles.mainText]}>Font size</Text>
                    <Text>Medium</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.inner]}>
            <Text>Archived chats</Text>
            <TouchableOpacity>
              <View style={[styles.box]}>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Keep chats archived</Text>
                  <Text>
                    Archived chats will remain acrhived when you recieve a new
                    message
                  </Text>
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
            <TouchableOpacity>
              <View style={[styles.box]}>
                <Icon style={[styles.icon]} name="backup" />
                <Text style={[styles.mainText]}>Chat backup</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.box]}>
                <Icon style={[styles.icon]} name="home" />
                <Text style={[styles.mainText]}>Transfer chats</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[styles.box]}>
                <Icon style={[styles.icon]} name="history" />
                <Text style={[styles.mainText]}>Chat history</Text>
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
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 7,
    marginBottom: 10,
  },
  innerBox: {
    display: 'flex',
    width: '70%',
    marginLeft: 50,
  },
  text: {
    color: 'gray',
    fontSize: 14,
  },
  mainText: {color: '#000', fontSize: 16},
  icon: {color: 'gray', fontSize: 25, marginRight: 20},
});

export default ChatsScreen;
