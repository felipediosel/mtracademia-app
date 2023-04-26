import {createContext} from 'react';
import {User} from '../../services/async-storage/user';

export type AuthContextData = {
  loading: boolean;
  error: boolean;
  signed: boolean;
  user: User | null;
  intro: boolean;
  signIn(user: User): Promise<void>;
  signOut(): void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
