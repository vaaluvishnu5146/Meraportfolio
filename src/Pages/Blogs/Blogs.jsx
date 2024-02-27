import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Billboard from "../../Components/Billboard/Billboard";
import BlogCard from "../../Components/BlogCard/BlogCard";

export default function Blogs() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/data.json")
      .then((response) => response.json())
      .then((result) => {
        const blogs = result.data;
        if (category === "all") {
          setData(blogs);
        } else {
          setData(blogs.filter((blog) => blog.tags.includes(category)));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, [category]);

  return (
    <div className="container">
      <Billboard />
      <div className="blogs-listing-container">
        <h3 className="my-3">Available Blogs</h3>
        <div className="blogs-container">
          <div className="row" style={{ rowGap: 20 }}>
            {data.map((blog, index) => (
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
