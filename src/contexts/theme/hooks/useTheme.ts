import {useContext} from 'react';

import {ThemeContext, ThemeContextValue} from '../index';

const useTheme = (): ThemeContextValue => {
  const theme = useContext(ThemeContext);

  if (theme === null) {
    throw new Error('ThemeProvider not found.');
  }

  return theme;
};

export default useTheme;
