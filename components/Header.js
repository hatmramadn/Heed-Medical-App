import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import {colors} from '../constants/colors';

const Header = ({navigation, placeholder}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 30,
      }}>
      <StatusBar
        translucent={Platform.OS === 'android' ? true : false}
        backgroundColor={Platform.OS === 'android' ? 'transparent' : null}
      />
      <Image
        style={{
          width: '100%',
          resizeMode: 'contain',
          position: 'absolute',
          top: -65,
          backgroundColor: 'transparent',
        }}
        source={require('../assets/sticky-header.png')}
      />
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          top: 75,
          zIndex: 10,
          alignSelf: 'center',
          width: 300,
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'absolute',
            top: Platform.OS === 'ios' ? 10 : 15,
            left: 15,
            zIndex: 20,
          }}
          source={require('../assets/search-main-color.png')}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.main}
          style={{
            width: '100%',
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingBottom: 10,
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
          top: Platform.OS === 'ios' ? 40 : 35,
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
          top: Platform.OS === 'ios' ? 40 : 35,
          right: 20,
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={require('../assets/notification.png')}
        />
        <View
          style={{
            backgroundColor: 'red',
            width: 15,
            height: 15,
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
              fontSize: 8,
              marginBottom: 2,
            }}>
            1
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
