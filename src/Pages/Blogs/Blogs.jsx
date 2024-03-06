import { useParams } from "react-router-dom";
import Billboard from "../../Components/Billboard/Billboard";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { useSelector } from "react-redux";

export default function Blogs() {
  const { category } = useParams();
  const { data = [] } = useSelector((state) => state.courses);
  const filteredBlogs =
    category === "all"
      ? data
      : data.filter((blog) => blog.tags.includes(category));

  return (
    <div className="container">
      <Billboard />
      <div className="blogs-listing-container">
        <h3 className="my-3">Available Blogs</h3>
        <div className="blogs-container">
          <div className="row" style={{ rowGap: 20 }}>
            {filteredBlogs.map((blog, index) => (
              <div key={`${blog.name}-${index}`} className="col-md-3">
                <BlogCard product={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
