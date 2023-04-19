import {useState, useEffect} from 'react';
import {ColorSchemeName} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useUser from './useUser';

type MenuItem = {
  id: number;
  sequence: number;
};

type userPreferencesIndex = 'theme' | 'notification' | 'welcome' | 'menuOrder';

type UserPreferencesProps = {
  theme?: ColorSchemeName;
  notification?: boolean;
  welcome?: boolean;
  menuOrder?: MenuItem[];
};

const useUserPreferences = () => {
  const [isUserPreferencesIsLoading, setIsUserPreferencesIsLoading] =
    useState<boolean>(true);
  const [userPreferences, setUserPreferences] =
    useState<UserPreferencesProps | null>(null);

  const {isLoading: isUserIsLoading, user} = useUser();

  useEffect(() => {
    AsyncStorage.getItem('userPreferences').then(item => {
      let userPreferencesAS = item ? JSON.parse(item) : null;

      if (userPreferencesAS) {
        if (user) {
          setUserPreferences(userPreferencesAS[user.id]);
        }
      }

      setIsUserPreferencesIsLoading(false);
    });
  }, [user]);

  return {
    isLoading: isUserIsLoading || isUserPreferencesIsLoading,
    userPreferences,
  };
};

export async function storeUserPreferences(
  preferences: UserPreferencesProps,
): Promise<void> {
  let user = await AsyncStorage.getItem('user');
  let userPreferences = await AsyncStorage.getItem('userPreferences');

  let userAS = user ? JSON.parse(user) : null;

  if (userAS) {
    let userPreferencesAS = userPreferences
      ? JSON.parse(userPreferences)
      : null;

    if (userPreferencesAS) {
      if (userPreferencesAS[userAS.id]) {
        let key: userPreferencesIndex;

        for (key in preferences) {
          if (preferences.hasOwnProperty(key)) {
            userPreferencesAS[userAS.id][key] = preferences[key];
          }
        }
      } else {
        userPreferencesAS[userAS.id] = preferences;
      }
    } else {
      userPreferencesAS = {[userAS.id]: preferences};
    }

    await AsyncStorage.setItem(
      'userPreferences',
      JSON.stringify(userPreferencesAS),
    );
  }
}

export async function getUserPreferences(): Promise<UserPreferencesProps | null> {
  let user = await AsyncStorage.getItem('user');
  let userPreferences = await AsyncStorage.getItem('userPreferences');

  let userAS = user ? JSON.parse(user) : null;

  if (userAS) {
    let userPreferencesAS = userPreferences
      ? JSON.parse(userPreferences)
      : null;

    if (userPreferencesAS) {
      return userPreferencesAS[userAS.id];
    }
  }

  return null;
}

export default useUserPreferences;
