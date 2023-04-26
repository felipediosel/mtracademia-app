import {useTheme} from 'styled-components';

import {Clock, DropHalfBottom, Gauge, Handshake} from 'phosphor-react-native';

import {Container} from '../../../../components/Container';
import {ItemSmall} from '../../../../components/Itens/ItemSmall';
import {TextSmall} from '../../../../components/Texts/TextSmall';
import {Image, ImageBackground} from 'react-native';

export function Slide1() {
  const theme = useTheme();

  return (
    <Container
      style={{
        flexDirection: 'row',
        width: '100%',
      }}>
      <Container
        style={{
          width: '50%',
        }}>
        <ItemSmall>
          <Container>
            <TextSmall
              style={{
                color: theme.colors.ts,
              }}>
              Contrato
            </TextSmall>
            <Handshake size={theme.icons.sizes.sm} color={theme.colors.pr} />
            <TextSmall>Anual</TextSmall>
          </Container>
        </ItemSmall>
        <ItemSmall>
          <Container>
            <TextSmall
              style={{
                color: theme.colors.ts,
              }}>
              Expira em
            </TextSmall>
            <Clock size={theme.icons.sizes.sm} color={theme.colors.pr} />
            <TextSmall>183 dias</TextSmall>
          </Container>
        </ItemSmall>
      </Container>
      <Container
        style={{
          width: '50%',
        }}>
        <ItemSmall>
          <Container>
            <TextSmall
              style={{
                color: theme.colors.ts,
              }}>
              Peso
            </TextSmall>
            <Gauge size={theme.icons.sizes.sm} color={theme.colors.pr} />
            <TextSmall>90 kg</TextSmall>
          </Container>
        </ItemSmall>
        <ItemSmall>
          <Container>
            <TextSmall
              style={{
                color: theme.colors.ts,
              }}>
              Gordura
            </TextSmall>
            <DropHalfBottom
              size={theme.icons.sizes.sm}
              color={theme.colors.pr}
            />
            <TextSmall>12 %</TextSmall>
          </Container>
        </ItemSmall>
      </Container>
    </Container>
  );
}
