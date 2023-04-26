import {useEffect, useState} from 'react';
import {AuthContext} from '..';
import * as Auth from '../../../services/firebase/auth';
import * as DynamicLinks from '../../../services/firebase/dynamic-links';
import * as AsyncStorage from '../../../services/async-storage';
import {User} from '../../../services/async-storage/user';
import {Link} from '../../../services/firebase/dynamic-links/link';

export type AuthProviderProps = {
  children?: React.ReactNode | undefined;
};

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [signed, setSigned] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [intro, setIntro] = useState<boolean>(true);

  async function signIn(user: User) {
    await AsyncStorage.User.set(user);
    setUser(user);
  }

  function signOut() {
    Auth.Email.signOut().then(async () => {
      await AsyncStorage.User.clean();
      await AsyncStorage.Intro.clean(); // remover

      setSigned(false);
      setUser(null);
    });
  }

  /* Auth listener */
  useEffect(() => {
    const unsubscribe = Auth.Token.onChange(async token => {
      if (!!token) {
        setSigned(true);

        const user = await AsyncStorage.User.get();
        setUser(user);

        const showed = await AsyncStorage.Intro.get();
        setIntro(!showed);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLink = async (link: Link) => {
    setError(false);
    setLoading(true);

    try {
      await Auth.Email.signIn(link.url);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  /* Dynamic Link listener */
  useEffect(() => {
    const unsubscribe = DynamicLinks.Link.onLink(handleLink);

    return () => unsubscribe();
  }, []);

  /* Initial Link listener */
  useEffect(() => {
    let unsubscribed = false;

    DynamicLinks.Link.onInitialLink(handleLink, unsubscribed);

    return () => {
      unsubscribed = true;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        error,
        signed,
        user,
        intro,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
