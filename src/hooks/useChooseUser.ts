import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useUser from '../hooks/useUser';

const useChooseUser = () => {
  const {isLoading: isUserIsLoading, user, signIn} = useUser();
  const [pessoas, setPessoas] = useState([]);
  const [chooseUser, setChooseUser] = useState(false);
  const [isChooseUserIsLoading, setIsChooseUserIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('pessoas')
      .then(item => {
        const pessoasAsyncStorage = item ? JSON.parse(item) : [];

        if (pessoasAsyncStorage.length > 1) {
          setChooseUser(true);
        } else {
          signIn(pessoasAsyncStorage.shift()).then(() => {
            setChooseUser(false);
          });
        }

        setPessoas(pessoasAsyncStorage);
      })
      .finally(() => {
        setIsChooseUserIsLoading(false);
      });
  }, []);

  return {
    pessoas,
    isChooseUser: chooseUser && !user,
    isLoading: isChooseUserIsLoading || isUserIsLoading,
  };
};

export default useChooseUser;
