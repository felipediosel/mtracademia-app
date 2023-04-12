import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getPessoaFromId} from '../db/Pessoa';
import {PessoaDTO} from '../db/DTO/PessoaDTO';

export type UserProps = {
  id: number;
  nome: string;
};

const useUser = () => {
  const [isUserIsLoading, setIsUserIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserProps | null>(null);

  const [isUserDataIsLoading, setIsUserDataIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<PessoaDTO | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('user').then(item => {
      let userAS = item ? JSON.parse(item) : null;

      if (userAS) {
        getPessoaFromId(userAS.id).then((Pessoa: PessoaDTO | null) => {
          setUserData(Pessoa);
          setIsUserDataIsLoading(false);
        });

        setUser(userAS);
        setIsUserIsLoading(false);
      } else {
        setIsUserIsLoading(false);
        setIsUserDataIsLoading(false);
      }
    });
  }, []);

  return {
    isLoading: isUserIsLoading || isUserDataIsLoading,
    user,
    userData,
  };
};

export function storeUser(user: UserProps[]): Promise<void> {
  return AsyncStorage.setItem('user', JSON.stringify(user));
}

export async function storeUsers(users: UserProps[]) {
  await AsyncStorage.setItem('users', JSON.stringify(users));
}

export function clearStoredUser(): void {
  AsyncStorage.removeItem('user');
  AsyncStorage.removeItem('users');
}

export default useUser;
