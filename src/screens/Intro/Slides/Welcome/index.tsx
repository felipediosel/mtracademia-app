import {SlideContent} from '../../../../components/Slider/SlideContent';
import {TextExtraLarge} from '../../../../components/Texts/TextExtraLarge';
import {useTheme} from 'styled-components';

export function Welcome() {
  const theme = useTheme();

  return (
    <>
      <SlideContent
        source={require('../../../../assets/img/illustrations/gym.png')}
        title={
          <>
            Bem vindo{' '}
            <TextExtraLarge style={{color: theme.colors.pr}}>
              Aluno MTR
            </TextExtraLarge>
            !
          </>
        }
        subtitle={
          <>
            Este app foi pensado para melhorar ainda mais sua experiência
            conosco.
          </>
        }
      />
    </>
  );
}
