import {Alert} from '../Alert';
import {SmileySad} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export function AlertEmailLinkInvalid({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      icon={<SmileySad size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      text1={<>Oops!</>}
      text2={
        <>
          Este <Text style={{color: theme.colors.pr}}>link</Text> está inválido,
          expirado ou em uso.
        </>
      }
      text3={
        <>Informe novamente seu endereço de e-mail, e clique no botão Enviar.</>
      }
      {...rest}
    />
  );
}
