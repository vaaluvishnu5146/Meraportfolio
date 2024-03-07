import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import "./style.css";
import { AuthContext } from "./Context/AuthContext";
import Cart from "./Pages/Cart/Cart";
import { saveCourses } from "./Redux/Reducers/Courses.reducer";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatcher = useDispatch();
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5173/data.json")
      .then((response) => response.json())
      .then((result) => {
        dispatcher(saveCourses(result.products));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <Navbar />
      <div className="my-2"></div>
      {!loggedIn && (
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      )}
      {loggedIn && (
        <Routes>
          <Route path="/:category" Component={Blogs} />
          <Route path="/blog/:id" Component={BlogDetails} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      )}
    </main>
  );
}
