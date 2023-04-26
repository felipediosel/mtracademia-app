import {useContext} from 'react';

import {AuthContext, AuthContextData} from '../index';

const useAuth = (): AuthContextData => {
  const auth = useContext(AuthContext);

  if (auth === null) {
    throw new Error('AuthProvider not found.');
  }

  return auth;
};

export default useAuth;
