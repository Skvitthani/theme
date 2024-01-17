import {useContext} from 'react';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {ThemeCon} from '../components/ColorContex';
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fontSize = (val: number) => RFValue(val, 812);

export const wp = (val: number) => widthPercentageToDP(val);

export const hp = (val: number) => heightPercentageToDP(val);

export const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem('theme', value);
  } catch (e) {
    console.log('storeData error ----------', e);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('theme');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log('getData error ----------', e);
  }
};

export const imageColorFun = () => {
  const {currentTheme}: any = useContext(ThemeCon);
  const imageColor =
    currentTheme == 'green'
      ? '#38419D'
      : currentTheme == 'navy'
      ? '#9A031E'
      : currentTheme == 'maroon'
      ? '#0F2167'
      : '#6DA91E';
  return imageColor;
};

export const buttonColorFun = () => {
  const {currentTheme}: any = useContext(ThemeCon);
  const buttonColor =
    currentTheme == 'green'
      ? '#FFAD84'
      : currentTheme == 'navy'
      ? '#EE7214'
      : currentTheme == 'maroon'
      ? '#AF2655'
      : '#6DA91E';
  return buttonColor;
};

export const footerButtonColorFun = () => {
  const {currentTheme}: any = useContext(ThemeCon);
  const buttonColor =
    currentTheme == 'green'
      ? '#164863'
      : currentTheme == 'navy'
      ? '#BE3144'
      : currentTheme == 'maroon'
      ? '#8E8FFA'
      : '#CE5A67';
  return buttonColor;
};
