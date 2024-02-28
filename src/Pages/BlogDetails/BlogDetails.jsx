import { useContext } from "react";
import { BlogContext } from "../../Context/BlogContext";

export default function BlogDetails() {
  const { blogs = [] } = useContext(BlogContext);
  return <div>BlogDetails {blogs.length}</div>;
}
