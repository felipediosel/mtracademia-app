import {useTheme} from 'styled-components';
import {SlideContent} from '../../../../components/Slider/SlideContent';
import {TextExtraLarge} from '../../../../components/Texts/TextExtraLarge';

export function MyPhysicalEvaluations() {
  const theme = useTheme();

  return (
    <SlideContent
      source={require('../../../../assets/img/illustrations/body.png')}
      title={
        <>
          suas{' '}
          <TextExtraLarge style={{color: theme.colors.pr}}>
            avaliações físicas
          </TextExtraLarge>
          ,
        </>
      }
      subtitle={
        <>Agende avaliações físicas periódicas e acompanhe sua evolução aqui.</>
      }
    />
  );
}
