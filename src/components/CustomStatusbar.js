import { StatusBar } from 'react-native'
import React from 'react'

const CustomStatusbar = () => {
  return (
    <StatusBar
    translucent={true}
    backgroundColor="transparent"
    barStyle="dark-content"
  />
  )
}

export default CustomStatusbar