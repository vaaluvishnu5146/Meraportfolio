import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Billboard from "../../Components/Billboard/Billboard";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { BlogContext } from "../../Context/BlogContext";

export default function Blogs() {
  const { category } = useParams();
  const { blogs = [] } = useContext(BlogContext);
  const filteredBlogs =
    category === "all"
      ? blogs
      : blogs.filter((blog) => blog.tags.includes(category));

  return (
    <div className="container">
      <Billboard />
      <div className="blogs-listing-container">
        <h3 className="my-3">Available Blogs</h3>
        <div className="blogs-container">
          <div className="row" style={{ rowGap: 20 }}>
            {filteredBlogs.map((blog, index) => (
              <div key={`${blog.name}-${index}`} className="col-md-3">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
