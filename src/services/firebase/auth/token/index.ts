import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type Callback = FirebaseAuthTypes.AuthListenerCallback;

export const onChange = (callback: Callback) => {
  return auth().onIdTokenChanged(callback);
};
