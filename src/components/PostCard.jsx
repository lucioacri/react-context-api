import { Link } from "react-router";
import pages from "../data/pages";

export default function PostCard({ post }) {
  return (
    <div className="col-3">
      <div className="card">
        <img src={post.image} alt={post.title} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{post.title}</p>
          <Link to={pages.detail(post.id)} className="btn btn-success">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
}
