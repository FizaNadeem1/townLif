import React from 'react';
import Navigation from './src/components/Navigation';
import {LogBox} from 'react-native'
LogBox.ignoreAllLogs()

const App = () => {
  return (
      <Navigation/>
  )
}


export default App;
