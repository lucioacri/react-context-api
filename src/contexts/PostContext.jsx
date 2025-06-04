import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/bacheca")
      .then((response) => {
        setPosts(response.data.Object);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostsContext);
  return context;
}

export { PostsProvider, usePosts };
