import AsyncStorage from '@react-native-async-storage/async-storage';

export async function get(): Promise<string | null> {
  return AsyncStorage.getItem('@MtrApp:email');
}

export function set(email: string): Promise<void> {
  return AsyncStorage.setItem('@MtrApp:email', email);
}
