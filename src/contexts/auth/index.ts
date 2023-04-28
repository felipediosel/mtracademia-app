import {createContext} from 'react';
import {UserType} from '../../services/async-storage/user';

export type AuthContextData = {
  loading: boolean;
  error: boolean;
  intro: boolean;
  signed: boolean;
  user: UserType | null;
  users: UserType[] | null;
  signIn(user: UserType): Promise<void>;
  signOut(): void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
