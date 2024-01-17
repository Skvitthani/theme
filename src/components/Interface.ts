import {GestureResponderEvent, ViewStyle} from 'react-native';

export interface inputs {
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
}
export interface buttonComp {
  title?: string;
  customButtonStyle?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export interface colorItem {
  key: string;
  color: string;
}

export interface ThemeContextProps {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
}
