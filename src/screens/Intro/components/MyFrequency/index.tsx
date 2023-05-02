import {useTheme} from 'styled-components';
import {SlideContent} from '../../../../components/Slider/SlideContent';
import {TextExtraLarge} from '../../../../components/Texts/TextExtraLarge';

export function MyFrequency() {
  const theme = useTheme();

  return (
    <SlideContent
      source={require('../../../../assets/img/illustrations/frequence.png')}
      title={
        <>
          Monitore os seus{' '}
          <TextExtraLarge style={{color: theme.colors.pr}}>
            treinos
          </TextExtraLarge>
          ,
        </>
      }
      subtitle={
        <>Utilize nosso app para acompanhar sua frequência nos treinamentos.</>
      }
    />
  );
}
