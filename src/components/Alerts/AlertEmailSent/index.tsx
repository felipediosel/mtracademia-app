import {AwesomeAlertProps} from 'react-native-awesome-alerts';

import {EnvelopeSimpleOpen} from 'phosphor-react-native';
import {useTheme} from 'styled-components';

import {Alert} from '../Alert';
import {Text} from '../../Texts/Text';

export const AlertEmailSent: React.FC<AwesomeAlertProps> = ({...rest}) => {
  const theme = useTheme();

  return (
    <Alert
      confirmText="Entendi"
      icon={
        <EnvelopeSimpleOpen
          size={theme.icons.sizes.lg}
          color={theme.colors.pr}
        />
      }
      mainTitle={
        <>
          <Text style={{color: theme.colors.pr}}>e-mail</Text> enviado!
        </>
      }
      subTitle={
        <>
          Abra o e-mail que te enviamos e clique no link para fazer login no
          app.
        </>
      }
      {...rest}
    />
  );
};
