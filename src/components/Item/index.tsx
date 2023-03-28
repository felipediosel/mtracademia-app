import {ViewProps} from 'react-native';
import * as S from './styles';

type ItemProps = ViewProps & {
  children: React.ReactNode;
};

export function Item({children, ...rest}: ItemProps) {
  return <S.Item {...rest}>{children}</S.Item>;
}
