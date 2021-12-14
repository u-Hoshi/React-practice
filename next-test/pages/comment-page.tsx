import axios from 'axios'
import useSWR from 'swr'
import { Comment } from '../components/Comment'
import { Layout } from '../components/Layout'
import { COMMENT } from '../types/Types'

const axiosFetcher = async () => {
  const result = await axios.get<COMMENT[]>(
    'https://jsonplaceholder.typicode.com/comments/?_limit=10'
  )
  return result.data
}

const CommentPage: React.FC = () => {
  const { data: comments, error } = useSWR('axiosFetch', axiosFetcher)
  // uesSWR(キー名(任意),実際のfetch処理)

  if (error) return <span>Error!</span>
  return (
    <Layout title="Comment">
      <p className="text-4xl">Welcome to Comment</p>
      <ul>
        {comments &&
          comments.map((comment) => (
            <Comment key={comment.id} {...comment}></Comment>
          ))}
      </ul>
    </Layout>
  )
}
export default CommentPage
