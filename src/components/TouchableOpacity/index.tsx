import * as S from './styles';
import {ActivityIndicator} from 'react-native';
import {ReactNode} from 'react';
import {useTheme} from 'styled-components';

type Props = {
  children: ReactNode;
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
