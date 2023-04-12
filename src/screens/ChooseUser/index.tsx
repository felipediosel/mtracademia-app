import {FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import {Question, User} from 'phosphor-react-native';

import useChooseUser from '../../hooks/useChooseUser';
import {storeUser} from '../../hooks/useUser';

import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {Text} from '../../components/Texts/Text';
import {Item} from '../../components/Item';
import {TextSmall} from '../../components/Texts/TextSmall';

const ChooseUser = (): JSX.Element => {
  const navigation = useNavigation();

  const theme = useTheme();

  const {users} = useChooseUser();

  return (
    <Background style={{justifyContent: 'center'}}>
      <Container
        style={{
          gap: theme.responsive.hp('2%'),
          padding: theme.responsive.wp('20%'),
        }}>
        <Container>
          <Question size={theme.icons.sizes.xl} color={theme.colors.pr} />
        </Container>
        <Container>
          <Text>
            Quem é <Text style={{color: theme.colors.pr}}>você</Text>?
          </Text>
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
              onPress={() => {
                storeUser(user).then(() => {
                  navigation.navigate('Home');
                });
              }}>
              <Item
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <User size={theme.icons.sizes.md} color={theme.colors.pr} />
                <Text>{user.nome}</Text>
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
