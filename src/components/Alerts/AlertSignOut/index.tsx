import {AwesomeAlertProps} from 'react-native-awesome-alerts';

import {useTheme} from 'styled-components';
import {Plugs} from 'phosphor-react-native';

import {Alert} from '../Alert';
import {Text} from '../../Texts/Text';

export const AlertSignOut: React.FC<AwesomeAlertProps> = ({...rest}) => {
  const theme = useTheme();

  return (
    <Alert
      confirmText={'Sim'}
      cancelText={'Não'}
      showConfirmButton={true}
      showCancelButton={true}
      icon={<Plugs size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      mainTitle={
        <>
          <Text style={{color: theme.colors.pr}}>Encerrar</Text> sessão
        </>
      }
      subTitle={
        <>
          Deseja sair agora? Será necessário uma nova autenticação por e-mail.
        </>
      }
      {...rest}
    />
  );
};
