import React from 'react';
import {inputs} from './Interface';
import {Colors, hp} from '../utils/Index';
import {StyleSheet, TextInput} from 'react-native';

const InputText = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
}: inputs) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      style={styles.inputStyle}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={Colors.placeholderColor}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputStyle: {
    height: hp(5),
    borderBottomWidth: 1,
    color: Colors.placeholderColor,
    borderBottomColor: Colors.white,
  },
});
