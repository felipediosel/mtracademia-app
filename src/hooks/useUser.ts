import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signIn = (pessoa: Object): Promise<void> => {
  return AsyncStorage.setItem('user', JSON.stringify(pessoa));
};

const signOut = (): void => {
  AsyncStorage.removeItem('user');
  AsyncStorage.removeItem('pessoas');
};

const useUser = () => {
  const [isUserIsLoading, setIsUserIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<object | null>(null);

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

export default useUser;
