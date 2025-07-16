'use client'
const Posts = ({params}) => {
  return (
    <>
    <h1>Blog:{params.posts[0]}</h1>
    <h1>Post:{params.posts[1]}</h1>
    </>
  )
}

export default Posts;