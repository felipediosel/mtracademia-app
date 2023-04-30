import {useTheme} from 'styled-components';
import {SlideContent} from '../../../../components/Slider/SlideContent';
import {TextExtraLarge} from '../../../../components/Texts/TextExtraLarge';

export function MyPlan() {
  const theme = useTheme();

  return (
    <SlideContent
      source={require('../../../../assets/img/illustrations/contract.png')}
      title={
        <>
          seu{' '}
          <TextExtraLarge style={{color: theme.colors.pr}}>
            plano
          </TextExtraLarge>
          ...
        </>
      }
      subtitle={
        <>Veja qual plano você contratou e quantos dias faltam para expirar.</>
      }
    />
  );
}
