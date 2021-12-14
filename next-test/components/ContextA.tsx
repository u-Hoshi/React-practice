import { FC } from 'react'
import { useStateContext } from '../context/StateProvider'

export const ContextA: FC = () => {
  const { toggle, setToggle } = useStateContext()

  return (
    <>
      <button
        className="bg-gray-500 hover:bg-gray-400 px-3 py-2 mb-5 text-white rounded focus:outline-none"
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        change
      </button>
      <p>context A</p>
      <p className="mb-5 text-gray-700" data-testid="toggle-a">
        {toggle ? 'true' : 'false'}
      </p>
    </>
  )
}
