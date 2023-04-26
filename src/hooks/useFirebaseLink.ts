import {useCallback, useEffect, useState} from 'react';

import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';

import AsyncStorage from '@react-native-async-storage/async-storage';

import useSignIn from './useSignin';

const useFirebaseLink = (): [boolean, boolean] => {
  const [onSignIn, isLoading, isError] = useSignIn();
  const [isSignInError, setSignInError] = useState<boolean>(false);

  /*const handleDynamicLink = useCallback<
    (link: FirebaseDynamicLinksTypes.DynamicLink) => void
  >(
    async link => {
      setSignInError(false);

      try {
        const email = await AsyncStorage.getItem('email');

        onSignIn(link.url, email);
      } catch (error) {
        setSignInError(true);
      }
    },
    [onSignIn],
  );

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

    return () => {
      unsubscribe();
    };
  }, [handleDynamicLink]);

  useEffect(() => {
    let unsubscribed = false;

    async function getInitialLink() {
      const initialLink = await dynamicLinks().getInitialLink();

      if (initialLink && !unsubscribed) {
        handleDynamicLink(initialLink);
      }
    }

    getInitialLink();

    return () => {
      unsubscribed = true;
    };
  }, []);*/

  return [isLoading, isError || isSignInError];
};

export default useFirebaseLink;
