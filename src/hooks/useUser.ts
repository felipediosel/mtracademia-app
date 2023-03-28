import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isUserIsLoading, setIsUserIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(item => {
        const userAsyncStorage = item ? JSON.parse(item) : null;

        setUser(userAsyncStorage);
      })
      .finally(() => {
        setIsUserIsLoading(false);
      });
  }, []);

  const signIn = (pessoa: Object): Promise<void> => {
    return AsyncStorage.setItem('user', JSON.stringify(pessoa));
  };

  const signOut = (): Promise<void> => {
    return AsyncStorage.removeItem('user');
  };

  return {
    isLoading: isUserIsLoading,
    user,
    signIn,
    signOut,
  };
};

export default useUser;
