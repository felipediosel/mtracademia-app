import auth from '@react-native-firebase/auth';
import * as AsyncStorage from '../../../async-storage';

export async function signIn(
  emailLink: string,
): Promise<AsyncStorage.User.UserType[] | null> {
  if (auth().isSignInWithEmailLink(emailLink)) {
    const email = await AsyncStorage.Email.get();

    if (email) {
      await auth().signInWithEmailLink(email, emailLink);

      return await AsyncStorage.Users.getUsersFromEmail(email);
    }
  }

  return null;
}

export function signOut() {
  return auth().signOut();
}

export async function sendSignInLink(email: string): Promise<boolean> {
  const usersEmail = await AsyncStorage.Users.getUsersFromEmail(email);

  if (usersEmail) {
    await AsyncStorage.Email.set(email);

    await auth().sendSignInLinkToEmail(email, {
      handleCodeInApp: true,
      android: {packageName: 'com.mtracademiaapp'},
      iOS: {bundleId: 'org.reactjs.native.example.MtrAcademiaApp'},
      url: 'https://mtracademiaapp.page.link/VXX6',
    });

    return true;
  }

  return false;
}
