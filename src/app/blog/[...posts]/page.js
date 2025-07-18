
const Posts = ({params}) => {
  return (
    <>
    <h1>Blog:{params.posts[0]}</h1>
    <h1>Post:{params.posts[1]}</h1>
    </>
  )
}

export default Posts;

export async function generateStaticParams() {
  return [
    { posts: ['blog1', 'post1'] },
    { posts: ['blog2', 'post2'] },
    { posts: ['category', 'nested'] }
  ];
}