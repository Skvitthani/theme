import {createContext, useState} from 'react';
import {Colors, getData} from '../utils/Index';
import {ThemeContextProps} from './Interface';

const ThemeCon = createContext<ThemeContextProps | undefined>(undefined);

const ThemeContext = ({children}: any) => {
  const [currentTheme, setCurrentTheme] = useState('');

  getData().then((data: any) => {
    if (data == undefined) {
      setCurrentTheme(Colors.bgColor);
    } else {
      setCurrentTheme(data);
    }
  });

  return (
    <ThemeCon.Provider value={{currentTheme, setCurrentTheme}}>
      {children}
    </ThemeCon.Provider>
  );
};

export {ThemeContext, ThemeCon};
