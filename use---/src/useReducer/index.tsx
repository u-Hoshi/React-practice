import { useReducer } from 'react';

const initialState = 0;

const reducerFunc = (countState: number, action: string): number => {
  switch (action) {
    case 'increment':
      return countState + 1;
    case 'decrement':
      return countState - 1;
    case 'reset':
      return initialState;
    default:
      return countState;
  }
};

export const UserReducer = () => {
  //作成したreducerFunc関数とcountStateをuseReducerに渡す
  //useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
  const [count, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <>
      <h1>useReducer</h1>
      <p>{count}</p>
      <button onClick={() => dispatch('increment')}>increment</button>
      <button onClick={() => dispatch('decrement')}>decrement</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </>
  );
};
