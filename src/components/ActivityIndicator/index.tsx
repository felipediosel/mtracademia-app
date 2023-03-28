import * as S from './styles';
import {ActivityIndicator as ActivityIndicatorNative} from 'react-native';
import {useTheme} from 'styled-components';

export function ActivityIndicator({...rest}) {
  const theme = useTheme();

  return (
    <S.ViewActivityIndicator>
      <ActivityIndicatorNative color={theme.colors.pr} {...rest} />
    </S.ViewActivityIndicator>
  );
}
