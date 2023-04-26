import auth from '@react-native-firebase/auth';
import * as AsyncStorage from '../../../async-storage';

export async function signIn(emailLink: string) {
  if (auth().isSignInWithEmailLink(emailLink)) {
    const email = await AsyncStorage.Email.get();

    if (email) {
      await auth().signInWithEmailLink(email, emailLink);
    }
  }
}

export function signOut() {
  return auth().signOut();
}

export async function sendSignInLink(email: string): Promise<void> {
  await AsyncStorage.Email.set(email);

  return auth().sendSignInLinkToEmail(email, {
    handleCodeInApp: true,
    android: {packageName: 'com.mtracademiaapp'},
    iOS: {bundleId: 'org.reactjs.native.example.MtrAcademiaApp'},
    url: 'https://mtracademiaapp.page.link/VXX6',
  });
}
