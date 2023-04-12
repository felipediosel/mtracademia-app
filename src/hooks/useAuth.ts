import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {clearStoredUser} from './useUser';

const useAuth = () => {
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);
  const [isFirstTime, setFirstTime] = useState<boolean>(true);
  const [isSignedIn, setSignedIn] = useState<boolean | undefined>(false);

  useEffect(() => {
    const unsubscribe = auth().onIdTokenChanged(
      async (User: FirebaseAuthTypes.User | null) => {
        setSignedIn(User !== null);

        const user = await AsyncStorage.getItem('user');

        setFirstTime(user === null);

        setIsLoadingAuth(false);
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

export async function sendSignInLinkToEmail(email: string): Promise<void> {
  await AsyncStorage.setItem('email', email);

  return auth().sendSignInLinkToEmail(email, {
    android: {packageName: 'com.mtracademiaapp'},
    handleCodeInApp: true,
    iOS: {bundleId: 'org.reactjs.native.example.MtrAcademiaApp'},
    url: 'https://mtracademiaapp.page.link/VXX6',
  });
}

export function signOut() {
  auth()
    .signOut()
    .then(() => {
      clearStoredUser();
    });
}

export default useAuth;
