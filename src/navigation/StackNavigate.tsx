import {StatusBar} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

// Screen
import {ThemeCon} from '../components/ColorContex';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigate = () => {
  const {currentTheme}: any = useContext(ThemeCon);

  const themeColor =
    currentTheme == 'green'
      ? '#4F6F52'
      : currentTheme == 'navy'
      ? '#3B3486'
      : currentTheme == 'maroon'
      ? '#7D0A0A'
      : currentTheme;

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: themeColor,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar backgroundColor={themeColor} barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigate;
