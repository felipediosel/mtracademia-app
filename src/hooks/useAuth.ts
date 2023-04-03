import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = () => {
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);
  const [isFirstTime, setFirstTime] = useState<boolean>(true);
  const [isSignedIn, setSignedIn] = useState<boolean | undefined>(false);

  useEffect(() => {
    const unsubscribe = auth().onIdTokenChanged(
      async (User: FirebaseAuthTypes.User | null) => {
        setIsLoadingAuth(false);
        setSignedIn(User !== null);

        const user = await AsyncStorage.getItem('user');

        setFirstTime(user === null);
      },
    );

    return () => unsubscribe();
  }, []);

  return {
    isLoading: isLoadingAuth,
    isFirstTime,
    isSignedIn,
  };
};

export default useAuth;
