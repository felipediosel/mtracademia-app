import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useUser, {storeUser, UserProps} from '../hooks/useUser';

const useChooseUser = () => {
  const {isLoading: isUserIsLoading, user} = useUser();

  const [users, setUsers] = useState<UserProps[]>([]);
  const [chooseUser, setChooseUser] = useState<boolean>(false);
  const [isChooseUserIsLoading, setIsChooseUserIsLoading] =
    useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem('users').then(item => {
      const usersAS = item ? JSON.parse(item) : [];

      if (usersAS) {
        if (usersAS.length > 1) {
          setChooseUser(true);
          setIsChooseUserIsLoading(false);
        } else {
          let firstUser = usersAS.shift();

          if (firstUser) {
            storeUser(firstUser).then(() => {
              setChooseUser(false);
              setIsChooseUserIsLoading(false);
            });
          } else {
            setIsChooseUserIsLoading(false);
          }
        }

        setUsers(usersAS);
      } else {
        setIsChooseUserIsLoading(false);
      }
    });
  }, []);

  return {
    users,
    isChooseUser: chooseUser && !user,
    isLoading: isChooseUserIsLoading || isUserIsLoading,
  };
};

export default useChooseUser;
