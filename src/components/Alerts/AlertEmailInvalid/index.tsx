import {Alert} from '../Alert';
import {XCircle} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Container} from '../../Container';
import {TextExtraLarge} from '../../Texts/TextExtraLarge';
import {Text} from '../../Texts/Text';

export function AlertEmailInvalid({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      customView={
        <Container style={{gap: theme.responsive.hp('2%')}}>
          <Container>
            <XCircle size={33} weight={'fill'} color={theme.colors.pr} />
            <TextExtraLarge>Noop!</TextExtraLarge>
          </Container>
          <Text>
            Este <Text style={{color: theme.colors.pr}}>e-mail</Text> é
            inválido.
          </Text>
          <Text style={{color: theme.colors.ts}}>
            O endereço de e-mail informado por você parece estar mal formatado.
          </Text>
        </Container>
      }
      {...rest}
    />
  );
}
