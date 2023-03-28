import {Alert} from '../Alert';
import {SmileySad} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Container} from '../../Container';
import {TextExtraLarge} from '../../Texts/TextExtraLarge';
import {Text} from '../../Texts/Text';

export function AlertEmailLinkInvalid({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      customView={
        <Container style={{gap: theme.responsive.hp('2%')}}>
          <Container>
            <SmileySad size={33} weight={'fill'} color={theme.colors.pr} />
            <TextExtraLarge>Oops!</TextExtraLarge>
          </Container>
          <Text>
            Este <Text style={{color: theme.colors.pr}}>link</Text> está{' '}
            inválido, expirado ou em uso.
          </Text>
          <Text style={{color: theme.colors.ts}}>
            Informe novamente seu endereço de e-mail, e clique no botão Enviar.
          </Text>
        </Container>
      }
      {...rest}
    />
  );
}
