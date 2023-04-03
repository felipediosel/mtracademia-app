import AwesomeAlert from 'react-native-awesome-alerts';
import {useTheme} from 'styled-components';
import {Container} from '../../Container';
import {Text} from '../../Texts/Text';
import {TextExtraLarge} from '../../Texts/TextExtraLarge';
import {TextSmall} from '../../Texts/TextSmall';

type AlertProps = {
  icon: JSX.Element;
  text1: JSX.Element | string;
  text2: JSX.Element | string;
  text3: JSX.Element | string;
};

export function Alert({icon, text1, text2, text3, ...rest}: AlertProps) {
  const theme = useTheme();

  return (
    <AwesomeAlert
      title=""
      showProgress={false}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={false}
      showConfirmButton={false}
      messageStyle={{
        fontFamily: theme.fonts.fm,
        fontWeight: theme.fonts.weights.df,
        fontSize: 12,
      }}
      overlayStyle={{opacity: 1}}
      alertContainerStyle={{}}
      contentStyle={{}}
      contentContainerStyle={{
        backgroundColor: theme.colors.bg,
        maxWidth: theme.responsive.wp('100%'),
        height: theme.responsive.hp('33%'),
        width: theme.responsive.wp('80%'),
        justifyContent: 'center',
        borderRadius: 15,
        padding: theme.responsive.wp('15%'),
      }}
      customView={
        <Container style={{gap: theme.responsive.hp('2%')}}>
          <Container>
            {icon}
            <TextExtraLarge>{text1}</TextExtraLarge>
          </Container>
          <Container>
            <Text>{text2}</Text>
            <TextSmall style={{color: theme.colors.ts}}>{text3}</TextSmall>
          </Container>
        </Container>
      }
      {...rest}
    />
  );
}
