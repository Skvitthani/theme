import React from 'react';
import {buttonComp} from './Interface';
import {Colors, fontSize, hp} from '../utils/Index';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonComp = ({title, onPress, customButtonStyle}: buttonComp) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonStyle, customButtonStyle]}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 32,
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  titleStyle: {
    color: Colors.white,
    fontSize: fontSize(20),
  },
});
