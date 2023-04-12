import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import {PessoaDTO} from './DTO/PessoaDTO';

export async function getPessoaFromId(id: number): Promise<PessoaDTO | null> {
  const QuerySnapshotPessoa = await firestore()
    .collection<PessoaDTO>('pessoa')
    .where('id', '==', id)
    .get();

  if (QuerySnapshotPessoa.size > 0) {
    const DocumentPessoa = QuerySnapshotPessoa.docs.shift();

    if (DocumentPessoa !== undefined) {
      return DocumentPessoa.data();
    }
  }

  return null;
}

export async function getPessoaQuerySnapshotFromEmail(
  email: string,
): Promise<
  FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>
> {
  return firestore()
    .collection<PessoaDTO>('pessoa')
    .where('email', 'in', [email, email.toLocaleLowerCase()])
    .get();
}
