import {useTheme} from 'styled-components';
import {UserList} from 'phosphor-react-native';

export function HeaderRight(): JSX.Element {
  const theme = useTheme();

  return <UserList size={theme.icons.sizes.sm} color={theme.colors.ts} />;
}
