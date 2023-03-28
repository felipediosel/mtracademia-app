import {Wallet} from 'phosphor-react-native';
import {Text} from '../../../components/Texts/Text';
import {TextExtraLarge} from '../../../components/Texts/TextExtraLarge';
import {useTheme} from 'styled-components';

export function Slide3() {
  const theme = useTheme();

  return (
    <>
      <Wallet size={83} weight={'regular'} color={theme.colors.pr} />
      <TextExtraLarge>
        Seu{'\n'}
        <TextExtraLarge style={{color: theme.colors.pr}}>
          Financeiro
        </TextExtraLarge>
        .
      </TextExtraLarge>
      <Text style={{color: theme.colors.ts}}>
        Consulte os seus dados financeiros. Veja de forma detalhada as suas
        contas pagas e à pagar.
      </Text>
    </>
  );
}
