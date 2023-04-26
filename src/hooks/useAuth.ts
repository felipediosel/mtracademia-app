import {useEffect, useState, useContext} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {clearStoredUser} from './useUser';

import {AuthContext, AuthContextData} from '../contexts/auth/index';

const useAuth = (): AuthContextData => {
  const auth = useContext(AuthContext);

  if (auth === null) {
    throw new Error(
      'No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.',
    );
  }

  return auth;
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
