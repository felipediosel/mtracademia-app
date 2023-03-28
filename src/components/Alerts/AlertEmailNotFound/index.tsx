import {Alert} from '../Alert';
import {HeartStraightBreak} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Container} from '../../Container';
import {TextExtraLarge} from '../../Texts/TextExtraLarge';
import {Text} from '../../Texts/Text';

export function AlertEmailNotFound({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      customView={
        <Container style={{gap: theme.responsive.hp('2%')}}>
          <Container>
            <HeartStraightBreak
              size={33}
              weight={'fill'}
              color={theme.colors.pr}
            />
            <TextExtraLarge>Aaah!</TextExtraLarge>
          </Container>
          <Text>
            Não encontramos <Text style={{color: theme.colors.pr}}>você</Text>.
          </Text>
          <Text style={{color: theme.colors.ts}}>
            Caso for nosso aluno, verifique seu cadastro em uma de nossas
            unidades.
          </Text>
        </Container>
      }
      {...rest}
    />
  );
}
