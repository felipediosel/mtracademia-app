import {Alert} from '../Alert';
import {Envelope} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export function AlertEmailSent({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      icon={<Envelope size={40} color={theme.colors.pr} />}
      text1={<>Yees!</>}
      text2={
        <>
          Enviamos um <Text style={{color: theme.colors.pr}}>e-mail</Text>.
        </>
      }
      text3={
        <>
          Abra o e-mail que te enviamos e clique no link para fazer login no
          app.
        </>
      }
      {...rest}
    />
  );
}
