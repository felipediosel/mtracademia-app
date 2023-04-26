import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import {VersaoDTO} from './DTO/VersaoDTO';

export async function getLastVersion(): Promise<FirebaseFirestoreTypes.DocumentData | null> {
  const QuerySnapshot = await firestore()
    .collection<VersaoDTO>('versao')
    .orderBy('datahora', 'desc')
    .limit(1)
    .get();

  if (!QuerySnapshot.empty) {
    const DocumentData = QuerySnapshot.docs.shift();

    if (DocumentData !== undefined) {
      return DocumentData;
    }
  }

  return null;
}
