import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Category = ({category, handlePress}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      key={category.id}>
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
        <Image
          style={{
            width: 50,
            height: 50,
            position: 'absolute',
            alignSelf: 'center',
            zIndex: 2,
          }}
          source={{uri: category.icon}}
        />
        <Text
          style={{
            position: 'absolute',
            alignSelf: 'center',
            zIndex: 3,
            bottom: 30,
            fontSize: 20,
            color: 'white',
          }}>
          {`${category.name} Category`}
        </Text>
        <Image
          style={{
            height: 180,
            opacity: 1,
          }}
          source={{
            uri: `${category.image}`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({});
