import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Toast, {BaseToast} from 'react-native-toast-message';

import RegisterScreen from './screens/register/RegisterScreen';
import LoginScreen from './screens/login/LoginScreen';
import HomeScreen from './screens/home/HomeScreen';
import ForgotPassword from './screens/forgotPassword/ForgotPassword';

const Stack = createStackNavigator();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
