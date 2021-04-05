import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {colors} from '../constants/colors';

const Header = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          top: 85,
          zIndex: 2,
          alignSelf: 'center',
          width: 300,
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'absolute',
            top: 8,
            left: 15,
            zIndex: 20,
          }}
          source={require('../assets/search-main-color.png')}
        />
        <TextInput
          placeholder="Search for departments..."
          placeholderTextColor={colors.main}
          style={{
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal: 45,
            borderRadius: 50,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
        style={{
          position: 'absolute',
          zIndex: 100,
          top: 50,
          left: 20,
        }}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={require('../assets/menu.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          position: 'absolute',
          zIndex: 100,
          top: 50,
          right: 20,
        }}>
        <Image
          style={{
            width: 25,
            height: 25,
          }}
          source={require('../assets/notification.png')}
        />
        <View
          style={{
            backgroundColor: 'red',
            width: 18,
            height: 18,
            position: 'absolute',
            top: -5,
            right: -5,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 12,
              marginBottom: 2,
            }}>
            1
          </Text>
        </View>
      </TouchableOpacity>
      <Image
        style={{
          width: '100%',
          resizeMode: 'contain',
          position: 'absolute',
          top: -60,
          zIndex: 1,
          // opacity: 0.1,
        }}
        source={require('../assets/sticky-header.png')}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
