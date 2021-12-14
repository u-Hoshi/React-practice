/**
 * @jest-environment jsdom
 */
import { cleanup, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { initTestHelpers } from 'next-page-tester'
import { getPage } from 'next-page-tester'
import { SWRConfig } from 'swr'
import { TASK } from '../types/Types'
import TaskPage from '../pages/task-page'

initTestHelpers()
const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: 'task a',
            completed: true,
          },
          {
            userId: 2,
            id: 2,
            title: 'task b',
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

describe('Todos page /useSWR', () => {
  let staticProps: TASK[]
  staticProps = [
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
  ]
  it('should render CSF data after pre-rendered data', async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <TaskPage staticTasks={staticProps} />
      </SWRConfig>
    )
    expect(await screen.findByText('static task c')).toBeInTheDocument()
    expect(screen.getByText('static task d')).toBeInTheDocument()
    expect(await screen.findByText('task a')).toBeInTheDocument()
    expect(screen.getByText('task b')).toBeInTheDocument()
  })
  it('should render error text when fetch failed', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/todos/?_limit=10',
        (req, res, ctx) => {
          return res(ctx.status(400))
        }
      )
    )
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <TaskPage staticTasks={staticProps} />
      </SWRConfig>
    )
    expect(await screen.findByText('Error!')).toBeInTheDocument()
  })
})
