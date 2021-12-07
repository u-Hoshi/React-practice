import { GetStaticProps } from 'next'
import { VFC } from 'react'
import { Layout } from '../components/Layout'
import Post from '../components/Post'
import { getAllPostsData } from '../lib/fetch'
import { POST } from '../types/Types'

interface STATICPROPS {
  posts: POST[]
}

const BlogPage: React.FC<STATICPROPS> = ({ posts }) => {
  console.log(posts)
  return (
    <Layout title="blog">
      <p className="text-4xl">Welcome to Blog</p>
      <ul>
        {posts && posts.map((post) => <Post key={post.id} {...post}></Post>)}
      </ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData()
  console.log('posts')
  console.log(posts)
  return {
    props: { posts },
  }
}
