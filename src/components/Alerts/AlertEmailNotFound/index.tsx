import {AwesomeAlertProps} from 'react-native-awesome-alerts';
import {SmileySad} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Alert} from '../Alert';
import {Text} from '../../Texts/Text';

export const AlertEmailNotFound: React.FC<AwesomeAlertProps> = ({...rest}) => {
  const theme = useTheme();

  return (
    <Alert
      icon={<SmileySad size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      mainTitle={
        <>
          <Text style={{color: theme.colors.pr}}>E-mail</Text> não encontrado!
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
