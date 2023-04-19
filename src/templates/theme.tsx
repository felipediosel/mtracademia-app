import {createContext, useEffect, useState} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {getUserPreferences} from '../hooks/useUserPreferences';

import themes from '../themes';

type Props = {
  children: JSX.Element;
};

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export const ThemeContext = createContext({
  themeType: ThemeType.dark,
  toggleTheme: () => {},
});

export function Theme({children}: Props) {
  const deviceTheme = useColorScheme();

  const [theme, setTheme] = useState<ColorSchemeName>(deviceTheme);

  const toggleTheme = async () => {
    await loadTheme();
  };

  useEffect(() => {
    loadTheme();
  });

  async function loadTheme() {
    const userPreferences = await getUserPreferences();

    if (userPreferences) {
      setTheme(userPreferences.theme ? userPreferences.theme : deviceTheme);
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={themes[theme ? theme : ThemeType.dark]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
