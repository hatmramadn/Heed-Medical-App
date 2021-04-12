import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import DoctorCard from '../../components/DoctorCard';
import {colors} from '../../constants/colors';
const Reservation = ({route, navigation}) => {
  const doctors = route.params.service.doctors;
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginVertical: 10,
            marginHorizontal: 10,
          }}>
          <Image
            style={{width: 15, height: 15, marginRight: 10}}
            source={require('../../assets/back-main.png')}
          />
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginVertical: 20,
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        {doctors.map(doc => (
          <View
            key={doc.id}
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: 5,
            }}>
            <DoctorCard
              key={doc.id}
              image={doc.image}
              doctorName={doc.name}
              specialist={doc.specialist}
              handlePress={() =>
                navigation.navigate('DocReserve', {doctor: doc})
              }
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Reservation;

const styles = StyleSheet.create({});
