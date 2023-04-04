import {useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Question, User} from 'phosphor-react-native';

import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import useChooseUser from '../../hooks/useChooseUser';
import {signIn} from '../../hooks/useUser';

import {Loading} from '../../screens/Loading';

import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {TextExtraLarge} from '../../components/Texts/TextExtraLarge';
import {Text} from '../../components/Texts/Text';
import {Item} from '../../components/Item';
import {TextSmall} from '../../components/Texts/TextSmall';

export function ChooseUser() {
  const navigation = useNavigation();

  const theme = useTheme();

  const {users, isChooseUser, isLoading} = useChooseUser();

  useEffect(() => {
    if (!isLoading) {
      if (!isChooseUser) {
        navigation.navigate('Routes');
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Background style={{justifyContent: 'center'}}>
      <Container
        style={{
          gap: theme.responsive.hp('2%'),
          padding: theme.responsive.wp('13%'),
        }}>
        <Container>
          <Question size={theme.icons.sizes.lg} color={theme.colors.pr} />
          <TextExtraLarge>Eeih.</TextExtraLarge>
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
                signIn(user).then(() => {
                  navigation.navigate('Routes');
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
}
