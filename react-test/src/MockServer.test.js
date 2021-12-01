import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MockServer from './MockServer';

// resとctxを使ってgetメソッドのレスポンのjsonのオブジェクトを定義
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: 'Bred dummy' }));
  })
);

beforeAll(() => server.listen()); // beforeAllはこのファイルで1番最初に一回だけ実行される
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close()); // afterAllは最後に一回だけ実行される

describe('Mocking API', () => {
  it('Fetch Success should display fetched data correctly and button disable', async () => {
    render(<MockServer />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText('Bred dummy')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  it('Fetch Failure should display error msg, no render heading and button able', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users/1',
        (req, res, ctx) => {
          return res(ctx.status(400));
        }
      )
    );
    render(<MockServer />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByTestId('error')).toHaveTextContent(
      'Fetching failed'
    );
    expect(screen.queryByRole('heading')).toBeNull();
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });
});
