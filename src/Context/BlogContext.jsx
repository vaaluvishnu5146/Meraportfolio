// 1. Creating Blog Context
// 2. Creating BlogContextProvider
import { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const BlogContext = createContext({
  blogs: [],
});

export default function BlogContextProvider({ children }) {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    // fetch("http://localhost:5173/data.json")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setBlogs(result.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    Axios.get("http://localhost:5173/data.json")
      .then((result) => {
        setBlogs(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
