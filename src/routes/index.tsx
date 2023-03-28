import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import useChooseUser from '../hooks/useChooseUser';

import {Loading} from '../screens/Loading';
import {ChooseUser} from '../screens/ChooseUser';
import {TabRoutes} from './tab.routes';
import Login from '../screens/Login';

export function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const {isChooseUser, isLoading: isChooseUserIsLoading} = useChooseUser();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(response => {
      setUser(response);
      setIsLoading(false);
    });

    return subscriber;
  }, []);

  if (isLoading || isChooseUserIsLoading) {
    return <Loading />;
  }

  if (isChooseUser) {
    return <ChooseUser />;
  }

  return <>{user ? <TabRoutes /> : <Login />}</>;
}
