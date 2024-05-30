import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const GradientStatusbar = () => {
  return (
<LinearGradient colors={['rgba(121, 232, 232, 0.1)', 'rgba(129, 140, 250, 0.1)']} 
style={{ flex: 0.01 }}>
        {/* You can adjust the colors and other styles as needed */}
        <StatusBar translucent={true} backgroundColor='transparent' barStyle="dark-content" />
      </LinearGradient>
  )
}

export default GradientStatusbar