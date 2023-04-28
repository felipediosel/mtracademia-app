import {FlatList, TouchableOpacity} from 'react-native';

import {useTheme} from 'styled-components';
import {Question, User} from 'phosphor-react-native';
import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {Text} from '../../components/Texts/Text';
import {Item} from '../../components/Itens/Item';
import {TextSmall} from '../../components/Texts/TextSmall';
import {TextLarge} from '../../components/Texts/TextLarge';
import useAuth from '../../contexts/auth/hooks/useAuth';

const ChooseUser = (): JSX.Element => {
  const theme = useTheme();

  const {users, signIn} = useAuth();

  return (
    <Background style={{justifyContent: 'center'}}>
      <Container
        style={{
          height: theme.responsive.hp('5%'),
        }}></Container>
      <Container
        style={{
          padding: theme.responsive.wp('20%'),
          height: theme.responsive.hp('25%'),
        }}>
        <Question size={theme.icons.sizes.xl} color={theme.colors.pr} />
        <Container>
          <TextLarge>
            Quem é <TextLarge style={{color: theme.colors.pr}}>você</TextLarge>?
          </TextLarge>
          <TextSmall style={{color: theme.colors.ts}}>
            Encontramos mais de uma pessoa para o mesmo e-mail. Selecione abaixo
            com qual usuário deseja continuar:
          </TextSmall>
        </Container>
      </Container>
      <FlatList
        data={users}
        renderItem={({item: user}: any) => (
          <>
            <TouchableOpacity
              onPress={async () => {
                signIn(user);
              }}>
              <Item
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <>
                  <User size={theme.icons.sizes.md} color={theme.colors.pr} />
                  <Text>{user.name}</Text>
                </>
              </Item>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </Background>
  );
};

export default ChooseUser;
