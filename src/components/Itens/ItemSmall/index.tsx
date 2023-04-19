import {ViewProps} from 'react-native';

import * as S from './styles';

type ItemProps = ViewProps & {
  children: JSX.Element;
};

export function ItemSmall({children, ...rest}: ItemProps) {
  return <S.ItemSmall {...rest}>{children}</S.ItemSmall>;
}
