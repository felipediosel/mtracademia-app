import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

interface UserDataState {
  cpf: string;
  rg: string;
  endereco: string;
  celular: string;
  email: string;
}

interface UserState {
  data: UserDataState;
}

export const initialState: UserState = {
  data: {
    cpf: '---',
    rg: '---',
    endereco: '---',
    celular: '---',
    email: '---',
  },
};

export const sliceUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<UserDataState>) => {
      state.data = action.payload;
    },
    setDataDefault: state => {
      state.data = initialState.data;
    },
  },
});

export const actionsUser = sliceUser.actions;
export const selectUser = (state: RootState) => state.user;
export const reducerUser = sliceUser.reducer;
