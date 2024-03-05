import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Billboard from "../../Components/Billboard/Billboard";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { storeBlogs } from "../../Redux/Reducers/BlogReducer";
import { useDispatch, useSelector } from "react-redux";

export default function Blogs() {
  const dispatcher = useDispatch();
  const { category } = useParams();
  const { blogs = {} } = useSelector((state) => state);
  const { data = [] } = blogs;
  const filteredBlogs =
    category === "all"
      ? data
      : data.filter((blog) => blog.tags.includes(category));

  useEffect(() => {
    fetch("http://localhost:5173/data.json")
      .then((response) => response.json())
      .then((result) => {
        dispatcher(storeBlogs(result.products));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
