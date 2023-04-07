import React, { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const EditPost = ({ posts, handleEdit, editPost, setEditPost }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditPost({ ...editPost, title: post.title, body: post.body });
    }
  }, [posts, setEditPost]);
  return (
    <>
      {editPost && (
        <form
          className="max-w-3xl mx-auto w-full m-4 flex flex-col items-center relative"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl my-4">Edit post here</h1>
          <div className="input-field p-2 w-full">
            <label htmlFor="input-title" className="text-xl">
              Title :{" "}
            </label>
            <input
              className="border w-full p-2 rounded-md mt-2"
              required
              autoFocus
              type="text"
              placeholder="Write post title"
              value={editPost.title}
              onChange={(e) =>
                setEditPost({ ...editPost, title: e.target.value })
              }
            />
          </div>
          <div className="input-field p-2 w-full grow">
            <label htmlFor="input-post" className="text-xl">
              Post :{" "}
            </label>
            <textarea
              className="border w-full p-2 rounded-md mt-2 h-96 resize-none"
              required
              name="post"
              id="input-post"
              placeholder="Write post body"
              value={editPost.body}
              onChange={(e) =>
                setEditPost({ ...editPost, body: e.target.value })
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 text-white 
                  border py-2 px-5 mt-2 flex items-center gap-4"
            onClick={() => handleEdit(post.id)}
          >
            <FaPaperPlane /> <span>save change</span>
          </button>
        </form>
      )}
      {!editPost && <PageNotFound />}
    </>
  );
};

export default EditPost;
