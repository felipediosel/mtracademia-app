import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import useChooseUser from '../../hooks/useChooseUser';
import useUser from '../../hooks/useUser';

import {Loading} from '../../screens/Loading';

import {FlatList, TouchableOpacity} from 'react-native';

import {Question, User} from 'phosphor-react-native';

import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {TextExtraLarge} from '../../components/Texts/TextExtraLarge';
import {Text} from '../../components/Texts/Text';
import {Item} from '../../components/Item';

export function ChooseUser() {
  const navigation = useNavigation();

  const theme = useTheme();

  const {pessoas, isLoading} = useChooseUser();

  const {signIn} = useUser();

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
          <Question size={33} weight={'fill'} color={theme.colors.pr} />
          <TextExtraLarge>Eeih.</TextExtraLarge>
        </Container>
        <Text>
          Quem é <Text style={{color: theme.colors.pr}}>você</Text>?
        </Text>
        <Text style={{color: theme.colors.ts}}>
          Encontramos mais de uma pessoa para o mesmo e-mail. Selecione abaixo
          com qual usuário deseja continuar:
        </Text>
      </Container>
      <FlatList
        data={pessoas}
        renderItem={({item: pessoa}: any) => (
          <>
            <TouchableOpacity
              onPress={() => {
                signIn(pessoa).then(() => {
                  navigation.navigate('Routes');
                });
              }}>
              <Item
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <User size={33} weight={'bold'} color={theme.colors.pr} />
                <Text>{pessoa.nome}</Text>
              </Item>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </Background>
  );
}
