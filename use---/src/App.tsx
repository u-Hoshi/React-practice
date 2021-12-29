import React from 'react';
import './App.css';
import { Reactmemo } from './Reactmemo';
import { UserReducer } from './useReducer';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Reactmemo />
      <UserReducer />
    </div>
  );
}

export default App;
