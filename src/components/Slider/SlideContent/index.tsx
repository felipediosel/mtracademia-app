import {Image, ImageSourcePropType} from 'react-native';
import {useTheme} from 'styled-components';
import {Container} from '../../../components/Container';
import {TextExtraLarge} from '../../../components/Texts/TextExtraLarge';
import {Text} from '../../../components/Texts/Text';

type SlideContentProps = {
  source: ImageSourcePropType;
  title: JSX.Element | string;
  subtitle: JSX.Element | string;
};

export const SlideContent: React.FC<SlideContentProps> = ({
  source,
  title,
  subtitle,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <Image
        source={source}
        resizeMode="contain"
        style={{
          height: theme.responsive.hp('45%'),
          width: theme.responsive.wp('95%'),
        }}
      />
      <Container style={{gap: theme.responsive.hp('3%')}}>
        <TextExtraLarge>{title}</TextExtraLarge>
        <Text style={{color: theme.colors.ts}}>{subtitle}</Text>
      </Container>
    </Container>
  );
};
