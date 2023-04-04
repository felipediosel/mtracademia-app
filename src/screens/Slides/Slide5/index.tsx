import {Barbell} from 'phosphor-react-native';
import {Text} from '../../../components/Texts/Text';
import {TextExtraLarge} from '../../../components/Texts/TextExtraLarge';
import {useTheme} from 'styled-components';
import {Container} from '../../../components/Container';

export function Slide5() {
  const theme = useTheme();

  return (
    <>
      <Barbell
        size={theme.icons.sizes.xl}
        weight={'regular'}
        color={theme.colors.pr}
      />
      <Container>
        <TextExtraLarge>
          Seus{'\n'}
          <TextExtraLarge style={{color: theme.colors.pr}}>
            Treinos
          </TextExtraLarge>
          .
        </TextExtraLarge>
        <Text style={{color: theme.colors.ts}}>
          Em breve você poderá gerenciar seus treinos e ver a execução correta
          dos exercícios na palma da mão.
        </Text>
      </Container>
    </>
  );
}
