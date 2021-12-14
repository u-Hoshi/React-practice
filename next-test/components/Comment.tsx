import { VFC } from 'react'
import { COMMENT } from '../types/Types'

export const Comment: VFC<COMMENT> = ({ id, name, body }) => {
  return (
    <li className="mx-10">
      <p className="">
        {id}
        {'：'}
        {body}
      </p>
      <p className="text-center mt-3 mb-10">
        {'by：'}
        {name}
      </p>
    </li>
  )
}
