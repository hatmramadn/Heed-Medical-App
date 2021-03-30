import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../constants/colors';

const CustomTextInput = ({
  placeholder,
  value,
  handleChange,
  handleSubmit,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={isFocused ? styles.inputActive : styles.inputStyle}
      {...props}
      placeholder={placeholder}
      value={value}
      onChangeText={handleChange}
      onSubmitEditing={handleSubmit}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 5,
    marginBottom: 10,
  },
  inputActive: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: 5,
    marginBottom: 10,
  },
});
export default CustomTextInput;
