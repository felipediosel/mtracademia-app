import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

interface VersionState {
  lastsync: string;
}

export const initialState: VersionState = {
  lastsync: '---',
};

export const sliceVersion = createSlice({
  name: 'version',
  initialState,
  reducers: {
    setLastSync: (state, action: PayloadAction<string>) => {
      state.lastsync = action.payload;
    },
  },
});

export const {setLastSync} = sliceVersion.actions;
export const selectVersion = (state: RootState) => state.version;
export const reducerVersion = sliceVersion.reducer;
