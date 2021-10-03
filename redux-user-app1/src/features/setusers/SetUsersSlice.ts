import { isUser, isUserType } from './../../types/isUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: isUserType = {
  displayUser: {
    1: true,
    2: false,
    3: false,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDisplayUser: (state, { payload }: PayloadAction<isUser>) => {
      return { ...state, displayUser: payload };
    },
  },
});

// action creatorsをエクスポート
export const { setDisplayUser } = userSlice.actions;

//reducerをエクスポート
export default userSlice.reducer;
