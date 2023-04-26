import {createContext} from 'react';
import {ColorSchemeName} from 'react-native';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export type ThemeContextValue = {
  theme: ColorSchemeName;
  setTheme: Function;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: ThemeType.dark,
  setTheme: (theme: ColorSchemeName) => {},
});
