import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";

export default function PostsList() {
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
    <>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
}
