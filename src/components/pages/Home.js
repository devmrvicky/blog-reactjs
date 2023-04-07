import { Link } from "react-router-dom";
import Feed from "../Feed";

const Home = ({ posts }) => {
  // console.log(posts);
  return (
    <main
      className={
        !posts
          ? `flex items-center justify-center grow`
          : "m-2 max-w-3xl w-full mx-auto"
      }
    >
      {posts ? (
        posts.length === 0 ? (
          <p className="text-3xl font-semibold my-10 italic text-center text-zinc-400">No post found</p>
        ) : (
          <Feed posts={posts} />
        )
      ) : (
        <div>
          <p className="text-4xl italic p-3 text-slate-400">
            Nothing to display here!
          </p>
          <p className="text-center">
            <Link
              to="/post"
              className="text-xl hover:text-slate-400 hover:underline italic"
            >
              Create post
            </Link>
          </p>
        </div>
      )}
    </main>
  );
};

export default Home;
