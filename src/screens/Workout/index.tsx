import {useTheme} from 'styled-components/native';

import {Timer} from 'phosphor-react-native';

import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {TextSmall} from '../../components/Texts/TextSmall';
import {TextLarge} from '../../components/Texts/TextLarge';

const Workout = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Background style={{justifyContent: 'center'}}>
      <Container
        style={{
          padding: theme.responsive.wp('20%'),
        }}>
        <Timer
          size={theme.icons.sizes.xl}
          weight={'regular'}
          color={theme.colors.pr}
        />
        <Container>
          <TextLarge>
            Em <TextLarge style={{color: theme.colors.pr}}>Breve</TextLarge>.
          </TextLarge>
          <TextSmall style={{color: theme.colors.ts}}>
            Logo você poderá gerenciar seus treinos e ver a execução correta dos
            exercícios na palma da mão.
          </TextSmall>
        </Container>
      </Container>
    </Background>
  );
};

export default Workout;
