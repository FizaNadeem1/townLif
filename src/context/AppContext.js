import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { AppState } from 'react-native';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const baseUrl = 'http://192.168.43.122:8888';

  const [token, setToken] = useState(AsyncStorage.getItem('token'))

  const updateToken = (e) => {
    setToken(e)
  }
  const getToken = async () => {
    console.log("token context", await AsyncStorage.getItem('token'))
    setToken(await AsyncStorage.getItem('token'))
  }
useEffect(()=>{getToken()},[])
  return (
    <AppContext.Provider
      value={{
        baseUrl,
        token,
        updateToken,
        getToken,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
