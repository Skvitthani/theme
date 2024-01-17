import React from 'react';
import {LogBox} from 'react-native';
import StackNavigate from './src/navigation/StackNavigate';
import {ThemeContext} from './src/components/ColorContex';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

const App = () => {
  return (
    <ThemeContext>
      <StackNavigate />
    </ThemeContext>
  );
};

export default App;
