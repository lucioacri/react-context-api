import { Link, useParams } from "react-router";
import pages from "../data/pages";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/bacheca/${id}`)
      .then((res) => setPost(res.data.Object))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <img src={post.image} alt={post.title} className="card-img-top" />
          <Link to={pages.list()} className="btn btn-primary">
            Back to the list
          </Link>
        </div>
      </div>
    </div>
  );
}
