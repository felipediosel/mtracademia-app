import {Alert} from '../Alert';
import {XCircle} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export function AlertEmailInvalid({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      icon={<XCircle size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      text1={<>Noop!</>}
      text2={
        <>
          Este <Text style={{color: theme.colors.pr}}>e-mail</Text> é inválido.
        </>
      }
      text3={
        <>O endereço de e-mail informado por você parece estar mal formatado.</>
      }
      {...rest}
    />
  );
}
