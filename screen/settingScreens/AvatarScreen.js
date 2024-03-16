import React from 'react'
import { Image, Text, View } from 'react-native'
import Avatar from '../../assets/avatar.jpg'

const AvatarScreen = () => {
  return (
   
   <>
   <View>
   
   <Image style={[{width:'100%',height:'100%'}]} source={Avatar} />
   </View>
   </>
  )
}

export default AvatarScreen
