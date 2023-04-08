import {Image} from 'react-native';
import {useTheme} from 'styled-components';

export function HeaderLeft(): JSX.Element {
  const theme = useTheme();

  const path =
    theme.type === 'dark'
      ? require('../../../assets/img/mtr-logo-dark.png')
      : require('../../../assets/img/mtr-logo-light.png');

  return (
    <Image
      source={path}
      style={{
        width: 45,
        height: 41,
      }}
    />
  );
}
