import AwesomeAlert from 'react-native-awesome-alerts';
import {useTheme} from 'styled-components';

export function Alert({...rest}) {
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
      contentContainerStyle={{
        backgroundColor: theme.colors.bg,
        maxWidth: theme.responsive.wp('100%'),
        height: theme.responsive.hp('35%'),
        width: theme.responsive.wp('80%'),
        justifyContent: 'center',
        borderRadius: 15,
        padding: theme.responsive.wp('13%'),
      }}
      {...rest}
    />
  );
}
