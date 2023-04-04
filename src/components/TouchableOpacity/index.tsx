import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  children: JSX.Element;
  loading: boolean;
};

export function TouchableOpacity({children, loading, ...rest}: Props) {
  const theme = useTheme();

  return (
    <S.TouchableOpacity {...rest}>
      {loading ? <ActivityIndicator color={theme.colors.tp} /> : children}
    </S.TouchableOpacity>
  );
}
