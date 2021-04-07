import React from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';

const Clinic = ({clinic, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
      <View style={{marginBottom: 4, justifyContent: 'center'}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            position: 'absolute',
            zIndex: 1,
            opacity: 0.4,
          }}></View>
        <Text
          style={{
            position: 'absolute',
            alignSelf: 'center',
            zIndex: 2,
            bottom: 40,
            left: 20,
            fontSize: 20,
            color: 'white',
          }}>
          {`Test Clinic ${clinic.name}`}
        </Text>
        <Text
          style={{
            position: 'absolute',
            alignSelf: 'center',
            zIndex: 2,
            bottom: 10,
            left: 20,
            fontSize: 20,
            color: 'white',
          }}>
          {`Location ${clinic.address} `}
        </Text>
        <Image
          style={{
            height: 180,
            opacity: 1,
          }}
          source={{
            uri: `${clinic.image}`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Clinic;

const styles = StyleSheet.create({});
