import {ViewProps} from 'react-native';

import * as S from './styles';

export const Background: React.FC<ViewProps> = ({...rest}) => {
  return <S.ViewBackground {...rest} />;
};
