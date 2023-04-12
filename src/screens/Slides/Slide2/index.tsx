import {Files} from 'phosphor-react-native';
import {Text} from '../../../components/Texts/Text';
import {TextExtraLarge} from '../../../components/Texts/TextExtraLarge';
import {useTheme} from 'styled-components';
import {Container} from '../../../components/Container';

export function Slide2() {
  const theme = useTheme();

  return (
    <>
      <Files
        size={theme.icons.sizes.xxl}
        weight={'regular'}
        color={theme.colors.pr}
      />
      <Container>
        <TextExtraLarge>
          Seu{'\n'}
          <TextExtraLarge style={{color: theme.colors.pr}}>
            Plano
          </TextExtraLarge>
          .
        </TextExtraLarge>
        <Text style={{color: theme.colors.ts}}>
          Consulte informações sobre o seu plano. Veja qual você contratou e
          quantos dias faltam.
        </Text>
      </Container>
    </>
  );
}
