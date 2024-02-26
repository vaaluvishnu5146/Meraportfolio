import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";

export default function App() {
  return (
    <section>
      <h1>React router</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/blog/1/2">Blog</Link>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/blog/:blogId/:categoryId" Component={BlogDetails} />
      </Routes>
    </section>
  );
}
