import React, {useState, useEffect} from 'react';
import {Alert, Text} from 'react-native';
import {ActivityIndicator} from '../ActivityIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import * as S from './styles';

export function EmailLinkHandler() {
  const {loading, error} = useEmailLinkEffect();

  if (error) {
    if (error.code === 'auth/invalid-action-code') {
      Alert.alert('Link inválido, expirado ou em uso.');
    }
  }

  return null;
}

const useEmailLinkEffect = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    const handleDynamicLink = async (link: any) => {
      // Check and handle if the link is a email login link
      if (auth().isSignInWithEmailLink(link.url)) {
        setLoading(true);

        try {
          // use the email we saved earlier
          const email = await AsyncStorage.getItem('emailForSignIn');

          if (email) {
            await auth().signInWithEmailLink(email, link.url);
          }

          //Alert.alert(`usuario logado`);

          /* You can now navigate to your initial authenticated screen
            You can also parse the `link.url` and use the `continueurl` param to go to another screen
            The `continueurl` would be the `url` passed to the action code settings */
        } catch (e: any) {
          setError(e);
        } finally {
          setLoading(false);
        }
      }
    };

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

    /* When the app is not running and is launched by a magic link the `onLink`
        method won't fire, we can handle the app being launched by a magic link like this */
    dynamicLinks()
      .getInitialLink()
      .then(link => link && handleDynamicLink(link));

    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  return {error, loading};
};
