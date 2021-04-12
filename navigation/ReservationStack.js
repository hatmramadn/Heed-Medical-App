import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ServicesList from '../screens/servicesList/ServicesList';
import Reservation from '../screens/reservation/Reservation';
import DoctorReservation from '../screens/doctorReservation/DoctorReservation';

const Stack = createStackNavigator();

const ReservationStack = ({clinicData}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Services">
        {props => <ServicesList {...props} clinicData={clinicData} />}
      </Stack.Screen>
      <Stack.Screen name="Reservation" component={Reservation} />
      <Stack.Screen name="DocReserve" component={DoctorReservation} />
    </Stack.Navigator>
  );
};

export default ReservationStack;

const styles = StyleSheet.create({});
