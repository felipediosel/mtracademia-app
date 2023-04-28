import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Firestore from '../../firebase/firestore';
import {UserType} from '../user';

export async function get(): Promise<UserType[] | null> {
  const user = await AsyncStorage.getItem('@MtrApp:users');

  return user ? JSON.parse(user) : null;
}

export function set(user: UserType[]): Promise<void> {
  return AsyncStorage.setItem('@MtrApp:users', JSON.stringify(user));
}

export function clean(): Promise<void> {
  return AsyncStorage.removeItem('@MtrApp:users');
}

export async function getUsersFromEmail(
  email: string,
): Promise<UserType[] | null> {
  const pessoaEmail = await Firestore.Pessoa.getPessoaFromEmail(email);

  if (pessoaEmail) {
    const users: UserType[] = [];

    pessoaEmail.forEach(pessoa => {
      users.push({
        id: pessoa.id,
        name: pessoa.nome,
      });
    });

    return users;
  }

  return null;
}
