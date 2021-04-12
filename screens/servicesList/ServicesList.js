import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Service from '../../components/Service';
import {colors} from '../../constants/colors';

const ServicesList = ({clinicData, navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 40,
          justifyContent: 'space-between',
        }}>
        {clinicData.clinic.services.map(service => (
          <Service
            key={service.id}
            title={service.name}
            image={service.image}
            handlePress={() => {
              navigation.navigate('Reservation', {service: service});
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ServicesList;

const styles = StyleSheet.create({});
