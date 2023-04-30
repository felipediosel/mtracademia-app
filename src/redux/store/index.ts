import {configureStore} from '@reduxjs/toolkit';
import {reducerUser} from '../features/user';
import {reducerVersion} from './../features/version';

export const store = configureStore({
  reducer: {
    version: reducerVersion,
    user: reducerUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
