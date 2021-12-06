import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// テスト用のredux store
import { Provider } from 'react-redux';
import { Redux } from './Redux';
import { configureStore } from '@reduxjs/toolkit';
import customCounterReducer from '../src/features/customCounter/customCounterSlice';

afterEach(() => {
  cleanup();
});

describe('redux intergration Test', () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });
  it('should display value with increment by 1 per click', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('+'));
    expect(screen.getByTestId('count-value')).toHaveTextContent(3);
  });
  it('should display value with decrement by 1 per click', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('count-value')).toHaveTextContent(-2);
  });
  it('should display value with incrementByAmount', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.type(screen.getByPlaceholderText('enter'), '30');
    userEvent.click(screen.getByText('incrementByAmount'));
    expect(screen.getByTestId('count-value')).toHaveTextContent(30);
  });
});
