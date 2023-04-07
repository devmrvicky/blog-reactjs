import { FaPaperPlane } from "react-icons/fa";

const NewPost = ({ postsBody, setPostsBody, handleSubmit }) => {
  return (
    <form
      className="max-w-3xl mx-auto w-full m-4 flex flex-col items-center relative"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl my-4">Write your post here</h1>
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
          value={postsBody.title}
          onChange={(e) =>
            setPostsBody({ ...postsBody, title: e.target.value })
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
          value={postsBody.body}
          onChange={(e) => setPostsBody({ ...postsBody, body: e.target.value })}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-cyan-400 hover:bg-cyan-500 text-white 
                    border py-2 px-5 mt-2 flex items-center gap-4"
      >
        <FaPaperPlane /> <span>Submit</span>
      </button>
    </form>
  );
};

export default NewPost;
