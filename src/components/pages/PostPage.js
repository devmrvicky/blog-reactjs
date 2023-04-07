import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  // console.log(id)
  const post = posts.find((post) => post.id.toString() === id);
  // console.log(post)
  return (
    <main className="grow">
      {post ? (
        <article className="max-w-3xl mx-auto p-3 flex flex-col h-full items-center">
          <div className="post-body">
            <h1 className="text-center text-3xl font-bold">{post.title}</h1>
            <p className="text-center text-slate-400">{post.datetime}</p>
            <p className="pt-3 text-xl">{post.body}</p>
          </div>
          <div className="postPageBu mt-auto mb-2 flex gap-3">
            <Link to={`/editpost/${post.id}`}>
              <button
                className="bg-green-500 hover:bg-green-800 text-white 
                        py-2 px-3
                        flex items-center gap-3"
                title="edit post"
              >
                <FaEdit /> <span>Edit post</span>
              </button>
            </Link>
            <button
              className="bg-red-500 hover:bg-red-800 text-white 
                        py-2 px-3
                        flex items-center gap-3"
              title="delete post"
              onClick={() => handleDelete(post.id)}
            >
              <FaTrashAlt /> <span>Delete post</span>
            </button>
          </div>
        </article>
      ) : (
        <PageNotFound />
      )}
    </main>
  );
};

export default PostPage;
