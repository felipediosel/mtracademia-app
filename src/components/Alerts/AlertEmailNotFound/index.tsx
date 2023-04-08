import {Alert} from '../Alert';
import {FolderUser} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export function AlertEmailNotFound({...rest}): JSX.Element {
  const theme = useTheme();

  return (
    <Alert
      icon={<FolderUser size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      mainTitle={
        <>
          <Text style={{color: theme.colors.pr}}>Aluno</Text> não encontrado
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
}
