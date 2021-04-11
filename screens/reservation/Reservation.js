import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../constants/colors';
const Reservation = ({route, navigation}) => {
  const clinicData = route.params.clinicData;
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 10, height: 10, marginTop: 10}}
            source={require('../../assets/back-main.png')}
          />
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{marginTop: 20, backgroundColor: colors.darkGrey, padding: 20}}>
        <Text>هنا عرض حجز الدكاترة</Text>
      </View>
    </View>
  );
};

export default Reservation;

const styles = StyleSheet.create({});
