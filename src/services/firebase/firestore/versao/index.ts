import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {VersaoDTO} from './dto';

function collection() {
  return firestore().collection<VersaoDTO>('versao');
}

export async function getLastVersionReference(): Promise<FirebaseFirestoreTypes.DocumentReference | null> {
  const QuerySnapshot = await collection()
    .orderBy('datahora', 'desc')
    .limit(1)
    .get();

  if (!QuerySnapshot.empty) {
    const DocumentData = QuerySnapshot.docs.shift();

    if (DocumentData !== undefined) {
      return DocumentData.ref;
    }
  }

  return null;
}
