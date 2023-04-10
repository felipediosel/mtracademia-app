import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import {Text} from '../../Texts/Text';

type MenuItemProps = TouchableOpacityProps & {
  icon: JSX.Element;
  title: string;
};

export function MenuItem({icon, title, ...rest}: MenuItemProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.responsive.hp('1%'),
      }}
      {...rest}>
      {icon}
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
