import Link from 'next/link'
import { VFC } from 'react'
import { POST } from '../types/Types'

const Post: VFC<POST> = ({ id, title }) => {
  return (
    <div>
      <span>{id}</span>
      <Link href={`/posts/${id}`}>
        <a className="cursor-pointer border-b border-gray-500 hover:border-gray-300">
          {title}
        </a>
      </Link>
    </div>
  )
}

export default Post
