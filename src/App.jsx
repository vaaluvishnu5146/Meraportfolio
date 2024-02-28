import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import "./style.css";
import BlogContextProvider from "./Context/BlogContext";
import { AuthContext } from "./Context/AuthContext";

export default function App() {
  const { loggedIn } = useContext(AuthContext);
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
        <BlogContextProvider>
          <Routes>
            <Route path="/:category" Component={Blogs} />
            <Route path="/blog/:id" Component={BlogDetails} />
          </Routes>
        </BlogContextProvider>
      )}
    </main>
  );
}
