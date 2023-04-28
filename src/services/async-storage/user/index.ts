import AsyncStorage from '@react-native-async-storage/async-storage';
import {ColorSchemeName} from 'react-native';

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
