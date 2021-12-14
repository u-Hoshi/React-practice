/**
 * @jest-environment jsdom
 */
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { SWRConfig } from 'swr'
import CommentPage from '../pages/comment-page'

const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/comments/?_limit=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            postId: 1,
            id: 1,
            name: 'A',
            email: 'dummy@gmail.com',
            body: 'test body a',
          },
          {
            postId: 2,
            id: 2,
            name: 'B',
            email: 'dummy@gmail.com',
            body: 'test body b',
          },
        ])
      )
    }
  )
)

beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.restoreHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('comment page with useSWR /success+error', () => {
  it('should render the value fetched by uesSWR', async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <CommentPage />
      </SWRConfig>
    )
    expect(await screen.findByText('1：test body a')).toBeInTheDocument()
    expect(screen.getByText('2：test body b')).toBeInTheDocument()
  })
  it('should render error text when fetch failed', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/comments/?_limit=10',
        (req, res, ctx) => {
          return res(ctx.status(400))
        }
      )
    )
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <CommentPage />
      </SWRConfig>
    )
    expect(await screen.findByText('Error!')).toBeInTheDocument()
  })
})
