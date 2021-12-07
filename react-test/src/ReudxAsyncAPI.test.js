import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import customCountReducer from '../src/features/customCounter/customCounterSlice';

import { ReduxAsync } from './ReduxAsync';

const server = setupServer(
  rest.get('https://jsonplaceholder/typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: 'Bread dummy' }));
  })
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

describe('Redux async api mocking', () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCountReducer,
      },
    });
  });
  it('fetch success should display username in h3 tag', async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    expect(screen.queryByRole('heading')).toBeNull();
    userEvent.click(screen.getByText('fetchJSON'));
    expect(await screen.findByText('Bret')).toBeInTheDocument();
  });
  it('fetch success should display anonymous in h3 tag', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users/1',
        (req, res, ctx) => {
          return res(ctx.status(400));
        }
      )
    );
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    expect(screen.queryByRole('heading')).toBeNull();
    userEvent.click(screen.getByText('fetchJSON'));
    expect(await screen.findByText('anonymous')).toBeInTheDocument();
  });
});
