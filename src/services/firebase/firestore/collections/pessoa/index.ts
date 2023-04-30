import firestore from '@react-native-firebase/firestore';
import {PessoaDTO} from './dto';
import {getLastVersionReference} from '../versao';

function collection() {
  return firestore().collection<PessoaDTO>('pessoa');
}

export async function onSnapshotId(
  id: number,
  callback: (data: PessoaDTO | undefined) => void,
) {
  return collection()
    .where('versao', '==', await getLastVersionReference())
    .where('id', '==', id)
    .limit(1)
    .onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => doc.data()).shift();

      callback(data);
    });
}

export async function getPessoaFromEmail(
  email: string,
): Promise<PessoaDTO[] | null> {
  const querySnapshot = await collection()
    .where('versao', '==', await getLastVersionReference())
    .where('email', 'in', [email, email.toLocaleLowerCase()])
    .get();

  if (!querySnapshot.empty) {
    const data: PessoaDTO[] = querySnapshot.docs.map(doc => doc.data());

    return data;
  }

  return null;
}
