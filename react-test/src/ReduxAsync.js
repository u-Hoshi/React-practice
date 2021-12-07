import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
  selectUsername,
  fetchDummy,
  fetchJSON,
} from './features/customCounter/customCounterSlice';

export const ReduxAsync = () => {
  const count = useSelector(selectCount);
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();
  return (
    <div>
      <span data-testid='count-value'>{count}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>fetchDummy</button>
      {username && <h1>{username}</h1>}
      <button onClick={() => dispatch(fetchJSON())}>fetchJSON</button>
    </div>
  );
};
