import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type isUser = {
  modalUser: {
    1: boolean;
    2: boolean;
    3: boolean;
  };
  displayUser: {
    1: boolean;
    2: boolean;
    3: boolean;
  };
};

const initialState: isUser = {
  modalUser: {
    1: false,
    2: false,
    3: false,
  },
  displayUser: {
    1: false,
    2: false,
    3: false,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setModalUser: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        ...action,
      };
    },
    setDisplayUser: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        ...action,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModalUser, setDisplayUser } = userSlice.actions;

export default userSlice.reducer;
