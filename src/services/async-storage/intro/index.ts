import AsyncStorage from '@react-native-async-storage/async-storage';

export async function get(): Promise<boolean | null> {
  return !!(await AsyncStorage.getItem('@MtrApp:intro'));
}

export function set(): Promise<void> {
  return AsyncStorage.setItem('@MtrApp:intro', 'showed');
}

export function clean(): Promise<void> {
  return AsyncStorage.removeItem('@MtrApp:intro');
}
