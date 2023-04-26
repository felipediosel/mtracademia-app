import {
  ActivityIndicator as ActivityIndicatorNative,
  ViewProps,
} from 'react-native';
import {useTheme} from 'styled-components';

import * as S from './styles';

export const ActivityIndicator: React.FC<ViewProps> = ({...rest}) => {
  const theme = useTheme();

  return (
    <S.ViewActivityIndicator>
      <ActivityIndicatorNative color={theme.colors.pr} {...rest} />
    </S.ViewActivityIndicator>
  );
};
