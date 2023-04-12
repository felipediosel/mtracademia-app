import {PersonSimpleRun} from 'phosphor-react-native';
import {Text} from '../../../components/Texts/Text';
import {TextExtraLarge} from '../../../components/Texts/TextExtraLarge';
import {useTheme} from 'styled-components';
import {Container} from '../../../components/Container';

export function Slide4() {
  const theme = useTheme();

  return (
    <>
      <PersonSimpleRun
        size={theme.icons.sizes.xxl}
        weight={'regular'}
        color={theme.colors.pr}
      />
      <Container>
        <TextExtraLarge>
          Seu{'\n'}
          <TextExtraLarge style={{color: theme.colors.pr}}>
            Corpo
          </TextExtraLarge>
          .
        </TextExtraLarge>
        <Text style={{color: theme.colors.ts}}>
          Agende avaliações físicas periódicas e acompanhe sua evolução ao longo
          do tempo pelo celular.
        </Text>
      </Container>
    </>
  );
}
