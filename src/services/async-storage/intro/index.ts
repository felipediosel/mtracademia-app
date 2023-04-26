import AsyncStorage from '@react-native-async-storage/async-storage';

export async function get(): Promise<boolean | null> {
  return !!(await AsyncStorage.getItem('@MtrAuth:intro'));
}

export function set(): Promise<void> {
  return AsyncStorage.setItem('@MtrAuth:intro', 'showed');
}

export function clean(): Promise<void> {
  return AsyncStorage.removeItem('@MtrAuth:intro');
}
