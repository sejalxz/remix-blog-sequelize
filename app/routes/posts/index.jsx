import { Link, useLoaderData } from "@remix-run/react";
import { Blog } from "../../../models/index.server";

export const loader = async () => {
  const data = {
    posts: await Blog.findAll({
      limit: 20,
      order: [["createdAt", "DESC"]],
    })
      .then((posts) => posts)
      .catch((err) => console.log(err)),
  };
  // console.log(data);
  return data;
};

export default function PostItems() {
  const { posts } = useLoaderData();
  // console.log(posts);

  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.post_title}</h3>
              {new Date(post.createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
