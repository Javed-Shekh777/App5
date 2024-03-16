import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PrivacyScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <ScrollView style={[styles.container]}>
        <View style={[styles.inner,]}>
          <Text style={[styles.text, {marginVertical: 10}]}>
            Who can see my personal info
          </Text>

          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>Last seen and online</Text>
              <Text style={[styles.text]}>My contacts, Everyone</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>Profile photo</Text>
              <Text style={[styles.text]}>My contacts</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>About</Text>
              <Text style={[styles.text]}>Everyone</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>Status</Text>
              <Text style={[styles.text]}>My contacts</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.innerBox]}>
              <View style={{width: '85%'}}>
                <Text style={[styles.mainText]}>Read reciepts</Text>
                <Text style={[styles.text]}>
                  If truned off, you won't send or recieve Read receipts, Read
                  reciepts are always sent for group chats.
                </Text>
              </View>
              <View>
                <Switch
                  trackColor={{false: 'gray', true: 'green'}}
                  thumbColor={isEnabled ? '#fff' : '#ccc'}
                  onValueChange={() => setIsEnabled(!isEnabled)}
                  value={isEnabled}
                  style={[styles.icon, {width: 50, height: 50}]}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View >
          <Text style={[styles.text, {marginVertical: 10,marginLeft:16}]}>Disappearing messages</Text>
          <TouchableOpacity>
            <View style={[styles.innerBox,{marginLeft:17,alignItems:'center'}]}>
              <View style={{display:'flex',width:'70%'}} >
                <Text style={[styles.mainText]}>Default message timer</Text>
                <Text style={[styles.text]}>
                    Start new chats with disappearing message set to your timer
                </Text>
              </View>
              <View>
                <Text style={[  { height: 50,marginLeft:20}]} >24 hours</Text>
                 
              </View>
            </View>
          </TouchableOpacity>

          
        </View>

        <View style={[styles.inner]}>
          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>Groups</Text>
              <Text style={[styles.text]}>Everyone</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>Live location</Text>
              <Text style={[styles.text]}>None</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>Calls</Text>
              <Text style={[styles.text]}>Silence unknown callers</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>Blocked contacts</Text>
              <Text style={[styles.text]}>14</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>Fingerprint lock</Text>
              <Text style={[styles.text]}>Enabled immediately</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.box]}>
              <Text style={[styles.mainText]}>Advanced</Text>
              <Text style={[styles.text]}>Protect IP address in calls</Text>
            </View>
          </TouchableOpacity>
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
    display: 'flex',
    padding: 20,
    justifyContent: 'space-between',
    
  },
  box: {
    marginBottom: 25,
    
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
     
  },
  mainText: {
    color: '#000',
    fontSize: 17,
  },
  text: {
    color: 'gray',
    fontSize: 14,
  },
  icon: {
    fontSize: 25,
  },
});

export default PrivacyScreen;
