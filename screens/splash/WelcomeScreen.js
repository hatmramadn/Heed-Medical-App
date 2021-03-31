import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({navigation}) => {
  AsyncStorage.getItem('token').then(token => {
    if (token) {
      console.log(token);
      navigation.replace('Home');
      SplashScreen.hide();
    } else {
      navigation.navigate('Login');
      SplashScreen.hide();
    }
  });

  return <></>;
};

export default WelcomeScreen;
