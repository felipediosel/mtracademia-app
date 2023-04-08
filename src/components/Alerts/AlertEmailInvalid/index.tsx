import {Alert} from '../Alert';
import {Textbox} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export function AlertEmailInvalid({...rest}): JSX.Element {
  const theme = useTheme();

  return (
    <Alert
      icon={<Textbox size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      mainTitle={
        <>
          <Text style={{color: theme.colors.pr}}>e-mail</Text> inválido
        </>
      }
      subTitle={
        <>O endereço de e-mail informado por você parece estar mal formatado.</>
      }
      {...rest}
    />
  );
}
