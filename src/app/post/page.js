async function getPosts (){
    let postData = await fetch('https://jsonplaceholder.typicode.com/posts')
    postData = await postData.json();
    return postData;
}
const Post = async () => {
    let posts = await getPosts();
  return (
    <>
        <h2>Posts | Fetch Data with API in server Side Components</h2>
        {
            posts.map((post)=> <h4 key={post.id}>{post.id}) Post Title:{post.title}</h4>)
        }
    </>
  )
}

export default Post;