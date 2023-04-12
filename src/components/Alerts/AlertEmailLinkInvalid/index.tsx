import {Alert} from '../Alert';
import {LinkBreak} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {Text} from '../../Texts/Text';

export function AlertEmailLinkInvalid({...rest}): JSX.Element {
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
}
