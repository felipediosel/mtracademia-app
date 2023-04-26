import {AwesomeAlertProps} from 'react-native-awesome-alerts';

import {LinkBreak} from 'phosphor-react-native';
import {useTheme} from 'styled-components';

import {Alert} from '../Alert';
import {Text} from '../../Texts/Text';

export const AlertEmailLinkInvalid: React.FC<AwesomeAlertProps> = ({
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Alert
      icon={<LinkBreak size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      mainTitle={
        <>
          <Text style={{color: theme.colors.pr}}>link</Text> indisponível!
        </>
      }
      subTitle={
        <>O link utilizado por você pode estar inválido, expirado ou em uso. </>
      }
      {...rest}
    />
  );
};
