import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {ArrowLeft} from 'phosphor-react-native';

import {Container} from '../../Container';
import {MenuHeaderTitle, MenuHeaderTitleProps} from '../MenuHeaderTitle';

export function MenuHeader({...rest}: MenuHeaderTitleProps) {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: theme.responsive.hp('5.8%'),
        paddingLeft: theme.responsive.hp('3%'),
      }}>
      <Container
        style={{
          flexDirection: 'row',
        }}>
        <Container
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              width: 35,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <ArrowLeft size={theme.icons.sizes.sm} color={theme.colors.ts} />
          </TouchableOpacity>
        </Container>
        <MenuHeaderTitle {...rest} />
      </Container>
    </Container>
  );
}
