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
import CustomTextInput from '../components/CustomTextInput';
import CheckBox from '@react-native-community/checkbox';

import {colors} from '../constants/colors';
import axios from 'axios';
const RegisterScreen = () => {
  const [user, setUser] = useState({});
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const signUp = () => {
    const registeredUser = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      password_confirmation: user.passwordConfimation,
    };
    console.log(registeredUser);
    axios
      .post('http://heed.linekw.net/api/register', registeredUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <View style={{alignItems: 'center'}}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../assets/header.png')}
        style={{
          width: '100%',
          height: Dimensions.get('screen').height / 1.8,
        }}
      />
      <KeyboardAvoidingView
        enabled
        behavior="position"
        style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={{color: colors.main, fontSize: 24, marginBottom: 20}}>
            Sign Up
          </Text>
          <CustomTextInput
            placeholder="Name"
            value={user.name}
            handleChange={text => setUser({...user, name: text})}
          />
          <CustomTextInput
            placeholder="E-mail"
            value={user.email}
            handleChange={text => setUser({...user, email: text})}
            keyboardType="email-address"
          />
          <CustomTextInput
            placeholder="Mobile Number"
            value={user.phone}
            handleChange={text => setUser({...user, phone: text})}
            handleSubmit={() => console.log(user)}
            keyboardType="phone-pad"
          />
          <CustomTextInput
            placeholder="Password"
            value={user.password}
            handleChange={text => setUser({...user, password: text})}
            secureTextEntry={true}
          />
          <CustomTextInput
            placeholder="Confirm Password"
            value={user.passwordConfimation}
            handleChange={text => setUser({...user, passwordConfimation: text})}
            secureTextEntry={true}
            handleSubmit={signUp}
          />
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
        onPress={signUp}
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
          <TouchableOpacity style={{marginTop: -3}}>
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

export default RegisterScreen;

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
    top: '25%',
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
    marginTop: 250,
    borderRadius: 500,
  },
});
