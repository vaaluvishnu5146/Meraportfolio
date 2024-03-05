import { useSelector } from "react-redux";

export default function BlogDetails() {
  const { blogs = {} } = useSelector((state) => state);
  return <div>BlogDetails {blogs.data.length}</div>;
}
