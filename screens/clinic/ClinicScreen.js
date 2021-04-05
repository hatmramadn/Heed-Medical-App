import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from '../../components/Header';
const ClinicScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
    </View>
  );
};

export default ClinicScreen;

const styles = StyleSheet.create({});
