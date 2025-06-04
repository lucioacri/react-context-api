import PostCard from "./PostCard";
import { usePosts } from "../../contexts/PostContext";

export default function PostsList() {
  const { posts } = usePosts();
  console.log(posts);

  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
}
