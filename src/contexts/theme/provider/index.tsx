import {useState} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProvider as ThemeProviderDefault} from 'styled-components';
import {ThemeContext, ThemeType} from '..';
import themes from '../../../themes';

export type Props = {
  children?: React.ReactNode | undefined;
};

const ThemeProvider: React.FC<Props> = ({children}) => {
  const deviceTheme = useColorScheme();

  const [theme, setTheme] = useState<ColorSchemeName>(deviceTheme);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProviderDefault theme={themes[theme ? theme : ThemeType.dark]}>
        {children}
      </ThemeProviderDefault>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
