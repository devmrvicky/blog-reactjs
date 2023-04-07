import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Home,
  Header,
  Nav,
  Footer,
  About,
  Contact,
  PostPage,
  NewPost,
  PageNotFound,
  EditPost
} from "./components/index";
import api from "./api/posts";

function App() {
  // expand search box
  const [expandSearchBox, setExpandSearchBox] = useState(false);
  // posts
  const [posts, setPost] = useState([]);
  const [postsBody, setPostsBody] = useState({
    id: "",
    title: "",
    body: "",
  });
  const [editPost, setEditPost] = useState({
    id: "",
    title: "",
    body: "",
  });
  // search post
  const [search, setSearch] = useState("");
  // searched posts
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  // initialize app
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("/posts");
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  // handleDelete
  const handleDelete = async (id) => {
    await api.delete(`/posts/${id}`);
    const remainPost = posts.filter((post) => post.id !== id);
    setPost(remainPost);
    navigate("/");
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, ...postsBody, datetime };
    try {
      const response = await api.post("/posts", newPost);
      const postList = [...posts, response.data];
      setPost(postList);
      setPostsBody({
        id: "",
        title: "",
        body: "",
      })
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  // handleEdit
  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatePost = { id, ...editPost, datetime };
    try {
      const response = await api.patch(`/posts/${id}`, updatePost);
      setPost(posts.map((post) => (post.id === id ? { ...response.data } : post)));
      setEditPost({
        id: "",
        title: "",
        body: "",
      })
      navigate("/")
    } catch (err) {
      console.log(err.message);
    }
  };

  // search post
  useEffect(() => {
    const searchedPost = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(searchedPost.reverse());
    // setPost(searchedPost.reverse());
  }, [posts, search]);

  return (
    <div className="App flex flex-col h-screen relative">
      <Header
        expandSearchBox={expandSearchBox}
        setExpandSearchBox={setExpandSearchBox}
        search={search}
        setSearch={setSearch}
      />
      <Nav />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/postpage/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route
          path="/newpost"
          element={
            <NewPost
              postsBody={postsBody}
              setPostsBody={setPostsBody}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/editpost/:id"
          element={
            <EditPost
              posts={posts}
              handleEdit={handleEdit}
              editPost={editPost}
              setEditPost={setEditPost}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
