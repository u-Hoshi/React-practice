import { FC } from 'react'
import { useStateContext } from '../context/StateProvider'

export const ContextB: FC = () => {
  const { toggle } = useStateContext()

  return (
    <>
      <p>context B</p>
      <p className="mb-5 text-gray-700" data-testid="toggle-b">
        {toggle ? 'true' : 'false'}
      </p>
    </>
  )
}
