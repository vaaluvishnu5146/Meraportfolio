import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import "./style.css";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="my-2"></div>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/:category" Component={Blogs} />
        <Route path="/blog/:id" Component={BlogDetails} />
      </Routes>
    </main>
  );
}
