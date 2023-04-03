import {Alert} from '../Alert';
import {HeartStraightBreak} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export function AlertEmailNotFound({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      icon={<HeartStraightBreak size={40} color={theme.colors.pr} />}
      text1={<>Aaah!</>}
      text2={
        <>
          Não encontramos <Text style={{color: theme.colors.pr}}>você</Text>.
        </>
      }
      text3={
        <>
          Caso for nosso aluno, verifique seu cadastro em uma de nossas
          unidades.
        </>
      }
      {...rest}
    />
  );
}
