import {Alert} from '../Alert';
import {Envelope} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Container} from '../../Container';
import {TextExtraLarge} from '../../Texts/TextExtraLarge';
import {Text} from '../../Texts/Text';

export function AlertEmailSent({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      customView={
        <Container style={{gap: theme.responsive.hp('2%')}}>
          <Container>
            <Envelope size={33} weight={'fill'} color={theme.colors.pr} />
            <TextExtraLarge>Yees!</TextExtraLarge>
          </Container>
          <Text>
            Enviamos um <Text style={{color: theme.colors.pr}}>e-mail</Text>.
          </Text>
          <Text style={{color: theme.colors.ts}}>
            Abra o e-mail que te enviamos e clique no link para fazer login no
            app.
          </Text>
        </Container>
      }
      {...rest}
    />
  );
}
