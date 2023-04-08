import {Alert} from '../Alert';
import {At, Textbox, X, XCircle} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export function AlertEmailInvalid({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      icon={<Textbox size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      text1={<>Noop!</>}
      text2={
        <>
          <Text style={{color: theme.colors.pr}}>e-mail</Text> inválido
        </>
      }
      text3={
        <>O endereço de e-mail informado por você parece estar mal formatado.</>
      }
      {...rest}
    />
  );
}
