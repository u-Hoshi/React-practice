import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
  mode: 0,
  username: '',
};

const sleep = msec => {
  const start = new Date();
  while (new Date() - start < msec);
};

export const fetchDummy = createAsyncThunk('fetch/dummy', async num => {
  await sleep(2000);
  return num;
});

export const fetchJSON = createAsyncThunk('fetch/api', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  const { username } = res.data;
  return username;
});

export const customCounterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      switch (state.mode) {
        case 0:
          state.value += 1;
          break;
        case 1:
          state.value += 100;
          break;
        case 2:
          state.value += 10000;
          break;
        default:
          break;
      }
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      switch (state.mode) {
        case 0:
          state.value += action.payload;
          break;
        case 1:
          state.value += action.payload * 100;
          break;
        case 2:
          state.value += action.payload * 10000;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchDummy.fulfilled,
      (state, action) => (state.value = 100 + action.payload)
    );
    builder.addCase(
      fetchDummy.rejected,
      (state, action) => (state.value = 100 - action.payload)
    );
    builder.addCase(
      fetchDummy.fulfilled,
      (state, action) => (state.username = action.payload)
    );
  },
});

export const { increment, decrement, incrementByAmount } =
  customCounterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = state => state.customCounter.value;
export const selectUsername = state => state.customCounter.usernamer;

export default customCounterSlice.reducer;
