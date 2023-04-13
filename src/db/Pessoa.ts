import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import {PessoaDTO} from './DTO/PessoaDTO';
import {getLastVersion} from './Versao';

export async function getPessoaFromId(id: number): Promise<PessoaDTO | null> {
  const lastVersion = await getLastVersion();

  if (lastVersion) {
    const QuerySnapshot = await firestore()
      .collection<PessoaDTO>('pessoa')
      .where('versao', '==', lastVersion.ref)
      .where('id', '==', id)
      .limit(1)
      .get();

    if (!QuerySnapshot.empty) {
      const DocumentData = QuerySnapshot.docs.shift();

      if (DocumentData !== undefined) {
        return DocumentData.data();
      }
    }
  }

  return null;
}

export async function getPessoaQuerySnapshotFromEmail(
  email: string,
): Promise<FirebaseFirestoreTypes.QuerySnapshot> {
  const lastVersion = await getLastVersion();

  return firestore()
    .collection<PessoaDTO>('pessoa')
    .where('versao', '==', lastVersion ? lastVersion.ref : null)
    .where('email', 'in', [email, email.toLocaleLowerCase()])
    .get();
}
