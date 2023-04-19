import {useTheme} from 'styled-components';

import {Clock, DropHalfBottom, Gauge, Handshake} from 'phosphor-react-native';

import {Container} from '../../../../components/Container';
import {ItemSmall} from '../../../../components/Itens/ItemSmall';
import {TextSmall} from '../../../../components/Texts/TextSmall';

export function Slide2() {
  const theme = useTheme();

  return (
    <Container
      style={{
        flexDirection: 'row',
      }}></Container>
  );
}
