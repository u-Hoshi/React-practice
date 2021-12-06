import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from './features/customCounter/customCounterSlice';

export const Redux = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span data-testid='count-value'> {count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(number | 0))}>
        incrementByAmount
      </button>
      <input
        type='text'
        placeholder='enter'
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
    </div>
  );
};
