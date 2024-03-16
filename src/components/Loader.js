import React from 'react'
import { ActivityIndicator, Dimensions, Modal, StyleSheet, Text, View } from 'react-native'

const Loader = ({visible}) => {
  return (
   <>
   <Modal visible={visible} transparent>
    <View style={[styles.modalView]}>
    <View style={[styles.mainView]}>
        <ActivityIndicator size={'large'} />
    </View>
    </View>
   
   </Modal>
   </>
  )
}

const styles = StyleSheet.create({
    modalView : {
        width: Dimensions.get("window").width,
      height : Dimensions.get("window").height,
      backgroundColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center'


    },
    mainView : {
        width:100,
        height:100,
        borderRadius:50,
        justifyContent:'center',
         
        alignItems:'center'

    }
})

export default Loader
