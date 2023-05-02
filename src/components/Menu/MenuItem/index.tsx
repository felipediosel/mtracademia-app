import {CaretRight} from 'phosphor-react-native';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import {Container} from '../../Container';
import {Text} from '../../Texts/Text';

type MenuItemProps = TouchableOpacityProps & {
  icon: JSX.Element;
  title: string;
  disabled?: boolean;
  showArrow?: boolean;
  component?: JSX.Element | undefined;
};

export function MenuItem({
  icon,
  title,
  disabled = false,
  showArrow = false,
  component,
  ...rest
}: MenuItemProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        flexDirection: 'row',
        gap: theme.responsive.hp('1%'),
        borderRadius: 50,
        height: 35,
      }}
      {...rest}>
      <Container
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
        }}>
        <Container
          style={{
            flexDirection: 'row',
          }}>
          {icon}
          <Text>{title}</Text>
        </Container>
        <Container>
          {!!showArrow && !component && (
            <CaretRight weight="bold" color={theme.colors.ts} size={15} />
          )}
          {component}
        </Container>
      </Container>
    </TouchableOpacity>
  );
}
