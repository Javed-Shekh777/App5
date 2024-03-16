import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
 

const Camera = () => {
//   const [photoUri, setPhotoUri] = useState(null);
//   const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
//   console.log(RNCamera.Constants.Type.back)

//   const takePicture = async () => {
//     if (this.camera) {
//       const options = { quality: 0.5, base64: true };
//       const data = await this.camera.takePictureAsync(options);
//       setPhotoUri(data.uri);
//     }
//   };

//   const switchCamera = () => {
//     setCameraType(
//       cameraType === RNCamera.Constants.Type.back
//         ? RNCamera.Constants.Type.front
//         : RNCamera.Constants.Type.back
    // );
//   };

//   const savePhoto = async () => {
//     if (photoUri) {
//       await CameraRoll.save(photoUri, { type: 'photo' });
//     }
//   };

  return (
<>

    {/* // <View style={{ flex: 1  }}> */}
      {/* <RNCamera
        style={{ flex: 1 }}
        type={cameraType}
        ref={ref => {
          this.camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Button
          style={[styles.btn]}
            onPress={takePicture}
            title="Capture"
          />
          <Button
          style={[styles.btn]}
            onPress={switchCamera}
            title="Switch Camera"
          /> */}
          {/* <Button
          style={[styles.btn]}
            // onPress={savePhoto}
            title="Save Photo"
          />
        </View>
      </RNCamera>
     {/* {photoUri && <Image source={{ uri: photoUri }} style={{ flex: 1 }} />} 
    </View> */}

<View>
    <Text>cameea</Text>
</View>
</>



  );
};

const styles  = StyleSheet.create({
    btn:{
        color:'black',
        backgroundColor:'green'
    }
})

export default Camera;
