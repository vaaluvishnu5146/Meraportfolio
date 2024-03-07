import { useParams } from "react-router-dom";
import Billboard from "../../Components/Billboard/Billboard";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { useSelector } from "react-redux";

export default function Blogs() {
  const { category } = useParams();
  const { courses = [], cart = {} } = useSelector((state) => state);
  const { data = [] } = courses;
  const { items = [] } = cart;
  const filteredBlogs =
    category === "all"
      ? data
      : data.filter((blog) => blog.tags.includes(category));

  function findIsDisabled(data = {}) {
    const cartCopy = [...items];
    if (cartCopy.find((c) => c.id === data.id)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="container">
      <Billboard />
      <div className="blogs-listing-container">
        <h3 className="my-3">Available Blogs</h3>
        <div className="blogs-container">
          <div className="row" style={{ rowGap: 20 }}>
            {filteredBlogs.map((blog, index) => (
              <div key={`${blog.name}-${index}`} className="col-md-3">
                <BlogCard product={blog} disabled={findIsDisabled(blog)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
