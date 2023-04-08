import AwesomeAlert from 'react-native-awesome-alerts';
import {useTheme} from 'styled-components';

import {Container} from '../../Container';
import {Text} from '../../Texts/Text';
import {TextSmall} from '../../Texts/TextSmall';

type AlertProps = {
  icon: JSX.Element;
  mainTitle: JSX.Element | string;
  subTitle: JSX.Element | string;
};

export function Alert({
  icon,
  mainTitle,
  subTitle,
  ...rest
}: AlertProps): JSX.Element {
  const theme = useTheme();

  return (
    <AwesomeAlert
      title=""
      showProgress={false}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={false}
      showConfirmButton={true}
      messageStyle={{
        fontFamily: theme.fonts.fm,
        fontWeight: theme.fonts.weights.df,
        fontSize: 12,
      }}
      overlayStyle={{opacity: 0.7, backgroundColor: '#101218'}}
      alertContainerStyle={{}}
      contentStyle={{}}
      contentContainerStyle={{
        backgroundColor: theme.colors.sc,
        maxWidth: theme.responsive.wp('100%'),
        height: theme.responsive.hp('35%'),
        width: theme.responsive.wp('80%'),
        justifyContent: 'center',
        borderRadius: 15,
        padding: theme.responsive.wp('5%'),
      }}
      customView={
        <Container style={{gap: theme.responsive.hp('2%')}}>
          <Container>{icon}</Container>
          <Container>
            <Text>{mainTitle}</Text>
            <TextSmall style={{color: theme.colors.ts}}>{subTitle}</TextSmall>
          </Container>
        </Container>
      }
      confirmButtonColor={theme.colors.pr}
      confirmText={'Ok'}
      confirmButtonTextStyle={{
        fontFamily: theme.fonts.fm,
        fontWeight: theme.fonts.weights.df,
        color: theme.colors.tp,
        fontSize: 12,
        textTransform: 'uppercase',
      }}
      confirmButtonStyle={{
        height: theme.responsive.hp('5%'),
        width: theme.responsive.wp('25%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
      {...rest}
    />
  );
}
