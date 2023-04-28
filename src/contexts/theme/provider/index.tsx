import {useEffect, useMemo, useState} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProvider as ThemeProviderDefault} from 'styled-components';
import {ThemeContext, ThemeType} from '..';
import themes from '../../../themes';
import useAuth from '../../auth/hooks/useAuth';

export type Props = {
  children?: React.ReactNode | undefined;
};

const ThemeProvider: React.FC<Props> = ({children}) => {
  const deviceTheme = useColorScheme();
  const {user} = useAuth();

  const [theme, setTheme] = useState<ColorSchemeName>(deviceTheme);

  useEffect(() => {
    const userTheme =
      user && user.preferences && user.preferences.theme
        ? user.preferences.theme
        : deviceTheme;

    setTheme(userTheme);
  }, [user?.preferences]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProviderDefault theme={themes[theme ? theme : ThemeType.dark]}>
        {children}
      </ThemeProviderDefault>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
