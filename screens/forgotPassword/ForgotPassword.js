import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import {colors} from '../../constants/colors';
import CustomTextInput from '../../components/CustomTextInput';

const ForgotPassword = ({navigation}) => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    axios.post('http://heed.linekw.net/api/forget_password', data).then(res => {
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
      }
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
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
          source={require('../../assets/back-main-color.png')}
        />
      </TouchableOpacity>
      <View style={styles.mainView}>
        <Text style={styles.heading}>Forgot Password </Text>
        <Text style={styles.subHeading}>
          We just need your register e-mail ID to send reset link{' '}
        </Text>
        <Controller
          control={control}
          render={({onBlur, onChange, value}) => (
            <CustomTextInput
              onBlur={onBlur}
              placeholder="E-mail"
              value={value}
              handleChange={value => onChange(value)}
              keyboardType="email-address"
              handleSubmit={handleSubmit(onSubmit)}
            />
          )}
          name="email"
          rules={{required: 'This field is Required'}}
          defaultValue=""
        />
        {errors.email && (
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.regButton}
          activeOpacity={0.5}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
            Reset Password
          </Text>
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              color: colors.darkGrey,
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
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainView: {
    marginTop: 150,
    padding: 20,
  },
  heading: {
    color: '#15628d',
    fontSize: 24,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: colors.darkGrey,
    marginBottom: 30,
  },
  regButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 500,
  },
});
