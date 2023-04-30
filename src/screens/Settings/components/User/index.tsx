import {User as UserIcon} from 'phosphor-react-native';
import {useTheme} from 'styled-components/native';
import {Container} from '../../../../components/Container';
import {Text} from '../../../../components/Texts/Text';
import {TextSmall} from '../../../../components/Texts/TextSmall';
import useAuth from '../../../../contexts/auth/hooks/useAuth';

export const User: React.FC = () => {
  const theme = useTheme();
  const {user} = useAuth();

  return (
    <Container
      style={{
        height: '30%',
        width: '100%',
        gap: theme.responsive.hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <UserIcon color={theme.colors.pr} size={theme.icons.sizes.xl} />
      <Text>{user ? user.name : '---'}</Text>
      <TextSmall style={{color: theme.colors.ts}}>Aluno</TextSmall>
    </Container>
  );
};
