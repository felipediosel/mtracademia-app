import {FileText} from 'phosphor-react-native';
import {Text} from '../../../components/Texts/Text';
import {TextExtraLarge} from '../../../components/Texts/TextExtraLarge';
import {useTheme} from 'styled-components';

export function Slide2() {
  const theme = useTheme();

  return (
    <>
      <FileText size={83} weight={'regular'} color={theme.colors.pr} />
      <TextExtraLarge>
        Seu{'\n'}
        <TextExtraLarge style={{color: theme.colors.pr}}>Plano</TextExtraLarge>.
      </TextExtraLarge>
      <Text style={{color: theme.colors.ts}}>
        Consulte informações sobre o seu plano. Veja qual você contratou e
        quantos dias faltam.
      </Text>
    </>
  );
}
