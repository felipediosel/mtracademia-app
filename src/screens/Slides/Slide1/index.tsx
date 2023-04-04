import {HandWaving} from 'phosphor-react-native';
import {Text} from '../../../components/Texts/Text';
import {TextExtraLarge} from '../../../components/Texts/TextExtraLarge';
import {useTheme} from 'styled-components';
import {Container} from '../../../components/Container';

export function Slide1() {
  const theme = useTheme();

  return (
    <>
      <HandWaving
        size={theme.icons.sizes.xl}
        weight={'regular'}
        color={theme.colors.pr}
      />
      <Container>
        <TextExtraLarge>
          Faaala{' '}
          <TextExtraLarge style={{color: theme.colors.pr}}>
            monstro
          </TextExtraLarge>
          !
        </TextExtraLarge>
        <Text style={{color: theme.colors.ts}}>
          Seja bem vindo ao app MTR. Pensado para melhorar ainda mais sua
          experiência como nosso aluno.
        </Text>
      </Container>
    </>
  );
}
