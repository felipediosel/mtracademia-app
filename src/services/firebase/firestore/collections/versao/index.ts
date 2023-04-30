import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {VersaoDTO} from './dto';

function collection() {
  return firestore().collection<VersaoDTO>('versao');
}

export function onSnapshotLast(
  callback: (data: VersaoDTO | undefined) => void,
) {
  return collection()
    .orderBy('datahora', 'desc')
    .limit(1)
    .onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => doc.data()).shift();

      callback(data);
    });
}

export async function getLastVersionReference(): Promise<FirebaseFirestoreTypes.DocumentReference<VersaoDTO> | null> {
  const querySnapshot = await collection()
    .orderBy('datahora', 'desc')
    .limit(1)
    .get();

  if (!querySnapshot.empty) {
    const documentData = querySnapshot.docs.shift();

    if (documentData !== undefined) {
      return documentData.ref;
    }
  }

  return null;
}

export async function getLastVersion(): Promise<VersaoDTO | null> {
  const documentReference = await getLastVersionReference();

  if (documentReference) {
    const documentData = await documentReference.get();

    if (documentData) {
      const data = documentData.data();

      return !!data ? data : null;
    }
  }

  return null;
}
