/**
 * @jest-environment jsdom
 */
import { cleanup, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { initTestHelpers } from 'next-page-tester'
import { getPage } from 'next-page-tester'

initTestHelpers()
const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            userId: 3,
            id: 3,
            title: 'static task c',
            completed: true,
          },
          {
            userId: 4,
            id: 4,
            title: 'static task d',
            completed: false,
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
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('Todo page /getstaticprops', () => {
  it('should render the listen', async () => {
    const { page } = await getPage({
      route: '/task-page',
    })
    render(page)
    expect(await screen.findByText('Welcome to Task')).toBeInTheDocument()
    expect(screen.getByText('static task c')).toBeInTheDocument()
    expect(screen.getByText('static task d')).toBeInTheDocument()
  })
})
