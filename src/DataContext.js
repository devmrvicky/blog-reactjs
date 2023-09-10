import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api/posts";
import { format } from "date-fns";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
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
      });
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
      setPost(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditPost({
        id: "",
        title: "",
        body: "",
      });
      navigate("/");
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
    <DataContext.Provider
      value={{
        expandSearchBox,
        setExpandSearchBox,
        search,
        setSearch,
        posts,
        handleDelete,
        postsBody,
        setPostsBody,
        handleSubmit,
        handleEdit,
        editPost,
        setEditPost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
