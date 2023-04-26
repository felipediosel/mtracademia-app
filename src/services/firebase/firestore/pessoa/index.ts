import firestore from '@react-native-firebase/firestore';
import {PessoaDTO} from './dto';
import {getLastVersion} from '../../../../data/Versao';

function collection() {
  return firestore().collection<PessoaDTO>('pessoa');
}

export async function getPessoaFromEmail(
  email: string,
): Promise<PessoaDTO[] | null> {
  const lastVersion = await getLastVersion();

  if (lastVersion) {
    const QuerySnapshot = await collection()
      .where('versao', '==', lastVersion.ref)
      .where('email', 'in', [email, email.toLocaleLowerCase()])
      .get();

    const result: PessoaDTO[] = [];

    if (!QuerySnapshot.empty) {
      QuerySnapshot.forEach(document => {
        result.push(document.data());
      });

      return result;
    }
  }

  return null;
}
