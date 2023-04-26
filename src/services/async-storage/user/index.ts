import AsyncStorage from '@react-native-async-storage/async-storage';
import {ColorSchemeName} from 'react-native';

export type UserPreferences = {
  theme?: ColorSchemeName;
  notification?: boolean;
};

export type User = {
  id: number;
  name: string;
  preferences?: UserPreferences;
};

export async function get(): Promise<User | null> {
  const user = await AsyncStorage.getItem('user');

  return user ? JSON.parse(user) : null;
}

export function set(user: User): Promise<void> {
  return AsyncStorage.setItem('@MtrAuth:user', JSON.stringify(user));
}

export function clean(): Promise<void> {
  return AsyncStorage.removeItem('user');
}
