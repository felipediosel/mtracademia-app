import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

import {FlatList} from 'react-native';

import * as S from './styles';
import Loading from '../../screens/Loading';

export function Home() {
  const [loading, setLoading] = useState(true);
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
  );
}
