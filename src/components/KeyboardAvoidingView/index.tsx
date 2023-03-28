import {Platform} from 'react-native';
import * as S from './styles';

export function KeyboardAvoidingView({...rest}) {
  return (
    <S.KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      {...rest}
    />
  );
}
