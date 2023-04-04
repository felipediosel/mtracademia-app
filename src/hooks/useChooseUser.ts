import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useUser, {signIn, UserProps} from '../hooks/useUser';

const useChooseUser = () => {
  const {isLoading: isUserIsLoading, user} = useUser();

  const [users, setUsers] = useState<UserProps[]>([]);
  const [chooseUser, setChooseUser] = useState<boolean>(false);
  const [isChooseUserIsLoading, setIsChooseUserIsLoading] =
    useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem('users')
      .then(item => {
        const usersItem = item ? JSON.parse(item) : [];

        if (usersItem.length > 1) {
          setChooseUser(true);
        } else {
          signIn(usersItem.shift()).then(() => {
            setChooseUser(false);
          });
        }

        setUsers(usersItem);
      })
      .finally(() => {
        setIsChooseUserIsLoading(false);
      });
  }, []);

  return {
    users,
    isChooseUser: chooseUser && !user,
    isLoading: isChooseUserIsLoading || isUserIsLoading,
  };
};

export default useChooseUser;
