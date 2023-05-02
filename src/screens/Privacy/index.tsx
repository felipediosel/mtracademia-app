import {useTheme} from 'styled-components/native';
import {Cookie, FileText} from 'phosphor-react-native';

import {Background} from '../../components/Background';
import {MenuHeader} from '../../components/Menu/MenuHeader';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {TextSmall} from '../../components/Texts/TextSmall';
import SafeAreaView from '../../components/SafeAreaView';

const Privacy: React.FC = () => {
  const theme = useTheme();

  return (
    <Background>
      <SafeAreaView>
        <MenuHeader upTitle="Minha" downTitle="Privacidade" />
        <Container
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <Container
            style={{
              height: '5%',
            }}></Container>
          <Container
            style={{
              height: '50%',
              width: '100%',
              gap: theme.responsive.hp('5%'),
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingLeft: theme.responsive.hp('3%'),
              paddingRight: theme.responsive.hp('3%'),
            }}>
            <Container
              style={{
                alignItems: 'flex-start',
              }}>
              <MenuItem
                showArrow={true}
                icon={
                  <FileText
                    color={theme.colors.pr}
                    size={theme.icons.sizes.sm}
                  />
                }
                title="Termos de uso"
              />
            </Container>
            <Container
              style={{
                alignItems: 'flex-start',
              }}>
              <MenuItem
                showArrow={true}
                icon={
                  <Cookie color={theme.colors.pr} size={theme.icons.sizes.sm} />
                }
                title="Política de privacidade"
              />
            </Container>
          </Container>
        </Container>
      </SafeAreaView>
    </Background>
  );
};

export default Privacy;
