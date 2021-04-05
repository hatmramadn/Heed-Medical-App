import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import {useForm, Controller} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {colors} from '../../constants/colors';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    axios
      .post('http://heed.linekw.net/api/login', data)
      .then(res => {
        if (res.data.status === 0) {
          Toast.show({
            type: 'error',
            text1: '❌ Error ',
            text2: res.data.message,
          });
        } else {
          const token = JSON.stringify(res.data.data.user.authorization);
          const successMsg = res.data.message;
          AsyncStorage.setItem('token', token)
            .then(res => {
              Toast.show({
                type: 'success',
                text1: '✅ Success ',
                text2: successMsg,
              });
              navigation.replace('Home');
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: '❌ Error',
          text2: 'Somthing went Wrong',
        });
      });
  };

  return (
    <View style={{alignItems: 'center'}}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={{
          position: 'absolute',
          zIndex: 100,
          top: 50,
          left: 20,
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={require('../../assets/back-arrow.png')}
        />
      </TouchableOpacity>
      <Image
        resizeMode="cover"
        source={require('../../assets/header.png')}
        style={{
          width: '100%',
          height: Dimensions.get('screen').height / 1.7,
        }}
      />
      <KeyboardAvoidingView
        enabled
        behavior="position"
        style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={{color: colors.main, fontSize: 24, marginBottom: 20}}>
            Login
          </Text>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <CustomTextInput
                placeholder="E-maill / Phone Number"
                value={value}
                onBlur={onBlur}
                handleChange={value => onChange(value)}
                keyboardType="email-address"
              />
            )}
            name="email_phone"
            rules={{required: 'Email is required'}}
            defaultValue=""
          />
          {errors.email_phone && (
            <Text style={{color: 'red', marginBottom: 2}}>
              {errors.email_phone.message}
            </Text>
          )}

          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <CustomTextInput
                secureTextEntry={true}
                placeholder="Password"
                value={value}
                onBlur={onBlur}
                handleChange={value => onChange(value)}
                handleSubmit={handleSubmit(onSubmit)}
              />
            )}
            name="password"
            rules={{required: 'Password is required'}}
            defaultValue=""
          />
          {errors.password && (
            <Text style={{color: 'red', marginBottom: 2}}>
              {errors.password.message}
            </Text>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{alignSelf: 'flex-end'}}>
            <Text
              style={{
                fontSize: 16,
                color: colors.grey,
                fontWeight: '600',
                marginVertical: 10,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.regButton}
            activeOpacity={0.5}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
              Sign in
            </Text>
          </TouchableOpacity>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                color: colors.grey,
                fontSize: 16,
                marginVertical: 20,
              }}>
              Don't have an account?{' '}
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={{marginTop: -3}}>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: colors.main,
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={{flexDirection: 'row', alignItems: 'center', top: 200}}>
        <Text style={{color: colors.darkGrey, fontSize: 18}}>if Clinic</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            ...styles.regButton,
            flexDirection: 'row',
            paddingHorizontal: 20,
            marginLeft: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '600',
            }}>
            JOIN US
          </Text>
          <Image
            source={require('../../assets/heart.png')}
            style={{
              width: 20,
              height: 20,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 15.6,
    flex: 1,
    position: 'absolute',
    top: '50%',
    left: 30,
    right: 30,
  },
  innerContainer: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
  },
  regButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 500,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15.6,
  },
});
