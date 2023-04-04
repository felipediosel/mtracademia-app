import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserProps = {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  email: string;
  celular: string;
  endereco: string;
  bairro: string;
  cidade: string;
};

const useUser = () => {
  const [isUserIsLoading, setIsUserIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('user').then(item => {
      setIsUserIsLoading(false);

      const userAsyncStorage = item ? JSON.parse(item) : null;

      if (userAsyncStorage) {
        setUser(userAsyncStorage);
      }
    });
  }, []);

  return {
    isLoading: isUserIsLoading,
    user,
    signIn,
    signOut,
  };
};

export const signIn = (user: UserProps): Promise<void> => {
  return AsyncStorage.setItem('user', JSON.stringify(user));
};

export const signOut = (): void => {
  AsyncStorage.removeItem('user');
  AsyncStorage.removeItem('users');
};

export default useUser;
