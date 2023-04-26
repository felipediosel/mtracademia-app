import {AwesomeAlertProps} from 'react-native-awesome-alerts';

import {FolderUser} from 'phosphor-react-native';
import {useTheme} from 'styled-components';

import {Alert} from '../Alert';
import {Text} from '../../Texts/Text';

export const AlertEmailNotFound: React.FC<AwesomeAlertProps> = ({...rest}) => {
  const theme = useTheme();

  return (
    <Alert
      icon={<FolderUser size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      mainTitle={
        <>
          <Text style={{color: theme.colors.pr}}>Nada</Text> encontrado...
        </>
      }
      subTitle={
        <>
          Caso for nosso aluno, verifique seu cadastro em uma de nossas
          unidades.
        </>
      }
      {...rest}
    />
  );
};
