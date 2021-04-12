import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {colors} from '../constants/colors';

const Service = ({image, title, handlePress}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50}}
          source={{uri: image}}
        />
      </TouchableOpacity>
      <Text>{`Service name ${title}`}</Text>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,

    borderRadius: 100,
    margin: 20,
  },
});
