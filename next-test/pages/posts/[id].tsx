import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/fetch'
import { POST } from '../../types/Types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { VFC } from 'react'

const PostDetail: VFC<POST> = ({ id, title, body }) => {
  return (
    <Layout title={title}>
      <p className="m-4">
        {'ID：'}
        {id}
      </p>
      <p className="mb-4 text-xl font-bold">{title}</p>
      <p className="mx-10 mb-12">{body}</p>
      <Link href="/blog-page" passHref>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <a data-testid="back-blog">Back to blog-page</a>
        </div>
      </Link>
    </Layout>
  )
}

export default PostDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  //const { post: post } = await getPostData(ctx.params.id as string)
  const post = await getPostData(ctx.params.id as string)
  return {
    props: {
      ...post,
    },
  }
}
