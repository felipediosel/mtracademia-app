import {createContext} from 'react';
import {ColorSchemeName} from 'react-native';

export type ThemeType = 'light' | 'dark';

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export type ThemeContextValue = {
  theme: ThemeType;
  changeTheme: Function;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: ThemeEnum.dark,
  changeTheme: (theme: ColorSchemeName) => {},
});
