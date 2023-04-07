import { Link } from "react-router-dom";

const Post = ({ post }) => {
  // console.log(post)
  return (
    <article className="border mb-2 p-2 hover:bg-slate-100">
      <Link to={`/postpage/${post.id}`}>
        <h1 className="text-2xl">{post.title}</h1>
        <p className="text-xs py-1 text-zinc-400">{post.datetime}</p>
      </Link>
      <p className="text-xl">
        {post.body.length <= 50 ? post.body : post.body.slice(0, 50)}...
      </p>
    </article>
  )
}

export default Post;