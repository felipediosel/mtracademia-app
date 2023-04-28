import {useEffect, useState} from 'react';
import {AuthContext} from '..';
import * as Auth from '../../../services/firebase/auth';
import * as DynamicLinks from '../../../services/firebase/dynamic-links';
import * as AsyncStorage from '../../../services/async-storage';

export type AuthProviderProps = {
  children?: React.ReactNode | undefined;
};

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [intro, setIntro] = useState<boolean>(true);
  const [user, setUser] = useState<AsyncStorage.User.UserType | null>(null);
  const [users, setUsers] = useState<AsyncStorage.User.UserType[] | null>(null);

  async function signIn(user: AsyncStorage.User.UserType) {
    await AsyncStorage.User.set(user);
    setUser(user);
  }

  function signOut() {
    setLoading(true);

    Auth.Email.signOut().then(async () => {
      await cleanStoragedData();
      setLoading(false);
    });
  }

  const loadStoragedData = async () => {
    setUser(await AsyncStorage.User.get());
    setUsers(await AsyncStorage.Users.get());
    setIntro(!(await AsyncStorage.Intro.get()));
  };

  const cleanStoragedData = async () => {
    await AsyncStorage.User.clean();
    await AsyncStorage.Users.clean();
    await AsyncStorage.Intro.clean(); // remover

    setUser(null);
    setUsers(null);
    setIntro(true); // remover
  };

  const handleDynamicLink = async (Link: DynamicLinks.Link.Link) => {
    setLoading(true);
    setError(false);

    try {
      const usersEmail = await Auth.Email.signIn(Link.url);

      if (usersEmail) {
        await AsyncStorage.Users.set(usersEmail);
        setUsers(usersEmail);

        if (usersEmail.length === 1) {
          const firstUser = usersEmail.shift();

          if (firstUser) {
            signIn(firstUser);
          }
        }
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await loadStoragedData();
      setLoading(false);
    })();
  }, []);

  /* Dynamic Link listener */
  useEffect(() => {
    const unsubscribe = DynamicLinks.Link.onLink(handleDynamicLink);

    return () => unsubscribe();
  }, []);

  /* Initial Link listener */
  useEffect(() => {
    let unsubscribed = false;

    DynamicLinks.Link.onInitialLink(handleDynamicLink, unsubscribed);

    return () => {
      unsubscribed = true;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        error,
        intro,
        signed: !!user,
        user,
        users,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
