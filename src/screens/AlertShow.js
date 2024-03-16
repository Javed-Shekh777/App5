import React from 'react'
import { Alert } from 'react-native'

const AlertShow = () => {
  return (
    <>
    {Alert.alert(`${pic}${heading}`,`${text}`,
    [
        text='fjdkfs'
    ])}
    </>
  )
}

export default AlertShow
