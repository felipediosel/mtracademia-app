import AsyncStorage from '@react-native-async-storage/async-storage';
import {ColorSchemeName} from 'react-native';

export type UserPreferencesListType = 'theme' | 'notification';

export type UserPreferencesType = {
  theme?: ColorSchemeName;
  notification?: boolean;
};

export type UserType = {
  id: number;
  name: string;
  preferences?: UserPreferencesType;
};

export async function get(): Promise<UserType | null> {
  const user = await AsyncStorage.getItem('@MtrApp:user');

  return user ? JSON.parse(user) : null;
}

export function set(user: UserType): Promise<void> {
  return AsyncStorage.setItem('@MtrApp:user', JSON.stringify(user));
}

export function clean(): Promise<void> {
  return AsyncStorage.removeItem('@MtrApp:user');
}

export async function setPreferences(
  user: UserType | null,
  preferences: UserPreferencesType,
): Promise<void> {
  if (user) {
    const userPreferences = getPreferences(user);

    Object.assign(userPreferences, preferences);

    user.preferences = userPreferences;

    await set(user);

    console.log(user);
  }
}

export function getPreferences(user: UserType | null): UserPreferencesType {
  const userPreferences: UserPreferencesType =
    user && user.preferences ? user.preferences : {};

  return userPreferences;
}
