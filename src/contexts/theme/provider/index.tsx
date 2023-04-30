import {useEffect, useState} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProvider as ThemeProviderDefault} from 'styled-components';
import {ThemeContext, ThemeType, ThemeEnum} from '..';
import themes from '../../../themes';
import useAuth from '../../auth/hooks/useAuth';

export type Props = {
  children?: React.ReactNode | undefined;
};

const ThemeProvider: React.FC<Props> = ({children}) => {
  const deviceTheme: ColorSchemeName = useColorScheme();
  const defaultTheme: ThemeType = deviceTheme ? deviceTheme : ThemeEnum.dark;

  const {user} = useAuth();

  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const changeTheme = (theme: ColorSchemeName) => {
    setTheme(!!theme ? theme : defaultTheme);
  };

  useEffect(() => {
    const userTheme =
      user && user.preferences && user.preferences.theme
        ? user.preferences.theme
        : null;

    changeTheme(userTheme);
  }, [deviceTheme, user?.preferences]);

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <ThemeProviderDefault theme={themes[theme]}>
        {children}
      </ThemeProviderDefault>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
