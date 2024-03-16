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

const StorageScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <>
      <ScrollView style={[styles.container]}>
        <View>
          <View style={[styles.inner]}>
            <TouchableOpacity>
              <View style={[styles.box]}>
                <Icon style={[styles.icon]} name="sd-storage" />
                <View>
                  <Text style={[styles.mainText]}>Memory storage</Text>
                  <Text>1.2 GB</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.inner, {marginTop: -15}]}>
            <TouchableOpacity>
              <View style={[styles.box]}>
                <Icon style={[styles.icon]} name="data-usage" />
                <View>
                  <Text style={[styles.mainText]}>Network usage</Text>
                  <Text>5.1 GB sendt . 9.1 Gb recieved</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[styles.box, {paddingVertical: 15}]}>
                <View style={[styles.innerBox]}>
                  <Text style={[styles.mainText]}>Use less data for calls</Text>
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
              <View style={[styles.innerBox]}>
                <Text style={[styles.mainText]}>Proxy </Text>
                <Text>off</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.inner]}>
            <Text style={{color: '#004849'}}>Media auto-download</Text>
            <Text style={{fontSize: 12, marginVertical: 5}}>
              Voice messages are always automatically downloaded
            </Text>

            <View style={[styles.inner, {marginLeft: -20, gap: 20}]}>

              <TouchableOpacity>
              <View style={[styles.innerBox]}>
                <Text style={[styles.mainText]}>When using mobile data </Text>
                <Text>Photos</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={[styles.innerBox]}>
                <Text style={[styles.mainText]}>When connected on Wi-Fi</Text>
                <Text>All media</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
                
              <View style={[styles.innerBox]}>
                <Text style={[styles.mainText]}>When roaming</Text>
                <Text>No media</Text>
              </View>
              </TouchableOpacity>

             

             

            </View>
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
    padding: 20,
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

export default StorageScreen;
