import {useTheme} from 'styled-components';
import {UserList} from 'phosphor-react-native';
import {TouchableOpacity} from 'react-native';
import {TouchableOpacityProps} from 'react-native';

export function HeaderRight({...rest}: TouchableOpacityProps): JSX.Element {
  const theme = useTheme();

  return (
    <TouchableOpacity {...rest}>
      <UserList size={theme.icons.sizes.sm} color={theme.colors.ts} />
    </TouchableOpacity>
  );
}
