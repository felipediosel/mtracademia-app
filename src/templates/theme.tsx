import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import themes from '../themes';

type Props = {
  children: React.ReactNode;
};

export function Theme({children}: Props) {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme ? deviceTheme : 'dark'];

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
