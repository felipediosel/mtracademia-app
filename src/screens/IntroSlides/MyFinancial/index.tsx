import {useTheme} from 'styled-components';
import {SlideContent} from '../../../components/Slider/SlideContent';
import {TextExtraLarge} from '../../../components/Texts/TextExtraLarge';

export function MyFinancial() {
  const theme = useTheme();

  return (
    <SlideContent
      source={require('../../../assets/img/illustrations/finance.png')}
      title={
        <>
          ...e seu{' '}
          <TextExtraLarge style={{color: theme.colors.pr}}>
            financeiro
          </TextExtraLarge>
          .
        </>
      }
      subtitle={
        <>Consulte informações financeiras como suas contas pagas e à pagar.</>
      }
    />
  );
}
