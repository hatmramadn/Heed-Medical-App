import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import {navigationRef} from './helpers/RootNavigation';

import RegisterScreen from './screens/register/RegisterScreen';
import LoginScreen from './screens/login/LoginScreen';
import ForgotPassword from './screens/forgotPassword/ForgotPassword';
import WelcomeScreen from './screens/splash/WelcomeScreen';
import MyDrawer from './navigation/Drawer';
import ClinicsScreen from './screens/clinic/ClinicsScreen';
import ClinicOverviewScreen from './screens/clinicOverView/ClinicOverviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="Clinic" component={ClinicsScreen} />
        <Stack.Screen name="ClinicOverView" component={ClinicOverviewScreen} />
      </Stack.Navigator>
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
