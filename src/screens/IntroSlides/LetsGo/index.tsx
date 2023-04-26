import {useTheme} from 'styled-components';
import {SlideContent} from '../../../components/Slider/SlideContent';
import {TextExtraLarge} from '../../../components/Texts/TextExtraLarge';

export function LetsGo() {
  const theme = useTheme();

  return (
    <SlideContent
      source={require('../../../assets/img/illustrations/go.png')}
      title={
        <>
          Let's{' '}
          <TextExtraLarge style={{color: theme.colors.pr}}>go</TextExtraLarge>!
        </>
      }
      subtitle={
        <>
          Clique no botão abaixo para começar a explorar os recursos do nosso
          app.
        </>
      }
    />
  );
}
