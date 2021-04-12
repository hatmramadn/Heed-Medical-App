import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';

const DoctorCard = ({image, doctorName, specialist, handlePress}) => {
  return (
    <View
      activeOpacity={0.3}
      style={{
        backgroundColor: colors.greyLight,
        padding: 20,
        elevation: 1,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 9.6,
        alignItems: 'center',
        height: 250,
      }}>
      <View
        style={{
          // backgroundColor: colors.grey,
          width: 80,
          height: 80,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 80, height: 80, borderRadius: 30}}
          source={{uri: image}}
        />
      </View>
      <Text
        style={{
          color: colors.main,
          fontSize: 16,
          marginVertical: 10,
        }}>{`Doc Name: ${doctorName}`}</Text>
      <Text>{`Specialist: ${specialist}`}</Text>

      <TouchableOpacity
        onPress={handlePress}
        style={{
          marginVertical: 10,
          backgroundColor: colors.main,
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: 20,
          elevation: 1,
          borderRadius: 20,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 9.6,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({});
