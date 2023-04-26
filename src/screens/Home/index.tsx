import React, {useState, useEffect, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';

import {FlatList} from 'react-native';

import * as S from './styles';

import {Background} from '../../components/Background';
import {Container} from '../../components/Container';
import {MenuItem} from '../../components/Menu/MenuItem';
import {
  Binoculars,
  CheckCircle,
  CheckSquare,
  CheckSquareOffset,
  Clock,
  DropHalfBottom,
  Fingerprint,
  Gauge,
  Handshake,
  Square,
  XSquare,
} from 'phosphor-react-native';
import {useTheme} from 'styled-components/native';
import {TextSmall} from '../../components/Texts/TextSmall';
import {HomeSlider} from '../../components/Slider/HomeSlider';

import {ThemeContext} from '../../contexts/theme';
import {getUserPreferences} from '../../hooks/useUserPreferences';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Background style={{justifyContent: 'center'}}>
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
            height: '65%',
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
              width: '100%',
            }}>
            <MenuItem
              icon={
                <Fingerprint
                  color={theme.colors.pr}
                  size={theme.icons.sizes.sm}
                />
              }
              title="Frequência"
            />
            <TextSmall
              style={{
                color: theme.colors.ts,
              }}>
              Confira sua constância nos treinos.
            </TextSmall>
            <S.Item>
              <Container>
                <XSquare size={theme.icons.sizes.sm} color={theme.colors.ts} />
                <TextSmall>Dom</TextSmall>
              </Container>
              <Container>
                <CheckSquareOffset
                  size={theme.icons.sizes.sm}
                  color={theme.colors.pr}
                />
                <TextSmall
                  style={{
                    color: theme.colors.pr,
                  }}>
                  Seg
                </TextSmall>
              </Container>
              <Container>
                <CheckSquareOffset
                  size={theme.icons.sizes.sm}
                  color={theme.colors.pr}
                />
                <TextSmall
                  style={{
                    color: theme.colors.pr,
                  }}>
                  Ter
                </TextSmall>
              </Container>
              <Container>
                <CheckSquareOffset
                  size={theme.icons.sizes.sm}
                  color={theme.colors.pr}
                />
                <TextSmall
                  style={{
                    color: theme.colors.pr,
                  }}>
                  Qua
                </TextSmall>
              </Container>
              <Container>
                <XSquare size={theme.icons.sizes.sm} color={theme.colors.ts} />
                <TextSmall>Qui</TextSmall>
              </Container>
              <Container>
                <Square size={theme.icons.sizes.sm} color={theme.colors.ts} />
                <TextSmall>Sex</TextSmall>
              </Container>
              <Container>
                <Square size={theme.icons.sizes.sm} color={theme.colors.ts} />
                <TextSmall>Sáb</TextSmall>
              </Container>
            </S.Item>
          </Container>
          <Container
            style={{
              alignItems: 'flex-start',
              height: '100%',
              width: '100%',
            }}>
            <MenuItem
              icon={
                <Binoculars
                  color={theme.colors.pr}
                  size={theme.icons.sizes.sm}
                />
              }
              title="Visão Geral"
            />
            <TextSmall
              style={{
                color: theme.colors.ts,
              }}>
              Resumo dos seus dados.
            </TextSmall>
            <HomeSlider />
          </Container>
        </Container>
      </Container>
    </Background>
  );
  /*const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('produto')
      .onSnapshot(querySnapshot => {
        const produtos2: any = [];

        querySnapshot.forEach(documentSnapshot => {
          produtos2.push({
            id: documentSnapshot.data().id,
            title: documentSnapshot.data().descricao,
          });
        });

        setProdutos(produtos2);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <Loading />;
  }

  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
    <S.Item>
      <S.Title>{title}</S.Title>
    </S.Item>
  );

  return (
    <S.Container>
      <FlatList
        style={{marginTop: 20}}
        data={produtos}
        renderItem={({item}: any) => <Item title={item.title} />}
        keyExtractor={(item: any) => item.id}
      />
    </S.Container>
  );*/
};

export default Home;
