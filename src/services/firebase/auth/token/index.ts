import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type Callback = FirebaseAuthTypes.AuthListenerCallback;
export type User = FirebaseAuthTypes.User | null;

export const onChange = (callback: Callback) => {
  return auth().onIdTokenChanged(callback);
};
