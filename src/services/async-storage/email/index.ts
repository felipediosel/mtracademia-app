import AsyncStorage from '@react-native-async-storage/async-storage';

export async function get(): Promise<string | null> {
  return AsyncStorage.getItem('email');
}

export function set(email: string): Promise<void> {
  return AsyncStorage.setItem('@MtrAuth:email', email);
}
