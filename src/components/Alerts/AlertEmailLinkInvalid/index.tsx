import {Alert} from '../Alert';
import {LinkBreak, SmileySad} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export function AlertEmailLinkInvalid({...rest}) {
  const theme = useTheme();

  return (
    <Alert
      icon={<LinkBreak size={theme.icons.sizes.lg} color={theme.colors.pr} />}
      text1={<>Oops!</>}
      text2={
        <>
          <Text style={{color: theme.colors.pr}}>link</Text> indisponível
        </>
      }
      text3={
        <>O link utilizado por você pode estar inválido, expirado ou em uso. </>
      }
      {...rest}
    />
  );
}
