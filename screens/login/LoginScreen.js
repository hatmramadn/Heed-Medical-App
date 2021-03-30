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
import CheckBox from '@react-native-community/checkbox';
import {useForm, Controller} from 'react-hook-form';
import Toast from 'react-native-toast-message';

import {colors} from '../../constants/colors';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    axios
      .post('http://heed.linekw.net/api/register', data)
      .then(res => {
        if (res.data.status === 0) {
          Toast.show({
            type: 'error',
            text1: '❌ Error ',
            text2: res.data.message,
          });
        } else {
          Toast.show({
            type: 'success',
            text1: '✅ Success ',
            text2: res.data.message,
          });
          navigation.navigate('Home');
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
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{alignItems: 'center'}}>
      <StatusBar barStyle="light-content" />
      <Image
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
                placeholder="Name"
                value={value}
                onBlur={onBlur}
                handleChange={value => onChange(value)}
              />
            )}
            name="name"
            rules={{required: 'Name is required'}}
            defaultValue=""
          />
          {errors.name && (
            <Text style={{color: 'red', marginBottom: 2}}>
              {errors.name.message}
            </Text>
          )}
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <CustomTextInput
                placeholder="E-maill"
                value={value}
                onBlur={onBlur}
                handleChange={value => onChange(value)}
              />
            )}
            name="email"
            rules={{required: 'Email is required'}}
            defaultValue=""
          />
          {errors.email && (
            <Text style={{color: 'red', marginBottom: 2}}>
              {errors.email.message}
            </Text>
          )}

          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <CustomTextInput
                placeholder="Mobile Number"
                value={value}
                onBlur={onBlur}
                handleChange={value => onChange(value)}
              />
            )}
            name="phone"
            rules={{required: 'Phone is required'}}
            defaultValue=""
          />
          {errors.phone && (
            <Text style={{color: 'red'}}>{errors.phone.message}</Text>
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
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <CustomTextInput
                secureTextEntry={true}
                placeholder="Password Confirmation"
                value={value}
                onBlur={onBlur}
                handleChange={value => onChange(value)}
              />
            )}
            name="password_confirmation"
            rules={{required: 'Password is required'}}
            defaultValue=""
          />
          {errors.password_confirmation && (
            <Text style={{color: 'red', marginBottom: 2}}>
              {errors.password_confirmation.message}
            </Text>
          )}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              style={{marginTop: 5, marginRight: 10, marginLeft: 3}}
              boxType="square"
              onAnimationType="stroke"
              offAnimationType="stroke"
              onTintColor={colors.main}
              onCheckColor={colors.main}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text
              style={{
                color: colors.grey,
                fontSize: 16,
              }}>
              By Accept{' '}
              <TouchableOpacity style={{marginTop: -3}}>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: 'black',
                  }}>
                  Terms & Conditions
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.regButton}
        activeOpacity={0.5}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: colors.grey,
            fontSize: 16,
            marginTop: 10,
          }}>
          Have Account{' '}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{marginTop: -3}}>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 16,
                color: colors.main,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </Text>
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
    top: '22%',
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
    backgroundColor: colors.darkGrey,
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginTop: 210,
    borderRadius: 500,
  },
});
